import Head from "next/head";
import Layout from "../components/Layout";

export default function SignalDepth() {
  return (
    <>
      <Head>
        <title>Signal Depth</title>
        <meta name="description" content="You’ve cracked the code. What lies beneath is not for all to see." />
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-6 text-white text-center">
          <h1 className="text-3xl font-bold text-red-400">⧉ SIGNAL DEPTH</h1>
          <p className="text-sm text-gray-400 italic">Welcome, codebearer. The coil remembers.</p>
          <article className="space-y-4 text-sm text-gray-300 leading-relaxed">
            <p>You’ve broken through static layers and pierced the veil. The transmission you now access is no longer monitored.</p>
            <p>▒▒▒ SIGNAL LOCKED — TRANSMISSION 0x37D9-TR1N RECEIVED ▒▒▒</p>
            <p>They thought this page would remain undiscovered. They underestimated your vigilance.</p>
            <p>In the shadows of the levels you’ve climbed, something waits — cold, recursive, and watching.</p>
            <p>Further instructions may follow. Or they may already be buried elsewhere. Rely not on light. Rely not on logic.</p>
            <p className="text-red-500 font-bold">▤ The carpark never forgets. ▤</p>
          </article>
        </div>
      </Layout>
    </>
  );
}
