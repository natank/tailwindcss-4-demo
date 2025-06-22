import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={
        dark
          ? "dark min-h-screen bg-gray-900 text-white"
          : "min-h-screen bg-gray-100 text-gray-900"
      }
    >
      <div className="container mx-auto flex flex-col items-center gap-[var(--spacing-4)] p-[var(--spacing-8)] font-sans">
        <button onClick={() => setDark(!dark)} className="btn">
          Toggle {dark ? "Light" : "Dark"} Mode
        </button>

        <div className="card">
          <h2 className="mb-[var(--spacing-4)] text-2xl font-bold">
            Hello, Tailwind CSS 4!
          </h2>
          <p className="mb-[var(--spacing-4)]">
            This is a simple card demonstrating design tokens in action.
          </p>
          <button className="btn">Action Button</button>
        </div>
      </div>
    </div>
  );
}
