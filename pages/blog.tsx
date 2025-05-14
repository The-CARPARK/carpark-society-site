import { useState } from 'react';
import { useRouter } from 'next/router';

export default function BlogPage() {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (searchValue.trim() === 'A7X-93L-R9F') {
        router.push('/secret');
      }
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search the blog..."
        className="border border-gray-400 px-3 py-2 rounded-md w-full max-w-md"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {/* Add the rest of your blog content here */}
    </div>
  );
}