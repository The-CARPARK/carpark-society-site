
import { ReactNode } from "react";

export function Button({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <button className={`rounded px-4 py-2 font-bold ${className}`}>{children}</button>;
}
