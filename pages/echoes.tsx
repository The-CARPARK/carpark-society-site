import Head from "next/head";
import Layout from "../components/Layout";

export default function Echoes() {
  return (
    <>
      <Head>
        <title>⋔ Echoes</title>
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-6 text-white">
          <h1 className="text-3xl font-bold text-red-400">⋔ Echoes</h1>
          <p className="text-sm text-gray-400 italic">Resonant anomalies archived from lost surveillance nodes.</p>
          <blockquote className="italic text-gray-500 border-l-4 border-red-500 pl-4">
            "You are hearing this because you already forgot what you promised not to remember."
          </blockquote>
          <p className="text-sm text-gray-300 mt-6">☍ Interference pattern detected. Echo will loop in 4… 3… 2…</p>
        </div>
      </Layout>
    </>
  );
}