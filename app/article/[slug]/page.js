import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkToc from 'remark-toc';
import remarkEmoji from 'remark-emoji';
import OnThisPage from "@/components/onthispage";
import { join } from 'path';
import { styles } from './styles.css';


function getBlogSlugs() {
  const contentDir = join(process.cwd(), 'content', 'article');

  if (!fs.existsSync(contentDir)) {
    console.warn('Content directory not found:', contentDir);
    return [];
  }

  const files = fs.readdirSync(contentDir);

  return files
    .filter(filename => filename.endsWith('.md'))
    .map(filename => filename.replace('.md', ''));
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const filepath = join(process.cwd(), 'content', 'article', `${slug}.md`);

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
    author: data.author,
  };
}

export default async function Page({ params }) {
  const { slug } = params;
  const filepath = join(process.cwd(), 'content', 'article', `${slug}.md`);

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
    .use(remarkToc, {
      heading: 'Table of Contents',
      tight: true,
    })
    .use(remarkEmoji)
    .use(remarkRehype, {
      allowDangerousHtml: true
    })
    .use(rehypeDocument, {
      title: data.title || 'Blog Post',
      css: [
        'https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css'
      ],
      style: styles
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
        if (!node.properties.className) {
          node.properties.className = [];
        }
        node.properties.className.push('highlighted');
      }
      ,
      onVisitHighlightedWord(node) {
        node.properties.className = ['word'];
      },
    })
    .use(rehypeStringify, { allowDangerousHtml: true });

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-sm md:text-base mb-2 border-l-4 border-gray-500 pl-4 italic">&quot;{data.description}&quot;</p>

      {data.tags && data.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {data.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 md:px-3 py-1 text-xs md:text-sm rounded-full bg-gray-100 
                        dark:bg-gray-800 text-gray-700 dark:text-gray-300 
                        hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <p className="text-xs md:text-sm text-gray-500 italic">By {data.author}</p>
        <p className="text-xs md:text-sm text-gray-500">{data.date}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="prose dark:prose-invert max-w-none lg:w-[75%]
                     prose-headings:scroll-mt-20
                     prose-sm md:prose-base
                     prose-a:text-blue-600 dark:prose-a:text-blue-400
                     prose-p:text-gray-700 dark:prose-p:text-gray-300
                     prose-img:rounded-lg prose-img:w-full
                     prose-code:text-blue-600 dark:prose-code:text-blue-400
                     prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800
                     prose-pre:overflow-x-auto"
        />
        <div className="lg:w-[20%] sticky top-20 h-fit">
          <div className="hidden lg:block">
            <OnThisPage htmlContent={htmlContent} />
          </div>
          <div className="lg:hidden mb-8">
            <details className="bg-gray-800 p-3 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                On This Page
              </summary>
              <OnThisPage htmlContent={htmlContent} />
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}