
import Head from "next/head";
import Layout from "../../components/Layout";
import Link from "next/link";
import { useState } from "react";

const posts = [
  { title: "First Transmission", slug: "first-transmission" },
  { title: "Bunker Interference Log", slug: "bunker-interference" },
  { title: "Observation Failed", slug: "observation-failed" },
];

export default function Blog() {
  const [search, setSearch] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const showSecret = search.trim() === "XV-91-Kappa";

  return (
    <>
      <Head>
        <title>Blog - Signals and Archives</title>
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-8 text-white">
          <h1 className="text-4xl font-bold text-center text-red-400">Signal Archives</h1>
          <p className="text-sm text-center text-gray-400 italic">Fragments from the Carpark Watch</p>
          <form onSubmit={handleSearch} className="text-center mt-4">
            <input
              type="text"
              placeholder="Search Signals..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 rounded bg-gray-800 border border-gray-700 text-sm text-white"
            />
            <button
              type="submit"
              className="ml-2 px-4 py-1 text-sm uppercase border border-gray-600 rounded hover:bg-gray-800 transition-colors"
            >
              Search
            </button>
          </form>

          {submitted && !showSecret && (
            <p className="text-center text-gray-500 mt-4 italic">No results found. Static interference?</p>
          )}

          {showSecret && (
            <div className="text-center mt-6">
              <p className="text-green-400">Code accepted. Routing to secure archive…</p>
              <Link href="/signal_depth">
                <span className="text-blue-400 underline hover:text-blue-600">→ Proceed to Signal Depth</span>
              </Link>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}
