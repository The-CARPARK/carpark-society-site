import Head from "next/head";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default function FalseExit() {
  const router = useRouter();

  const redirectToLoop = () => {
    setTimeout(() => router.push("/404"), 2000);
  };

  return (
    <>
      <Head>
        <title>⌁ False Exit</title>
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-6 text-white text-center">
          <h1 className="text-3xl font-bold text-red-400">⌁ False Exit</h1>
          <p className="text-sm text-gray-400 italic">You thought this was the way out.</p>
          <p className="text-sm text-gray-300">But the carpark does not forget. Loop reinitializing…</p>
          <p className="text-xs text-gray-600 mt-8 italic">If nothing happens, refresh. The Coil thanks you.</p>
          {redirectToLoop()}
        </div>
      </Layout>
    </>
  );
}