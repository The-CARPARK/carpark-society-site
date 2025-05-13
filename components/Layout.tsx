import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white font-mono p-8">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-widest">THE CARPARK SOCIETY</h1>
        <p className="text-sm uppercase text-gray-400">Surveillance. Ritual. Revelation.</p>
        <nav className="space-x-6 mt-4 text-sm">
          <Link href="/history" className="underline hover:text-yellow-400">History</Link>
          <Link href="/blog" className="underline hover:text-yellow-400">Blog</Link>
          <a href="https://facebook.com/thecarparksociety" className="underline hover:text-yellow-400" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com/thecarparksociety" className="underline hover:text-yellow-400" target="_blank" rel="noopener noreferrer">Instagram</a>
        </nav>
      </header>

      <div className="mt-10">{children}</div>
    </div>
  );
}
