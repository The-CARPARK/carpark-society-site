import Head from "next/head";
import Layout from "../components/Layout";

export default function Events() {
  return (
    <>
      <Head>
        <title>Upcoming Events | The Carpark Society</title>
        <meta name="description" content="Gatherings, rituals, and prophetic encounters scheduled beneath Lombard." />
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 px-4 space-y-8">
          <h1 className="text-4xl font-bold text-center text-white">Upcoming Events</h1>
          <p className="text-center text-gray-400">
            All events are subject to interference, prophecy, or surveillance anomalies.
          </p>
          <ul className="space-y-6">
            <li>
              <h2 className="text-2xl text-red-400">🔮 Twilight Sensor Scan</h2>
              <p className="text-sm text-gray-400">May 17, 2025 @ Level 3 Spiral — Bring incense & thermal blanket</p>
            </li>
            <li>
              <h2 className="text-2xl text-red-400">📡 Fan Alignment Ceremony</h2>
              <p className="text-sm text-gray-400">June 3, 2025 @ Maintenance Core</p>
            </li>
            <li>
              <h2 className="text-2xl text-red-400">🛑 Codeword Recalibration (Closed Circle)</h2>
              <p className="text-sm text-gray-400">June 10, 2025 (Invite-only)</p>
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
}
