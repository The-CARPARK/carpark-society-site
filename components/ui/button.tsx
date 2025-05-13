import { ReactNode } from "react";

export function Button({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <button className={`px-4 py-2 rounded font-bold transition-colors ${className}`}>
      {children}
    </button>
  );
}
