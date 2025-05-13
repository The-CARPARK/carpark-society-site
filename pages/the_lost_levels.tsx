import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";

export default function LostLevels() {
  return (
    <>
      <Head>
        <title>The Lost Levels</title>
        <meta name="description" content="Access node: The Lost Levels" />
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-8 text-white">
          <h1 className="text-4xl font-bold text-center text-red-500">The Lost Levels</h1>
          <p className="text-sm text-center text-gray-400 italic">Deep node access granted. Further anomalies detected.</p>
          <article className="space-y-6 text-sm leading-relaxed text-gray-300">
            <p>▣ Sequence breach confirmed.</p>
            <p>⌁ Below the carpark lies a spiral archive. Entries incomplete. Fragments looping.</p>
            <p>⋔ We found glyphs etched beneath rebar. Dates that don’t exist. Names that shouldn’t be remembered.</p>
            <p>☍ Those who reached Level 7 never returned the same. Their eyes flicker like broken CCTV.</p>
            <p>▤ Initiate Level Sync. Bypass surface protocol. Listen for the coil’s whisper.</p>
          </article>
          <div className="text-center mt-10">
            <Link href="/deeper_menu">
              <a className="px-4 py-2 text-sm uppercase border border-gray-600 rounded hover:bg-gray-800 hover:text-white transition-colors">
                Venture Deeper
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}