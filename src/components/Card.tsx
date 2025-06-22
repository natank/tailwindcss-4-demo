import type { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="card bg-muted-light text-gray-900 dark:bg-muted-dark dark:text-white">
      {children}
    </div>
  );
}
