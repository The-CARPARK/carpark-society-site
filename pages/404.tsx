
import Head from "next/head";
import Layout from "../components/Layout";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Error 404 - Veil Breach</title>
        <meta name="description" content="This page does not exist. Or does it?" />
      </Head>
      <Layout>
        <div className="max-w-2xl mx-auto py-20 text-white space-y-8 text-center">
          <h1 className="text-6xl font-bold text-red-500 glitch">404</h1>
          <p className="text-gray-400 italic">The file you seek is not here. But something is.</p>
          <div className="text-sm text-gray-300 space-y-6 leading-relaxed">
            <p>“You have reached the unlevelled floor — the zone beneath the ramps, behind the mirror glass.”</p>
            <p>The Watchers log your presence. This page has no coordinates. There is no exit recorded.</p>
            <p><span className="text-red-400">𓂀</span> Coordinates scrambled. Archive sealed since 1991.</p>
            <p>Return to your last known location or face <code className="text-yellow-300">Loop Condition: LEVEL:NULL</code>.</p>
            <p>If you are reading this, it may already be too late to forget.</p>
          </div>
          <div className="pt-10">
            <a href="/" className="text-blue-400 hover:text-blue-300 underline">
              ⮌ Return to Base Level
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
}
