import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title,
      date: data.date,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function BlogIndex({ posts }: { posts: { slug: string; title: string; date: string }[] }) {
  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`} className="text-blue-500 text-xl underline">
              {title}
            </Link>
            <p className="text-gray-400 text-sm">{date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}