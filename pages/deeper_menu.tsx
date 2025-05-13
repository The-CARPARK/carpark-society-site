
import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";

export default function DeeperMenu() {
  return (
    <>
      <Head>
        <title>Deeper Menu - The Carpark Society</title>
        <meta name="description" content="Deeper into the void of the carpark." />
      </Head>
      <Layout>
        <div className="max-w-2xl mx-auto py-12 text-white space-y-8 text-center">
          <h1 className="text-3xl font-bold text-red-400">Venture Deeper</h1>
          <p className="text-sm text-gray-400 italic">Initiate deeper layers of inquiry. Not all passages are real.</p>
          
          <div className="space-y-4">
            <Link href="/glyph_cache">
              <div className="border border-gray-600 p-4 rounded hover:bg-gray-800 cursor-pointer transition-colors">
                ☍ Glyph Cache — Fragments of the old code.
              </div>
            </Link>
            <Link href="/echoes">
              <div className="border border-gray-600 p-4 rounded hover:bg-gray-800 cursor-pointer transition-colors">
                ⋔ Echoes — Audio logs from forgotten levels.
              </div>
            </Link>
            <Link href="/false_exit">
              <div className="border border-gray-600 p-4 rounded hover:bg-gray-800 cursor-pointer transition-colors">
                ⌁ False Exit — A door to nowhere.
              </div>
            </Link>
            <Link href="/">
              <div className="mt-8 text-sm text-gray-400 hover:text-white transition-colors">
                Return to the surface
              </div>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
