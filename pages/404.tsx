
import Head from "next/head";
import { useState } from "react";

export default function Custom404() {
  const [level, setLevel] = useState(0);

  return (
    <>
      <Head>
        <title>404 - The Loop Breaks</title>
        <meta name="description" content="The page you seek is not here. The loop stutters." />
      </Head>
      <div className="min-h-screen bg-black text-white font-mono flex flex-col justify-center items-center p-8 space-y-6">
        <h1 className="text-5xl text-red-500 font-bold tracking-widest">404</h1>
        <p className="text-xl text-gray-400">The page you seek has collapsed.</p>
        <div
          className="text-sm text-gray-500 cursor-pointer hover:text-white transition-colors"
          onClick={() => setLevel(level + 1)}
        >
          🔁 Loop Condition: LEVEL:{level === 0 ? "NULL" : level}
        </div>
        {level >= 6 && (
          <button
            className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-800 text-white text-sm rounded"
            onClick={() => alert("ACCESS GRANTED: You have ascended.")}
          >
            ☣️ UNLOCK GATE
          </button>
        )}
        <p className="text-xs text-gray-600 pt-10">...trace sequence diverged...</p>
      </div>
    </>
  );
}
