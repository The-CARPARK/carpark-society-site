import Head from "next/head";
import Layout from "../../components/Layout";

export default function RitualsOfAsphalt() {
  return (
    <>
      <Head>
        <title>Rituals of the Asphalt</title>
        <meta name="description" content="A brief guide to some of the Carpark Society’s stranger practices." />
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-8 text-white">
          <h1 className="text-4xl font-bold text-center text-purple-400">Rituals of the Asphalt</h1>
          <article className="space-y-6 text-sm leading-relaxed text-gray-300">
            <p>To understand the carpark is to partake in its rhythms. Certain rituals have emerged—not official, but observed all the same.</p>
            <p><strong>The Oil Sigil:</strong> Spilled engine oil is not cleaned, but interpreted. Some see glyphs. Others see maps.</p>
            <p><strong>Ticket Offerings:</strong> Discarded tickets left under wiper blades are read as augury. A $12.50 fine foretells contact. A $65 infringement means silence is demanded.</p>
            <p><strong>Mirror Angling:</strong> A mirror pointed at Level 7 under a waxing moon opens “peripheral vision.” Use caution.</p>
            <p>These rituals evolve. Record yours. We are always observing.</p>
          </article>
        </div>
      </Layout>
    </>
  );
}