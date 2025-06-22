// Header: displays app title/logo and nav placeholder
export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center mb-8">
      <div className="flex items-center gap-3">
        <span className="text-3xl">🍳</span>
        <h1 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-primary drop-shadow-md">
          Recipe Catalog
        </h1>
      </div>
      <div className="mt-2 w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
    </header>
  );
}
