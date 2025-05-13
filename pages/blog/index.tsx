import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Blog({ posts }: any) {
  return (
    <div className="max-w-3xl mx-auto py-8 space-y-6">
      <h1 className="text-4xl font-bold text-center">Blog of the Carpark</h1>
      {posts.map((post: any) => (
        <div key={post.slug} className="border-b border-gray-700 pb-4">
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-xl font-semibold text-red-400 hover:underline">{post.title}</h2>
          </Link>
          <p className="text-sm text-gray-500">{post.date}</p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug: filename.replace(".md", ""),
      title: frontmatter.title,
      date: frontmatter.date,
    };
  });

  return {
    props: {
      posts: posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    },
  };
}
