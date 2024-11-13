import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { Badge } from "@/components/ui/badge";

export default async function EventPage({ params }) {
    const filepath = `app/content/event/${params.slug}.md`;
    
    if (!fs.existsSync(filepath)) {
        notFound();
        return;
    }

    const fileContent = fs.readFileSync(filepath, "utf-8");
    const { content, data } = matter(fileContent);

    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify);

    const htmlContent = (await processor.process(content)).toString();

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
                <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
                    "{data.description}"
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                    <p className="text-sm">
                        <span className="font-semibold">Date: </span>
                        {new Date(data.date).toLocaleDateString()}
                    </p>
                    {data.location && (
                        <p className="text-sm">
                            <span className="font-semibold">Location: </span>
                            {data.location}
                        </p>
                    )}
                    {data.organizer && (
                        <p className="text-sm">
                            <span className="font-semibold">Organizer: </span>
                            {data.organizer}
                        </p>
                    )}
                </div>
            </div>
            <div 
                dangerouslySetInnerHTML={{ __html: htmlContent }} 
                className="prose dark:prose-invert max-w-none"
            />
        </div>
    );
}