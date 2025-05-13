import Link from "next/link";
import { ReactNode } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import type { IconType } from "react-icons";

const FacebookIcon: IconType = FaFacebookF;
const InstagramIcon: IconType = FaInstagram;

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
        <nav className="space-x-4 text-sm uppercase text-gray-400">
          <Link href="/history" className="hover:text-white">History</Link>
          <Link href="/blog" className="hover:text-white">Blog</Link>
        </nav>
      </header>

      <main className="flex-grow p-6">{children}</main>

      <footer className="p-4 border-t border-gray-700 text-center space-y-2">
        <div className="flex justify-center gap-6 text-xl text-gray-400">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FacebookIcon className="hover:text-white transition-colors" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon className="hover:text-white transition-colors" />
          </a>
        </div>
        <p className="text-xs text-gray-500">
          Observed by The Watchers © {new Date().getFullYear()} — All frequencies monitored.
        </p>
      </footer>
    </div>
  );
}
