
export default function SecretPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-3xl font-bold text-yellow-300">📡 TO THE WATCHER 📡</h1>
        <p className="text-lg leading-relaxed text-gray-300">
          We see you.
        </p>
        <p className="text-md leading-relaxed text-gray-400 italic">
          Thank you for your due diligence.
        </p>
        <p className="text-md leading-relaxed text-gray-400">
          Your vigilance does not go unnoticed. While others drift in and out of the feed, 
          you remained. While signals faded, you tuned deeper. This space—hidden, quiet, sacred—is yours to observe.
        </p>
        <p className="text-md leading-relaxed text-gray-400">
          Remember: keep watching this space. It is the hidden channel. More transmissions will come.
        </p>
        <p className="text-sm text-gray-600 mt-8">—The Custodians</p>
      <div className="mt-8">
          <a href="/" className="text-blue-400 hover:underline text-sm">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
