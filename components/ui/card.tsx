import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="border border-gray-700 rounded-lg shadow-lg p-6">
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
