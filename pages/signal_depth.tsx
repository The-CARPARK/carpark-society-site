
import Head from "next/head";
import Layout from "../components/Layout";

export default function SignalDepth() {
  return (
    <>
      <Head>
        <title>Signal Depth</title>
      </Head>
      <Layout>
        <div className="max-w-2xl mx-auto py-20 text-center text-white space-y-6">
          <h1 className="text-3xl font-bold text-red-500">⇊ Signal Depth Detected ⇊</h1>
          <p className="text-gray-400 text-sm">You have breached the broadcast barrier.</p>
          <p className="text-gray-300 text-sm italic">"Those who decrypt the code do not merely search… they awaken."</p>
          <p className="text-sm text-green-400">Next unlock sequence pending…</p>
        </div>
      </Layout>
    </>
  );
}
