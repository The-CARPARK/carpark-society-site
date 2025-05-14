import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  useEffect(() => {
    console.log("✅ Secret search bar active");
  }, []);

  const handleKeyDown = (e) => {
    console.log("Key pressed:", e.key, "Current value:", searchValue);
    if (e.key === 'Enter' && searchValue.trim() === 'A7X-93L-R9F') {
      router.push('/secret');
    }
  };

  return (
    <>
      <div className="bg-red-800 text-white p-4 text-center font-bold">
        🔥 DEBUG: SEARCH BAR ACTIVE 🔥
      </div>
      <div className="bg-yellow-200 p-4 text-black text-center">
        <input
          type="text"
          placeholder="Try typing the secret code..."
          className="px-4 py-2 rounded border border-black text-black"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;