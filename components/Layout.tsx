import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white font-mono flex flex-col">
      <header className="p-6 text-center border-b border-gray-700 space-y-2">
        <Link href="/" className="text-3xl font-bold tracking-widest hover:text-red-500 transition-colors block">
          THE CARPARK SOCIETY
        </Link>
        <p className="text-sm text-gray-400 uppercase">
          Surveillance. Ritual. Revelation.
        </p>
        <nav className="flex justify-center gap-4 mt-4">
          <Link
            href="/history"
            className="px-4 py-2 text-sm uppercase border border-gray-600 rounded hover:bg-gray-800 hover:text-white transition-colors"
          >
            History
          </Link>
          <Link
            href="/blog"
            className="px-4 py-2 text-sm uppercase border border-gray-600 rounded hover:bg-gray-800 hover:text-white transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/events"
            className="px-4 py-2 text-sm uppercase border border-gray-600 rounded hover:bg-gray-800 hover:text-white transition-colors"
          >
            Upcoming Events
          </Link>
        </nav>
      </header>

      <main className="flex-grow p-6">{children}</main>

      <footer className="p-4 border-t border-gray-700 text-center space-y-2">
        <div>
          <a
            href="https://linktr.ee/TheCarParkSociety"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            🌐 Access Network
          </a>
        </div>
        <p className="text-xs text-gray-500">
          Observed by The Watchers © {new Date().getFullYear()} — All frequencies monitored.
        </p>
      </footer>
    </div>
  );
}
