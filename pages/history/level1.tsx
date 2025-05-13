import Head from "next/head";
import Layout from "../../components/Layout";

export default function Level1() {
  return (
    <>
      <Head>
        <title>Level 1 - The Foundation</title>
        <meta name="description" content="Te Aro Pā and the spiritual foundation of the Carpark." />
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-8 text-white">
          <h1 className="text-4xl font-bold text-center text-red-400">Level 1: The Foundation</h1>
          <p className="text-sm text-center text-gray-400 italic">Te Aro Pā and the Struggle for Whenua</p>
          <article className="space-y-6 text-sm leading-relaxed text-gray-300">
            <p>In the heart of Wellington lies a seemingly ordinary carpark—but beneath its concrete skin is a profound and contested history. This site, layered with stories of Māori sovereignty, colonial ambition, and cultural resilience, serves as a silent witness to some of the most defining moments in Aotearoa’s past.</p>
            <p>Long before the city grid etched its lines over the land, Te Aro was home to a thriving Māori village: Te Aro Pā. Founded in the 1820s by iwi such as Te Āti Awa, the pā grew into one of the largest in the region. For its inhabitants, the whenua (land) and moana (sea) were not merely resources but living ancestors—sacred beings imbued with mauri (life force). When British colonists arrived in 1839, the New Zealand Company claimed to have purchased Te Aro land in a dubious transaction that ignored the rights of local Māori leaders. What followed was a prolonged and painful struggle, culminating in the forced removal of Te Aro Māori by 1847.</p>
            <p>As colonial Wellington expanded, commerce took root. One of its earliest landmarks was the Bethune & Hunter warehouse, built near the waterfront and serving as a hub of trade and political power. Co-founder George Hunter would become Wellington’s first mayor, and the firm’s dealings helped accelerate the transfer of Māori land to European settlers. The building stood for over a century—until 1958, when it was controversially demolished to make way for a carpark, despite public protests. That decision marked a turning point, sparking some of the city’s earliest heritage preservation efforts.</p>
            <p>The land’s layered tensions resurfaced in 1943, just blocks away, during the Battle of Manners Street. A riot between American servicemen and local Māori and Pākehā erupted over attempts to bar Māori soldiers from a downtown club. The brawl became a symbolic stand against imported racial segregation, and a rare moment of unity among New Zealanders defending the principles of inclusion and mana.</p>
            <p>Today, this carpark stands as a palimpsest of past lives—Māori guardianship, colonial imposition, wartime resistance, and modern urbanism. It may look unremarkable, but for those who know its history, the ground resonates with wairua (spirit) and memory. Māori descendants and local “Watchers” continue to honor the site through ritual, art, and vigilance, asserting that despite its transformation, this land remains sacred.</p>
            <p>The story of Te Aro is not one of loss alone. It is a story of continuity—of people who remember, resist, and reclaim. And so, even beneath layers of asphalt, the land remembers.</p>
          </article>
        </div>
      </Layout>
    </>
  );
}
