
import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function TheLostLevels() {
  const [inputs, setInputs] = useState(["", "", ""]);
  const [code, setCode] = useState("");
  const [decrypted, setDecrypted] = useState(false);
  const router = useRouter();

  const handleChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value.slice(-1); // Only one character
    setInputs(newInputs);
  };

  const handleDecrypt = () => {
    if (inputs.every(i => i === "6")) {
      setCode("A7X-93L-R9F");
      setDecrypted(true);
    } else {
      alert("You are not worthy.");
      router.push("/");
    }
  };

  return (
    <>
      <Head>
        <title>The Lost Levels</title>
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-6 text-white text-center">
          <h1 className="text-3xl font-bold text-red-400">☍ The Lost Levels ☍</h1>
          <p className="text-sm text-gray-400 italic">They never meant for us to find these...</p>
          <p className="text-gray-300 text-sm">
            Old logs, broken schematics, and corrupted glyphs litter this hidden node.
          </p>

          <div className="flex justify-center space-x-2 mt-4">
            {inputs.map((val, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                value={val}
                onChange={(e) => handleChange(i, e.target.value)}
                className="w-10 h-10 text-center text-black"
              />
            ))}
          </div>

          <button
            onClick={handleDecrypt}
            className="mt-4 px-4 py-2 border border-gray-600 rounded hover:bg-gray-800 hover:text-white transition-colors text-sm"
          >
            Initiate Decryption
          </button>

          {decrypted && (
            <div className="mt-6 text-green-400 font-mono text-lg">
              {code}
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}
