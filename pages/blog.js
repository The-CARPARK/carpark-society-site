import { useState } from 'react';
import { useRouter } from 'next/router';

export default function BlogPage() {
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
    <div className="p-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Blog</h1>
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

      {/* Your blog content goes here */}
    </div>
  );
}