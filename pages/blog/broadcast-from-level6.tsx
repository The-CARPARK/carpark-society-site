import Head from "next/head";
import Layout from "../../components/Layout";

export default function BroadcastFromLevel6() {
  return (
    <>
      <Head>
        <title>Broadcast from Level 6</title>
        <meta name="description" content="An intercepted transmission echoing through concrete." />
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-8 text-white">
          <h1 className="text-4xl font-bold text-center text-red-400">Broadcast from Level 6</h1>
          <p className="text-sm text-center text-gray-400 italic">Intercepted Transmission</p>
          <article className="space-y-6 text-sm leading-relaxed text-gray-300">
            <p>[RECEIVED SIGNAL // 03:12 AM]</p>
            <p>—Static—</p>
            <p>“If you’re hearing this, you're not alone. They moved beneath Level 6. Not the ones we know—the others. The older ones. The Watchers keep their eyes above, but the echoes rise from below.”</p>
            <p>“Do not trust the elevators after midnight.”</p>
            <p>—End Transmission—</p>
            <p>Since the signal’s discovery, Level 6 has been designated ‘resonant.’ Interference persists even when power is cut. Visitors report nausea, dreams of floodlights, and in one case, spontaneous recitation of carpark bylaws in Latin.</p>
          </article>
        </div>
      </Layout>
    </>
  );
}