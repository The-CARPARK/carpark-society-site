
import Head from "next/head";
import Layout from "../components/Layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { useState } from "react";

interface Post {
  slug: string;
  title: string;
  date: string;
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts: Post[] = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.tsx$/, ""),
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

export default function BlogPage({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<Post[] | null>(null);

  const handleSearch = () => {
    if (query === "37D9-TR1N") {
      window.location.href = "/signal_depth";
    } else {
      setFiltered([]);
    }
  };

  return (
    <>
      <Head>
        <title>Watch Logs</title>
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-6 text-white">
          <h1 className="text-4xl font-bold text-center text-red-400">Watch Logs</h1>
          <div className="text-center mt-6 space-y-4">
            <input
              type="text"
              placeholder="Search signal archives..."
              className="px-4 py-2 bg-black border border-gray-600 rounded text-sm text-white w-full max-w-md"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="ml-2 px-4 py-2 border border-gray-600 rounded hover:bg-gray-800 hover:text-white transition-colors text-sm"
            >
              Search
            </button>
          </div>
          <div className="mt-8 space-y-4">
            {(filtered ?? posts).length > 0 ? (
              (filtered ?? posts).map((post) => (
                <div key={post.slug}>
                  <Link href={`/posts/${post.slug}`} className="text-lg text-blue-400 hover:underline">
                    {post.title}
                  </Link>
                  <p className="text-xs text-gray-400">{post.date}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500 italic text-center mt-8">No results found. Static interference?</p>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
