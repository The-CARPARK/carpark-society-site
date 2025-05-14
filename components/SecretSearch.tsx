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
    <input
      type="text"
      placeholder="Search the blog..."
      className="border border-gray-400 px-3 py-2 rounded-md w-full max-w-md mt-4"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}