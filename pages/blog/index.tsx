import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { useState } from 'react'
import { useRouter } from 'next/router'

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
  const [searchValue, setSearchValue] = useState('');
  const [noResults, setNoResults] = useState(false);
  const router = useRouter();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (searchValue.trim() === 'A7X-93L-R9F') {
        router.push('/secret');
      } else {
        setNoResults(true);
        setTimeout(() => setNoResults(false), 3000);
      }
    }
  };

  return (
    <Layout>
      <div className="text-white max-w-3xl mx-auto py-12 space-y-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-red-400">Blog</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 px-3 py-2 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            {noResults && (
              <span className="text-red-600 text-sm">No results found.</span>
            )}
          </div>
        </div>
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