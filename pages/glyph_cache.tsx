import Head from "next/head";
import Layout from "../components/Layout";

export default function GlyphCache() {
  return (
    <>
      <Head>
        <title>☍ Glyph Cache</title>
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-6 text-white">
          <h1 className="text-3xl font-bold text-red-400">☍ Glyph Cache</h1>
          <p className="text-sm text-gray-400 italic">Fragmented data recovered from beneath Level 2.</p>
          <p className="text-sm text-gray-300">░░░ INITIATE DECRYPTION ░░░</p>
          <pre className="text-xs text-green-300 bg-black p-4 rounded border border-gray-700 overflow-auto">
01010111 01100001 01110100 01100011 01101000 00100000 01010100 01101000 01100101 00100000
01000011 01101111 01101001 01101100 00101110 00100000 01001001 01110100 00100111 01110011
00100000 01101100 01101001 01110011 01110100 01100101 01101110 01101001 01101110 01100111
00101110
          </pre>
          <p className="text-sm text-gray-400 italic">End of transmission fragment.</p>
        </div>
      </Layout>
    </>
  );
}