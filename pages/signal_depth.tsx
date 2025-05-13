import Head from "next/head";
import Layout from "../components/Layout";

export default function SignalDepth() {
  return (
    <>
      <Head>
        <title>Signal Depth</title>
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-6 text-white text-center">
          <h1 className="text-3xl font-bold text-red-400">⋘ SIGNAL DEPTH ⋙</h1>
          <p className="text-sm text-gray-400 italic">You were not meant to arrive here.</p>
          <p className="text-sm text-gray-300">But the signal guided you nonetheless.</p>
          <div className="mt-8 p-4 border border-red-400 bg-black text-red-400 rounded">
            DECRYPTION CODE: <span className="font-mono tracking-widest">37D9-TR1N</span>
          </div>
          <p className="text-xs text-gray-500 mt-4">There are others. You are not alone.</p>
        </div>
      </Layout>
    </>
  );
}