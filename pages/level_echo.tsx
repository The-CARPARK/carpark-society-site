import Head from "next/head";
import Layout from "../components/Layout";

export default function LevelEcho() {
  return (
    <>
      <Head>
        <title>Echo of the Level</title>
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-6 text-white text-center">
          <h1 className="text-3xl font-bold text-red-400">⋔ Echo of the Level</h1>
          <p className="text-sm text-gray-400 italic">You’ve reached the reflection, not the source.</p>
          <p className="text-sm text-gray-300">A loop repeats until remembered. This is not the beginning. This is not the end. Return when the signal changes frequency.</p>
        </div>
      </Layout>
    </>
  );
}