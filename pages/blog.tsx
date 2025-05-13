import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useState } from 'react';

type Post = {
  title: string;
  date: string;
  slug: string;
};

export default function Blog({ posts }: { posts: Post[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const secretCode = '37D9-TR1N';

  const filteredPosts = searchTerm === secretCode
    ? posts
    : searchTerm === ''
    ? posts
    : [];

  return (
    <>
      <Head>
        <title>Blog - The Carpark Society</title>
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-8 text-white">
          <h1 className="text-4xl font-bold text-center text-red-400">The Watchers’ Log</h1>
          <div className="mt-6">
            <input
              type="text"
              placeholder="Search for anomalies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 text-black rounded"
            />
            {searchTerm && filteredPosts.length === 0 && (
              <p className="text-sm text-gray-500 mt-2">No results found. Static interference?</p>
            )}
          </div>
          <ul className="space-y-4">
            {filteredPosts.map(({ title, date, slug }) => (
              <li key={slug} className="border-b border-gray-700 pb-2">
                <Link href={`/posts/${slug}`} className="text-lg text-blue-300 hover:underline">
                  {title}
                </Link>
                <p className="text-sm text-gray-500">{date}</p>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      title: data.title,
      date: data.date,
      slug: filename.replace(/\.md$/, ''),
    };
  });

  return {
    props: {
      posts: posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    },
  };
}
