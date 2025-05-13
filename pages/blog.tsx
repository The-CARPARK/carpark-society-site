
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
import { useState } from 'react';

export default function Blog({ posts }: { posts: { slug: string; date: string; title: string }[] }) {
  const [query, setQuery] = useState('');
  const secretCode = "37D9-TR1N";

  const filteredPosts = query === secretCode
    ? posts
    : posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <Head>
        <title>Blog - The Carpark Society</title>
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 text-white space-y-6">
          <h1 className="text-4xl font-bold text-center text-red-400">Blog</h1>
          <div className="text-center">
            <input
              type="text"
              placeholder="Search blog..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="p-2 rounded bg-gray-800 text-white border border-gray-600"
            />
          </div>
          {filteredPosts.length === 0 ? (
            <p className="text-center text-sm text-gray-500 mt-4">No results found. Static interference?</p>
          ) : (
            <ul className="space-y-4 mt-4">
              {filteredPosts.map(({ slug, date, title }) => (
                <li key={slug}>
                  <Link href={`/blog/${slug}`} className="text-xl text-red-400 hover:underline">{title}</Link>
                  <p className="text-sm text-gray-500">{date}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts
    }
  };
}
