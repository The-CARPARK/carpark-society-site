import Head from "next/head";
import Layout from "@/components/Layout";

export default function ReportPage() {
  return (
    <>
      <Head>
        <title>Submit Report – Carpark Society</title>
        <meta name="description" content="Submit your observations to the Watchers." />
      </Head>
      <Layout>
        <div className="max-w-4xl mx-auto py-12 space-y-8 text-white">
          <h1 className="text-3xl font-bold text-center text-red-400">Transmit a Report</h1>
          <p className="text-center text-gray-300 italic">
            Anomalies. Glitches. Ritual infractions. The Watchers are listening.
          </p>
          <div className="w-full h-[1600px]">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfDjfk7rvBz0-eOoC5DQVyNbzZeq4IOXbwwqhUjYfwV9jn8DQ/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-md shadow-md"
              title="Carpark Society Report Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </Layout>
    </>
  );
}
