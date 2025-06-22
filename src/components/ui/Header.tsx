// Header: displays app title/logo and nav placeholder
export default function Header() {
  return (
    <header className="flex items-center justify-between py-6 mb-6">
      <h1 className="text-2xl font-bold font-heading tracking-tight">🍳 Recipe Catalog</h1>
      <nav>
        {/* Placeholder for future nav links */}
      </nav>
    </header>
  );
}
