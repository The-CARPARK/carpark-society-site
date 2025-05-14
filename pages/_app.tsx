import '../styles/globals.css';
import { AppProps } from 'next/app';
import { useState } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const [searchValue, setSearchValue] = useState('');
  const [noResults, setNoResults] = useState(false);
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (searchValue.trim() === 'A7X-93L-R9F') {
        router.push('/secret');
      } else {
        setNoResults(true);
        setTimeout(() => setNoResults(false), 3000);
      }
    }
  };

  const blogSearchBar = (
    <div className="flex items-center space-x-4 mt-4">
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
  );

  const isBlogPage = router.pathname === '/blog';

  return (
    <>
      <Component
        {...pageProps}
        blogSearchBar={isBlogPage ? blogSearchBar : null}
      />
    </>
  );
}

export default MyApp;