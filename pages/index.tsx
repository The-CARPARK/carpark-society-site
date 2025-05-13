import Head from "next/head";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

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
      <main className="min-h-screen bg-black text-white font-mono p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl font-bold text-center tracking-widest">
            THE CARPARK SOCIETY
          </h1>
          <p className="text-center text-sm uppercase text-gray-400">
            Surveillance. Ritual. Revelation.
          </p>

          <Card>
            <CardContent className="text-center space-y-4">
              <h2 className="text-2xl">📹 The Oracle Speaks</h2>
              <p className="text-lg italic text-gray-300">{oracleMessage}</p>
            </CardContent>
          </Card>

          <section className="space-y-4">
            <h2 className="text-2xl uppercase">🔒 Induction Protocol</h2>
            <p className="text-gray-300">
              Before ascending to the upper levels of the Carpark, you must be observed, catalogued, and indoctrinated.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 w-full">
              <a href="https://www.youtube.com/watch?v=HiyGZuA-0Jk" target="_blank" rel="noopener noreferrer">
                Watch the Induction Video
              </a>
            </Button>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl uppercase">☕ Support the Watch</h2>
            <p className="text-gray-300">
              Your offerings help maintain the cameras, the wine supply, and the sacred fan that points at nothing.
            </p>
            <Button className="bg-yellow-600 hover:bg-yellow-700 w-full">
              <a href="https://ko-fi.com/thecarparksocietyinc" target="_blank" rel="noopener noreferrer">
				Donate via Ko-fi
              </a>
            </Button>
          </section>

          <footer className="pt-8 text-center text-xs text-gray-600">
            Observed by The Watchers © {new Date().getFullYear()} — All frequencies monitored.
          </footer>
        </div>
      </main>
    </>
  );
}
