import Head from "next/head";
import Layout from "../../components/Layout";

export default function TheOrangeGlow() {
  return (
    <>
      <Head>
        <title>The Orange Glow</title>
        <meta name="description" content="A study of unexplained light phenomena." />
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-8 text-white">
          <h1 className="text-4xl font-bold text-center text-red-400">The Orange Glow</h1>
          <p className="text-sm text-center text-gray-400 italic">Chronicles of unnatural light</p>
          <article className="space-y-6 text-sm leading-relaxed text-gray-300">
            <p>Security footage from March 17th reveals an anomalous orange glow manifesting on Level 2 at 4:44 AM. The light pulses irregularly, casting shadows that do not correlate with physical structures.</p>
            <p>Analysis confirms no power disruptions. Light bulbs in the area were disconnected during the time of event. One Watcher claimed to see “a figure made of wire and fog” emerge briefly before vanishing.</p>
            <p>We advise all visitors to avoid Level 2 during the hour before dawn.</p>
          </article>
        </div>
      </Layout>
    </>
  );
}