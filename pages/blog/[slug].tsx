import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function PostPage({ frontmatter, content }: any) {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-8">
        <Link href="/blog">
          <span className="text-sm text-gray-400 hover:text-white transition-colors inline-block mb-4">
            ← Back to Blog
          </span>
        </Link>
        <h1 className="text-4xl font-bold mb-2">{frontmatter.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{frontmatter.date}</p>
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}
