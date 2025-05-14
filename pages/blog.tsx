export default function BlogPage({ blogSearchBar }: { blogSearchBar?: JSX.Element }) {
  return (
    <div className="p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Blog</h1>
        {blogSearchBar}
      </div>

      {/* Your blog content goes here */}
    </div>
  );
}