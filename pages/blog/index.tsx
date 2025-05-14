'use client';

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title,
      date: data.date,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function BlogIndex({ posts }: { posts: { slug: string; title: string; date: string }[] }) {
  const [searchValue, setSearchValue] = useState('');
  const [noResults, setNoResults] = useState(false);
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (searchValue.trim() === 'A7X-93L-R9F') {
        router.push('/secret');
      } else {
        setNoResults(true);
        setTimeout(() => setNoResults(false), 3000);
      }
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center text-white py-10">
        <h1 className="text-4xl font-bold mb-4 text-center">Blog</h1>
        <div className="flex flex-col items-center mb-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-72 px-3 py-2 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {noResults && (
            <span className="text-red-600 text-sm mt-2">No results found.</span>
          )}
        </div>
        <ul className="space-y-6 w-full max-w-xl">
          {posts.map(({ slug, title, date }) => (
            <li key={slug}>
              <Link href={`/blog/${slug}`} className="text-blue-500 text-2xl underline block text-center">
                {title}
              </Link>
              <p className="text-gray-400 text-center text-sm">{date}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}