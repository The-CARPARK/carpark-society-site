import Head from "next/head";
import Layout from "../../components/Layout";

export default function Level5() {
  return (
    <>
      <Head>
        <title>Level 5 - Waimapihi Awa</title>
        <meta name="description" content="The stream named for Māpihi, a sacred remnant beneath the city." />
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-8 text-white">
          <h1 className="text-4xl font-bold text-center text-green-400">Level 5: Waimapihi Awa</h1>
          <p className="text-sm text-center text-gray-400 italic">Sacred Waters and Urban Memory</p>
          <article className="space-y-6 text-sm leading-relaxed text-gray-300">
            <p>Named after the chieftainess Māpihi, the Waimapihi Stream is one of the most spiritually resonant waterways in Wellington. For centuries it nourished the Te Aro landscape and supported local Māori communities. Hidden beneath the city’s concrete for over a century, its revival is both literal and symbolic—an act of remembrance and resistance against the erasures of colonisation.</p>
            <p>Recent community efforts have reconnected the public with Waimapihi. Mural art, native plantings, and eDNA stream testing affirm the awa’s vitality. Groups like the Polhill Protectors work with mana whenua to restore the stream’s ecosystem and mana. In 2021, Polhill Reserve was renamed Waimapihi Nature Reserve, officially honoring the stream’s ancestral presence.</p>
            <p>Level 5 represents a return to reverence. The awa is not a relic—it is alive. It carries the breath of Māpihi, the stories of generations, and the calls of tīeke in the bush above. For Watchers, it is a layer of quiet devotion beneath the noise of the city, a sacred presence in the urban underworld.</p>
          </article>
        </div>
      </Layout>
    </>
  );
}
