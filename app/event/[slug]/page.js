import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import {unified} from 'unified';
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { join } from 'path';
import { Badge } from "@/components/ui/badge";

export const eventSlugs = [
  // Add your event slugs here
];

export async function generateStaticParams() {
  return eventSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const filepath = join(process.cwd(), 'content', 'event', `${slug}.md`);

  if (!fs.existsSync(filepath)) {
    return {
      notFound: true,
    };
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { data } = matter(fileContent);

  return {
    title: data.title,
    description: data.description,
    date: data.date,
    organizer: data.organizer,
  };
}

export default async function EventPage({ params }) {
  const { slug } = params;
  const filepath = join(process.cwd(), 'content', 'event', `${slug}.md`);

  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  const getBadgeVariant = (eventType) => {
    switch(eventType) {
      case 'upcoming': return 'default';
      case 'live': return 'destructive';
      case 'past': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <Badge variant={getBadgeVariant(data.event_type)}>
            {data.event_type}
          </Badge>
        </div>
        <p className="text-base mb-4 border-l-4 border-gray-500 pl-4 italic">
          &quot;{data.description}&quot;
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="mb-2">
              <span className="font-semibold">Date: </span>
              {new Date(data.date).toLocaleString()}
            </p>
            <p className="mb-2">
              <span className="font-semibold">End Date: </span>
              {new Date(data.endDate).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="mb-2">
              <span className="font-semibold">Location: </span>
              {data.location}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Organizer: </span>
              {data.organizer}
            </p>
          </div>
        </div>
        {data.tags && (
          <div className="flex gap-2 mt-4">
            {data.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
      
      <div 
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
        className="prose dark:prose-invert"
      />
    </div>
  );
}
