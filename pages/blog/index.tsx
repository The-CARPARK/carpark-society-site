import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Layout from '../../components/Layout'

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      frontmatter,
      slug: filename.replace('.mdx', '')
    }
  })
  return { props: { posts } }
}

export default function BlogPage({ posts }) {
  return (
    <Layout>
      <div className="text-white max-w-3xl mx-auto py-12 space-y-8">
        <h1 className="text-4xl font-bold text-red-400 mb-6">Blog</h1>
        {posts.map(({ frontmatter, slug }) => (
          <div key={slug}>
            <h2 className="text-2xl font-semibold">{frontmatter.title}</h2>
            <p className="text-sm text-gray-400">{frontmatter.date}</p>
            <Link href={`/blog/${slug}`} className="text-blue-400 underline">Read more</Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}
