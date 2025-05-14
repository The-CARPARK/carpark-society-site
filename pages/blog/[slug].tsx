import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Head from "next/head";
import Link from "next/link";

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace(/\.md$/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "posts", `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      title: data.title,
      date: data.date,
      contentHtml,
    },
  };
}

export default function BlogPost({
  title,
  date,
  contentHtml,
}: {
  title: string;
  date: string;
  contentHtml: string;
}) {
  return (
    <div className="p-10 text-white max-w-3xl mx-auto">
      <Head>
        <title>{title}</title>
      </Head>
      <Link href="/blog" className="text-blue-400 underline block mb-4">← Back to Blog</Link>
      <h1 className="text-4xl font-bold text-red-400 mb-2">{title}</h1>
      <p className="text-gray-400 text-sm italic mb-6">{date}</p>
      <div
        className="prose prose-invert prose-sm text-gray-300"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}