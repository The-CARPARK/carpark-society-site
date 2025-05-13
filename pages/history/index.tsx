import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";

export default function History() {
  return (
    <>
      <Head>
        <title>Carpark History</title>
        <meta name="description" content="Explore the levels of the Carpark and the lore buried within." />
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-8">
          <h1 className="text-4xl font-bold text-center">History of the Carpark</h1>
          <p className="text-center text-gray-400">
            Each level holds secrets, sensors, and echoes from another time.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Array.from({ length: 7 }, (_, i) => (
              <li key={i}>
                <Link href={`/history/level${i + 1}`}>
                  <div className="block border border-gray-600 rounded p-4 hover:bg-gray-800 hover:text-white transition-colors text-center">
                    Level {i + 1}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}
