import Head from "next/head";
import Layout from "../components/Layout";

export default function LostLevels() {
  return (
    <>
      <Head>
        <title>The Lost Levels</title>
        <meta name="description" content="You have found the hidden node. Few reach this depth." />
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-8 text-white text-center">
          <h1 className="text-4xl font-bold text-yellow-500">The Lost Levels</h1>
          <p className="text-sm text-gray-400 italic">LEVEL ACCESS: GRANTED</p>
          <article className="space-y-6 text-sm leading-relaxed text-gray-300">
            <p>⬢ Welcome, Operator. Your persistence has breached the surface protocol.</p>
            <p>⊡ This node is not mapped, not sanctioned. You were not meant to see it—yet here you are.</p>
            <p>⟴ Each glyph below represents a piece of fragmented memory, lost from the core signal:</p>
            <ul className="list-disc list-inside text-left ml-8">
              <li>⟁ Fragment 1: "The coil sleeps beneath the elevator shaft."</li>
              <li>⧈ Fragment 2: "Waimapihi was not the only buried stream."</li>
              <li>⊞ Fragment 3: "The Watcher in red was seen again at 3:17AM."</li>
            </ul>
            <p>⌁ Store these fragments. Their use will become clear in future transmissions.</p>
            <p className="text-gray-500 italic">You are now being observed from a deeper layer.</p>
          </article>
        </div>
      </Layout>
    </>
  );
}
