import Head from "next/head";
import Layout from "../../components/Layout";

export default function Level3() {
  return (
    <>
      <Head>
        <title>Level 3 - Underground Streams</title>
        <meta name="description" content="Waimapihi and the hidden waterways beneath the carpark." />
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-8 text-white">
          <h1 className="text-4xl font-bold text-center text-blue-400">Level 3: Underground Streams</h1>
          <p className="text-sm text-center text-gray-400 italic">Waimapihi and the Memory of Water</p>
          <article className="space-y-6 text-sm leading-relaxed text-gray-300">
            <p>Te Waimāpihi, also known as Waimapihi Stream or Te Aro Stream, is a buried waterway that once flowed freely through central Wellington. Originating in the forested Polhill Reserve, it ran through Aro Valley and Te Aro, finally emptying into the harbour. For Māori, the stream was a vital mahinga kai and sacred site named after Māpihi, a wahine rangatira who bathed in its waters. The stream was a source of life, sustenance, and spiritual strength.</p>
            <p>As Wellington grew, colonial infrastructure forced Waimapihi underground. By the 1880s, it had been fully culverted and converted into a stormwater drain. Today, it runs beneath the city’s streets, its presence largely forgotten. Yet in recent years, artists, iwi, and community groups have sought to revive its memory. Murals, sculptures, and conservation work in the Waimapihi Reserve now retell the stream’s story and highlight the hidden flows of water still pulsing beneath the asphalt.</p>
            <p>The stream’s burial mirrors broader themes of urban forgetting and colonial disruption. What was once visible and revered became hidden, its name erased from maps and public consciousness. But water remembers. Waimapihi still flows, carrying the mauri of its past, whispering beneath manholes and rising with the rains. For the Watchers, Level 3 represents this buried truth—a symbol of suppressed histories and the slow return of memory.</p>
          </article>
        </div>
      </Layout>
    </>
  );
}
