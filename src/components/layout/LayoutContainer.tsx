// LayoutContainer: wraps main content, provides consistent padding & max width
export default function LayoutContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#1e293b] to-[#2563eb]/10 flex flex-col items-center justify-start px-4 md:px-8 py-8 w-full">
      <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl">
        {children}
      </div>
    </div>
  );
}
