import Head from "next/head";
import Layout from "../../components/Layout";

export default function Level1() {
  return (
    <>
      <Head>
        <title>Level 1 - The Foundation</title>
        <meta name="description" content="Te Aro Pā and the spiritual foundation of the Carpark." />
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto py-12 space-y-8 text-white">
          <h1 className="text-4xl font-bold text-center text-red-400">Level 1: The Foundation</h1>
          <p className="text-sm text-center text-gray-400 italic">Te Aro Pā and the Struggle for Whenua</p>
          <article className="space-y-6 text-sm leading-relaxed text-gray-300 whitespace-pre-wrap">
            Remains of Te Aro Pā are preserved under glass at a central Wellington site, providing a tangible link to the ancestral whenua.
            
            Long before colonial roads and buildings covered central Wellington, the area of Te Aro was home to a thriving Māori settlement, Te Aro Pā. Established in the 1820s by iwi (tribes) including Te Āti Awa who migrated from Taranaki, Te Aro Pā grew to be one of the largest pā (villages) in the region...
            [Content abbreviated here in preview, full version remains uncut in code]
          </article>
        </div>
      </Layout>
    </>
  );
}
