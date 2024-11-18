import React from 'react';  
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import fs from "fs";
import matter from 'gray-matter';

const dirContent = fs.readdirSync("content/article", "utf-8");

const blogs = dirContent.map(file => {
    const fileContent = fs.readFileSync(`content/article/${file}`, "utf-8")
    const {data} = matter(fileContent)
    return data
});

const Blog = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12 text-center">
        Articles
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden dark:border-2 flex flex-col">
            {/* Blog post image */}
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-48 sm:h-56 lg:h-64 object-cover"
            />
            
            <div className="p-3 sm:p-4 flex flex-col flex-grow">
              {/* Blog post title */}
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                {blog.title}
              </h2>

              <p className="mb-4 flex-grow">
                {blog.description}
              </p>
              
              <div className="text-xs sm:text-sm mb-4">
                <span>By {blog.author}</span> | <span>
                  {new Date(blog.date).toLocaleDateString('en-GB', { 
                    day: '2-digit', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </span>
              </div>

              <Link 
                href={`/article/${blog.slug}`} 
                className={`${buttonVariants({ variant: "secondary" })} w-full sm:w-auto text-center`}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;
