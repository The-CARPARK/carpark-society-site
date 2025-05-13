import Head from "next/head";
import Layout from "../../components/Layout";
import { useState } from "react";
import Link from "next/link";

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [codeRevealed, setCodeRevealed] = useState(false);

  const posts = [
    { slug: "first-transmission", title: "First Transmission" },
    { slug: "broadcast-from-level6", title: "Broadcast from Level 6" },
    { slug: "beneath-the-asphalt", title: "Beneath the Asphalt" }
  ];

  const handleSearch = () => {
    if (query.trim() === "37D9-TR1N") {
      setCodeRevealed(true);
    } else {
      setCodeRevealed(false);
    }
  };

  return (
    <>
      <Head>
        <title>Blog - Carpark Society</title>
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-8 text-white">
          <h1 className="text-4xl font-bold text-red-400 text-center">Blog</h1>
          <div className="text-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search transmissions"
              className="px-4 py-2 text-black rounded mr-2"
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 border border-gray-600 rounded hover:bg-gray-800 hover:text-white transition-colors text-sm"
            >
              Search
            </button>
          </div>

          {codeRevealed && (
            <div className="text-green-400 text-center text-sm">
              Decryption accepted. <Link href="/signal-depth" className="underline hover:text-white">Access SIGNAL DEPTH</Link>
            </div>
          )}

          {!codeRevealed && query && (
            <div className="text-gray-400 text-center text-sm italic">
              No results found. Static interference?
            </div>
          )}

          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.slug}>
                <Link href={`/posts/${post.slug}`}>
                  <p className="text-lg text-red-300 hover:underline">{post.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
