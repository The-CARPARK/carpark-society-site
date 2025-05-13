import Head from "next/head";
import Layout from "../../components/Layout";

export default function Level4() {
  return (
    <Layout>
      <Head>
        <title>Level 4 – Beneath the Surface</title>
      </Head>
      <main className="max-w-4xl mx-auto p-8 text-white space-y-6">
        <h1 className="text-4xl font-bold">Level 4: Beneath the Surface</h1>
        <p>
          Beneath Bond Street lies a hidden infrastructure of tunnels, storm drains, and culverts—layered with both modern utility and ancient memory.
        </p>
        <p>
          Most notably, the Waimapihi Stream—once open and sacred to local Māori—now flows underground in a 1930s brick culvert. This stream, named after the rangatira Māpihi, carries stormwater from the Aro Valley to Wellington Harbour, a buried artery of the land's mauri (life force).
        </p>
        <p>
          In the 1990s, engineers installed a new stormwater tunnel using trenchless microtunneling under Bond Street. This 1.5-meter concrete conduit improved drainage but also revealed buried relics: wharf piles, ship debris, and the bones of colonial infrastructure.
        </p>
        <p>
          While there are no known war bunkers or secret passages under Bond Street, the reclaimed land and hidden waterways tell their own story of urban evolution. These tunnels serve both as functional arteries and historical palimpsests—buried reminders of Wellington’s layered past.
        </p>
        <p>
          Today, the Waimapihi remains underground but is remembered in art and story—like the mural on Garrett Street. The water still flows, even if the city has paved over its voice.
        </p>
      </main>
    </Layout>
  );
}
