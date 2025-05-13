
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Blog({ posts }) {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(posts);

  const handleSearch = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (val === '37D9-TR1N') {
      window.location.href = '/decryption_passed';
    } else {
      setFiltered(posts.filter((post) =>
        post.title.toLowerCase().includes(val.toLowerCase())
      ));
    }
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-12 text-white">
        <h1 className="text-3xl font-bold mb-4">📡 Broadcast Logs</h1>
        <input
          type="text"
          placeholder="Search transmissions..."
          value={query}
          onChange={handleSearch}
          className="w-full p-2 mb-6 rounded bg-gray-800 text-white border border-gray-700"
        />
        <ul className="space-y-4">
          {filtered.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="text-red-400 hover:underline text-xl">
                {post.title}
              </Link>
              <p className="text-sm text-gray-500">{post.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
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
      posts: posts.sort((a, b) => new Date(b.date) - new Date(a.date)),
    },
  };
}
