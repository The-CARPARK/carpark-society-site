import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => {
    return {
      params: {
        slug: filename.replace(/\.md$/, '')
      }
    };
  });

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      title: data.title,
      date: data.date,
      contentHtml
    }
  };
}

export default function BlogPost({ title, date, contentHtml }) {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-gray-500 mb-6">{date}</p>
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}