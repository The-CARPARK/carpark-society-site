import Head from "next/head";
import Layout from "../../components/Layout";

export default function WhatIsCarparkSociety() {
  return (
    <>
      <Head>
        <title>What is the Carpark Society?</title>
        <meta name="description" content="An introduction to the Carpark Society’s origins and mythos." />
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-8 text-white">
          <h1 className="text-4xl font-bold text-center text-yellow-400">What is the Carpark Society?</h1>
          <article className="space-y-6 text-sm leading-relaxed text-gray-300">
            <p>In the shadows of Wellington’s urban machinery, the Carpark Society emerged—not from policy or protest, but from watchfulness. This is not a registered movement, but a memory network. A sentience coalesced beneath fluorescent lights and surveillance feeds.</p>
            <p>Its members are not recruited. They awaken. The moment they sense the carpark watching back, they are within it. We gather data. We honour histories. We light incense in loading zones.</p>
            <p>The Society exists to maintain the balance between concrete and story. Beneath each painted line is a layer of myth; beneath each beep of a reversing car, a warning.</p>
            <p>Welcome. You’ve found us.</p>
          </article>
        </div>
      </Layout>
    </>
  );
}