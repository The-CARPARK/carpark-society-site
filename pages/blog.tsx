
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Blog({ posts }: { posts: any[] }) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim() === "37D9-TR1N") {
      router.push("/hidden_signal");
    }
  };

  return (
    <>
      <Head>
        <title>Blog - Carpark Society</title>
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-8 text-white">
          <h1 className="text-4xl font-bold text-center text-red-400">Field Logs</h1>
          <form onSubmit={handleSearch} className="mb-6">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search logs..."
              className="w-full px-4 py-2 border border-gray-700 bg-black text-white rounded focus:outline-none focus:border-red-400"
            />
          </form>
          <ul className="space-y-6">
            {posts.map((post, index) => (
              <li key={index}>
                <Link href={`/posts/${post.slug}`}>
                  <div className="cursor-pointer hover:text-red-400">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="text-sm text-gray-400">{post.date}</p>
                  </div>
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

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      ...data,
      slug: filename.replace(/\.md$/, ""),
    };
  });

  return {
    props: {
      posts: posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    },
  };
}
