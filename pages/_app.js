import { useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchValue.trim() === 'A7X-93L-R9F') {
      router.push('/secret');
    }
  };

  return (
    <div>
      <div className="p-4">
        <input
          type="text"
          placeholder="Search the blog..."
          className="w-full max-w-md mt-4 mb-4 px-4 py-2 rounded-md border border-gray-500 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;