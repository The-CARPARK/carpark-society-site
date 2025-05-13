import Head from "next/head";
import Layout from "../components/Layout";

export default function RedactedMemo() {
  return (
    <>
      <Head>
        <title>[REDACTED MEMO]</title>
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-6 text-white text-center">
          <h1 className="text-3xl font-bold text-red-400">▤ [REDACTED MEMO]</h1>
          <p className="text-sm text-gray-400 italic">NOTICE: Level access exceeds clearance. Document partially decrypted.</p>
          <p className="text-sm text-gray-300">"...test broadcast interrupted at 03:14. Subject █████ was last seen exiting via stairwell 7. Coil anomaly persists."</p>
        </div>
      </Layout>
    </>
  );
}