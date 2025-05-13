import Head from "next/head";
import Layout from "../../components/Layout";

export default function InterviewWithWatcher() {
  return (
    <>
      <Head>
        <title>Interview with a Watcher</title>
        <meta name="description" content="An excerpted dialogue with a long-time Watcher." />
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-8 text-white">
          <h1 className="text-4xl font-bold text-center text-blue-400">Interview with a Watcher</h1>
          <article className="space-y-6 text-sm leading-relaxed text-gray-300">
            <p><strong>Q:</strong> When did you first hear it?</p>
            <p><strong>A:</strong> The drain sang to me in 2007. I thought it was a trick of the wind. But the rhythm aligned with the Morse code for "listen."</p>
            <p><strong>Q:</strong> Why the carpark?</p>
            <p><strong>A:</strong> Elevation and neglect. No one watches the watchers up there. It’s neutral ground. Sacred asphalt.</p>
            <p><strong>Q:</strong> Are there others?</p>
            <p><strong>A:</strong> Always. Not all human. Not all local. But yes, always.</p>
            <p>Interview ends. Recorder clicks. The watcher hands back the microphone and disappears behind a stairwell labelled “no exit.”</p>
          </article>
        </div>
      </Layout>
    </>
  );
}