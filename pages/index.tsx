import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Home() {
  const [oracleMessage, setOracleMessage] = useState("Awaiting divine transmission...");

  useEffect(() => {
    const messages = [
      "The Eye opens beneath Lombard.",
      "You are being recorded.",
      "Offer red wine to the sensor.",
      "Ko-fi offerings ensure your safety.",
      "Induction begins at sunset."
    ];
    const interval = setInterval(() => {
      setOracleMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>The Carpark Society</title>
        <meta name="description" content="Prophecies, surveillance, and wine beneath Lombard Street." />
      </Head>
      <Layout>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="border border-gray-700 p-6 rounded-lg text-center space-y-4">
            <h2 className="text-2xl">📹 The Oracle Speaks</h2>
            <p className="text-lg italic text-gray-300">{oracleMessage}</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl uppercase">🔒 Induction Protocol</h2>
            <p className="text-gray-300">
              Before ascending to the upper levels of the Carpark, you must be observed, catalogued, and indoctrinated.
            </p>
            <a href="https://www.youtube.com/watch?v=HiyGZuA-0Jk" target="_blank" rel="noopener noreferrer" className="block bg-red-600 hover:bg-red-700 text-center py-2 rounded text-white font-bold">
              Watch the Induction Video
            </a>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl uppercase">☕ Support the Watch</h2>
            <p className="text-gray-300">
              Your offerings help maintain the cameras, the wine supply, and the sacred fan that points at nothing.
            </p>
            <a href="https://ko-fi.com/thecarparksocietyinc" target="_blank" rel="noopener noreferrer" className="block bg-yellow-600 hover:bg-yellow-700 text-center py-2 rounded text-black font-bold">
              Donate via Ko-fi
            </a>
          </section>

          <footer className="pt-8 text-center text-xs text-gray-600">
            Observed by The Watchers © {new Date().getFullYear()} — All frequencies monitored.
          </footer>
        </div>
      </Layout>
    </>
  );
}
