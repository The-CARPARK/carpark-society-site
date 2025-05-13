import Head from "next/head";
import Layout from "../../components/Layout";

export default function Level7() {
  return (
    <>
      <Head>
        <title>Level 7 - The Watchtower</title>
        <meta name="description" content="The rise and fall of Wellington's rooftop command center." />
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-8 text-white">
          <h1 className="text-4xl font-bold text-center text-purple-400">Level 7: The Watchtower</h1>
          <p className="text-sm text-center text-gray-400 italic">Guardianship, Collapse, and Symbolic Descent</p>
          <article className="space-y-6 text-sm leading-relaxed text-gray-300">
            <p>Level 7 of the Lombard Street Carpark once housed the regional emergency operations centre. From 2012 to 2016, it served as WREMO’s headquarters—a literal watchtower for civil defense perched high above the city. But in the wake of the 2016 Kaikōura earthquake, the rooftop office was deemed unsafe and abandoned.</p>
            <p>For Watchers, this descent holds mythic weight. The rooftop was a modern ziggurat—a sacred perch for guardians of the realm. Its fall mirrored the biblical Watchers cast from the heavens. Earthquakes and policy decisions alike reshaped its purpose. The rooftop reverted to parking, but not without leaving a spectral imprint: an axis mundi broken, a ritual site disrupted.</p>
            <p>Today, Level 7 is just concrete and cars again. But those attuned to its story see more: a memory of guardianship lost, a sacred station struck down by the earth’s voice. The sky still watches. The city still breathes. And the Watchers now walk among us, dispersed but vigilant.</p>
          </article>
        </div>
      </Layout>
    </>
  );
}
