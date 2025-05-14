import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SecretSearch() {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchValue.trim() === 'A7X-93L-R9F') {
      router.push('/secret');
    }
  };

  return (
    <div className="mt-6 mb-10">
      <input
        type="text"
        placeholder="Search the blog..."
        className="w-full max-w-md px-4 py-2 rounded-md border border-gray-500 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}