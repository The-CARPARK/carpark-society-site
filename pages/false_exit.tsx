import Head from "next/head";
import Layout from "../components/Layout";

export default function FalseExit() {
  return (
    <>
      <Head>
        <title>False Exit</title>
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-6 text-white text-center">
          <h1 className="text-3xl font-bold text-red-400">⌁ False Exit</h1>
          <p className="text-sm text-gray-400 italic">You thought <span className="text-red-300">this</span> was the way out.</p>
          <p className="text-sm text-gray-300">But the carpark does not forget. Loop reinitializing…</p>
        </div>
      </Layout>
    </>
  );
}