import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import { useState } from "react";

export default function TheLostLevels() {
  const [decrypted, setDecrypted] = useState(false);

  const handleDecrypt = () => {
    setDecrypted(true);
  };

  return (
    <>
      <Head>
        <title>The Lost Levels</title>
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-6 text-white text-center">
          <h1 className="text-3xl font-bold text-red-400">☍ The Lost Levels ☍</h1>
          <p className="text-sm text-gray-400 italic">They never meant for us to find these...</p>
          <p className="text-gray-300 text-sm">
            Old logs, broken schematics, and corrupted glyphs litter this hidden node.
          </p>

          <button
            onClick={handleDecrypt}
            className="mt-6 px-4 py-2 border border-gray-600 rounded hover:bg-gray-800 hover:text-white transition-colors text-sm"
          >
            ░░░ INITIATE DECRYPTION ░░░
          </button>

          {decrypted && (
            <div className="mt-6 text-green-400 text-sm space-y-2">
              <p>▚ Decryption Successful ▞</p>
              <p>REVELATION CODE: <span className="font-mono">A7X-93L-R9F</span></p>
            </div>
          )}

          <Link href="/deeper">
            <button className="mt-10 px-4 py-2 border border-gray-600 rounded hover:bg-gray-800 hover:text-white transition-colors text-sm">
              Venture Deeper
            </button>
          </Link>
        </div>
      </Layout>
    </>
  );
}
