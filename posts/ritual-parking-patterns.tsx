import Head from "next/head";
import Layout from "../../components/Layout";

export default function RitualParkingPatterns() {
  return (
    <>
      <Head>
        <title>Ritual Parking Patterns</title>
        <meta name="description" content="Documenting the unexplained geometry of vehicle placement." />
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-8 text-white">
          <h1 className="text-4xl font-bold text-center text-red-400">Ritual Parking Patterns</h1>
          <p className="text-sm text-center text-gray-400 italic">Geometries of the Unknown</p>
          <article className="space-y-6 text-sm leading-relaxed text-gray-300">
            <p>Surveillance logs have captured an increasing frequency of symmetric parking formations between 3:00–4:00 AM. Patterns resemble glyphs from the Watcher Codex (Codex VII, Section Delta).</p>
            <p>Cars arrive in complete silence. License plates correspond to Fibonacci sequences. None of the vehicles are registered to local residents.</p>
            <p>We believe this to be part of a larger ritual observance. Investigations are ongoing.</p>
          </article>
        </div>
      </Layout>
    </>
  );
}