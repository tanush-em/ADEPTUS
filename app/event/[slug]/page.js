import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkEmoji from 'remark-emoji';
import { join } from 'path';
import { Badge } from "@/components/ui/badge";


function getEventSlugs() {
  const contentDir = join(process.cwd(), 'content', 'event');

  if (!fs.existsSync(contentDir)) {
    console.warn('Event content directory not found:', contentDir);
    return [];
  }

  const files = fs.readdirSync(contentDir);

  return files
    .filter(filename => filename.endsWith('.md'))
    .map(filename => filename.replace('.md', ''));
}

export async function generateStaticParams() {
  const eventSlugs = getEventSlugs();
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
    .use(remarkGfm, { singleTilde: false })
    .use(remarkMath)
    .use(remarkEmoji)
    .use(remarkRehype, {
      allowDangerousHtml: true
    })
    .use(rehypeDocument, {
      title: data.title || 'Event',
      css: [
        'https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css'
      ]
    })
    .use(rehypeKatex)
    .use(rehypeFormat)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: 'append',
      properties: {
        className: ['anchor'],
        ariaHidden: true,
        tabIndex: -1
      },
      content: {
        type: 'element',
        tagName: 'span',
        properties: {
          className: ['anchor-icon']
        },
        children: [{ type: 'text', value: '' }]
      }
    })
    .use(rehypePrettyCode, {
      theme: 'github-dark',
      keepBackground: true,
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        })
      ],
      onVisitLine(node) {
        if (node.children.length === 0) {
          node.children = [{ type: 'text', value: ' ' }];
        }
      },
      onVisitHighlightedLine(node) {
        node.properties.className.push('highlighted');
      },
      onVisitHighlightedWord(node) {
        node.properties.className = ['word'];
      },
    })
    .use(rehypeStringify, { allowDangerousHtml: true });


  const htmlContent = (await processor.process(content)).toString();

  const getBadgeVariant = (eventType) => {
    switch (eventType) {
      case 'upcoming': return 'default';
      case 'live': return 'destructive';
      case 'past': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto mb-6 md:mb-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{data.title}</h1>
          <Badge variant={getBadgeVariant(data.event_type)}>
            {data.event_type}
          </Badge>
        </div>

        <p className="text-sm md:text-base mb-4 md:mb-6 border-l-4 border-gray-500 pl-4 italic bg-gray-50 dark:bg-gray-800/50 py-2 md:py-3 rounded-r">
          &quot;{data.description}&quot;
        </p>

        <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-4 md:p-6 mb-4 md:mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-xs md:text-sm">
            <div className="space-y-2 md:space-y-3">
              <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="font-semibold sm:min-w-24">Date:</span>
                {new Date(data.date).toLocaleString()}
              </p>
            </div>
            <div className="space-y-2 md:space-y-3">
              <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="font-semibold sm:min-w-24">Location:</span>
                {data.location}
              </p>
            </div>
          </div>
        </div>

        {data.tags && (
          <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
            {data.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs md:text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose dark:prose-invert max-w-4xl mx-auto
          prose-sm md:prose-base lg:prose-lg
          prose-headings:scroll-mt-20
          prose-h1:text-2xl md:prose-h1:text-3xl prose-h2:text-xl md:prose-h2:text-2xl prose-h3:text-lg md:prose-h3:text-xl
          prose-p:text-gray-700 dark:prose-p:text-gray-300
          prose-a:text-blue-600 dark:prose-a:text-blue-400
          prose-img:rounded-lg
          prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800
          prose-pre:p-4 prose-pre:rounded-lg
          prose-code:text-blue-600 dark:prose-code:text-blue-400"
      />
    </div>
  );
}

