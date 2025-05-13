import Head from "next/head";
import Layout from "../components/Layout";

export default function History() {
  return (
    <>
      <Head>
        <title>History | The Carpark Society</title>
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-center">📜 History of the Carpark</h1>
          <p className="text-gray-300 text-lg">
            In the wet bowels of Wellington’s Lombard Street, a structure was raised not by men, but by intent — a layered beacon of asphalt and echo. What began as a municipal facility became something more...
          </p>
          <ul className="space-y-2 border-l-2 border-gray-600 pl-6">
            <li><span className="text-yellow-400">1982 —</span> Construction begins. Parking, officially. Watching, unofficially.</li>
            <li><span className="text-yellow-400">1997 —</span> The first Oracle terminal installed ("malfunctioning meter").</li>
            <li><span className="text-yellow-400">2005 —</span> Society formally observed through basement gatherings.</li>
            <li><span className="text-yellow-400">2021 —</span> Livestream begins. The fan starts spinning. It has not stopped since.</li>
            <li><span className="text-yellow-400">2025 —</span> Launch of the public front. Recruitment and ritual acceleration ongoing.</li>
          </ul>
          <p className="text-gray-400 italic text-sm">
            This is only the known timeline. There are... deeper layers.
          </p>
        </div>
      </Layout>
    </>
  );
}
