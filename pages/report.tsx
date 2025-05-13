import Head from "next/head";
import Layout from "../components/Layout";

export default function ReportPage() {
  return (
    <>
      <Head>
        <title>Report an Anomaly</title>
        <meta name="description" content="Submit sightings and anomalies to The Watchers." />
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-8 text-white">
          <h1 className="text-4xl font-bold text-center text-red-400">Report an Anomaly</h1>
          <p className="text-sm text-center text-gray-400 italic">All entries are confidential. Frequencies are being monitored.</p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfDjfk7rvBz0-eOoC5DQVyNbzZeq4IOXbwwqhUjYfwV9jn8DQ/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full h-[800px] border-none rounded-md"
              title="Report Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </Layout>
    </>
  );
}
