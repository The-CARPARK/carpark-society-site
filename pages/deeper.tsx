import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";

export default function DeeperMenu() {
  return (
    <>
      <Head>
        <title>Deeper Archives</title>
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-6 text-white text-center">
          <h1 className="text-3xl font-bold text-red-400">⋔ Deeper Archives ⋔</h1>
          <p className="text-sm text-gray-400 italic">Not all exits are exits.</p>
          <p className="text-sm text-gray-300">Choose wisely:</p>
          <div className="space-y-3">
            <Link href="/false_exit">
              <button className="px-4 py-2 border border-gray-600 rounded hover:bg-gray-800 transition-colors text-sm">
                Try the Exit Door
              </button>
            </Link>
            <Link href="/blog/the-black-staircase">
              <button className="px-4 py-2 border border-gray-600 rounded hover:bg-gray-800 transition-colors text-sm">
                View Black Staircase Log
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
