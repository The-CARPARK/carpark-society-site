
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
      router.push("/the_lost_levels");
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

          <div className="text-sm text-gray-500 space-y-2">
            <p>⚠️ UNMAPPED SECTOR DETECTED</p>
            <p>▣ Do not proceed beyond this point.</p>
            <p>☍ Glyph integrity compromised. Expect interference.</p>
            <p>⌁ Await transmission from Level Coordinator node.</p>
            <p>
              ⋔ All Watchers are accounted for.{" "}
              <span
                onClick={handleLevelClick}
                className="cursor-pointer hover:text-red-400 transition-all"
                style={{ textDecoration: "none" }}
              >
                LEVEL:{level === 0 ? "NULL" : level}
              </span>
            </p>
            <p>▤ Remember the coil. Forget the door.</p>
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
