import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function BlogPage() {
  const [searchValue, setSearchValue] = useState('');
  const [noResults, setNoResults] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log("✅ Blog page mounted");
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("Key pressed:", e.key, "Search value:", searchValue);
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
    <div className="p-10 bg-yellow-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-red-800 mb-6">
        BLOG PAGE IS LOADING ✅
      </h1>

      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search (debug mode)..."
          className="w-80 px-4 py-3 text-lg rounded-md border border-black text-black bg-white shadow"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      {noResults && (
        <div className="text-center text-red-600 font-semibold text-lg">
          No results found.
        </div>
      )}
    </div>
  );
}