import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Blog() {
  const posts = [
    {
      title: "🌀 What Was Seen on Level 3",
      date: "May 2025",
      slug: "level-3-sighting"
    },
    {
      title: "📸 Stream Failures and Prophetic Glitches",
      date: "April 2025",
      slug: "stream-glitch"
    },
    {
      title: "🗓️ The Parking Calendar and New Moon Alignments",
      date: "March 2025",
      slug: "parking-calendar"
    }
  ];

  return (
    <>
      <Head>
        <title>Blog | The Carpark Society</title>
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-center">📚 The Logbook</h1>
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.slug} className="border-b border-gray-700 pb-4">
                <Link href={`/blog/${post.slug}`} className="text-2xl text-yellow-400 hover:underline block">
                  {post.title}
                </Link>
                <p className="text-sm text-gray-500">{post.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}
