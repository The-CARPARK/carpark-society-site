import Head from "next/head";
import Layout from "../components/Layout";
import { useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  date: string;
}

export default function Blog({ posts }: { posts: Post[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSecret, setShowSecret] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim() === "37D9-TR1N") {
      setShowSecret(true);
    }
  };

  return (
    <>
      <Head>
        <title>Blog - Broadcast Logs</title>
        <meta name="description" content="Ongoing transmissions from The Carpark Society." />
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-8 text-white">
          <h1 className="text-4xl font-bold text-center text-red-400">Broadcast Logs</h1>
          <div className="flex justify-center gap-2 mt-6">
            <input
              type="text"
              placeholder="Search code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-1 text-black text-sm"
            />
            <button
              onClick={handleSearch}
              className="px-3 py-1 text-sm uppercase border border-gray-600 rounded hover:bg-gray-800 hover:text-white transition-colors"
            >
              Search
            </button>
          </div>
          {showSecret && (
            <p className="text-green-400 text-center text-sm">
              Code recognized. <Link href="/decrypt" className="underline hover:text-red-500">Proceed to decryption node</Link>
            </p>
          )}
          <ul className="space-y-4 pt-6">
            {posts.map(({ slug, title, date }) => (
              <li key={slug}>
                <Link href={`/posts/${slug}`} className="block hover:text-red-400">
                  <p className="text-lg font-semibold">{title}</p>
                  <p className="text-sm text-gray-500 italic">{date}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((file) => file.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title || "Untitled",
        date: data.date || "Unknown",
      };
    });

  return {
    props: {
      posts: posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    },
  };
}
