import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default function Custom404() {
  const [level, setLevel] = useState(0);
  const router = useRouter();

  const handleLevelClick = () => {
    setLevel(prev => prev + 1);
  };

  const handleHomeClick = () => {
    if (level === 6) {
      router.push("/secret");
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <Head>
        <title>404 - SIGNAL LOST</title>
      </Head>
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6 text-white">
          <h1 className="text-5xl font-bold text-red-500">404</h1>
          <p className="text-xl text-gray-400">The signal does not reach this far.</p>
          <p className="text-sm text-gray-500 italic">Loop Condition: <span onClick={handleLevelClick} className="cursor-pointer hover:text-red-400 transition-all">LEVEL:{level === 0 ? "NULL" : level}</span></p>
          {level >= 6 && (
            <>
              <p className="text-green-400 animate-pulse text-sm">LEVEL 6 UNLOCKED — Access Node Detected</p>
              <p className="text-xs text-yellow-200 italic">"He who loops six times shall see the door."</p>
            </>
          )}
          <div className="mt-8 space-y-3 text-xs text-gray-500 max-w-md">
            <p>◯ The signal frays where memory pools.</p>
            <p>◯ Echoes of watchers long gone tremble through the pillars.</p>
            <p>◯ Time bleeds backwards here. Do not breathe too deeply.</p>
            <p>◯ If you reach the center, *do not knock twice.*</p>
          </div>
          <button
            onClick={handleHomeClick}
            className="mt-6 px-4 py-2 border border-gray-600 rounded hover:bg-gray-800 hover:text-white transition-colors text-sm"
          >
            Return to Home
          </button>
        </div>
      </Layout>
    </>
  );
}