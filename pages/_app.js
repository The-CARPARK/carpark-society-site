import { useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [showInput, setShowInput] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleToggle = () => setShowInput(!showInput);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchValue.trim() === 'A7X-93L-R9F') {
      router.push('/secret');
    }
  };

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={handleToggle}
          className="text-white text-xl bg-gray-900 hover:bg-gray-700 px-3 py-2 rounded-full shadow"
        >
          🔍
        </button>
        {showInput && (
          <input
            type="text"
            placeholder="Enter secret code..."
            className="mt-2 w-64 px-3 py-2 rounded-md border border-gray-300 bg-white text-black focus:outline-none"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        )}
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;