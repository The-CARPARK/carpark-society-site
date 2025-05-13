import { useState } from 'react';
import { useRouter } from 'next/router';

const SecretSearch = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim().toLowerCase() === 'watchtower') {
      router.push('/watchers');
    } else {
      setError('Access Denied');
    }
  };

  return (
    <form onSubmit={handleSearch} className="my-4 flex flex-col gap-2">
      <input
        type="text"
        placeholder="Enter code"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setError('');
        }}
        className="border px-3 py-2 rounded"
      />
      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        Search
      </button>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </form>
  );
};

export default SecretSearch;
