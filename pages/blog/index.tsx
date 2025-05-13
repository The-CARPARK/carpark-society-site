import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map(name => {
    const filePath = path.join(postsDirectory, name);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const titleMatch = fileContent.match(/title: "(.*?)"/);
    const dateMatch = fileContent.match(/date: "(.*?)"/);
    return {
      slug: name.replace(/\.tsx$/, ""),
      title: titleMatch ? titleMatch[1] : "Untitled",
      date: dateMatch ? dateMatch[1] : "Unknown"
    };
  });
  return { props: { posts } };
}

export default function Blog({ posts }) {
  const [query, setQuery] = useState("");
  const correctCode = "37D9-TR1N";
  const filtered = query === ""
    ? posts
    : query === correctCode
    ? posts.filter(post => post.slug === "signal_depth")
    : [];

  return (
    <>
      <Head>
        <title>Blog - Signals from the Structure</title>
      </Head>
      <div className="max-w-3xl mx-auto py-12 space-y-8 text-white">
        <h1 className="text-4xl font-bold text-center text-red-400">Signals from the Structure</h1>
        <div className="text-center mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for signals..."
            className="w-full px-4 py-2 border border-gray-700 bg-black text-white placeholder-gray-500 rounded"
          />
        </div>
        <ul className="space-y-4">
          {filtered.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`} className="text-lg text-red-300 hover:text-white transition-colors">
                {post.title}
              </Link>
              <p className="text-sm text-gray-500">{post.date}</p>
            </li>
          ))}
        </ul>
        {filtered.length === 0 && <p className="text-center text-gray-500 text-sm italic">Nothing received on this frequency.</p>}
      </div>
    </>
  );
}