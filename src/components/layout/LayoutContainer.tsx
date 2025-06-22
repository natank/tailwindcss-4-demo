// LayoutContainer: wraps main content, provides consistent padding & max width
export default function LayoutContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 md:px-8 max-w-4xl mx-auto w-full">
      {children}
    </div>
  );
}
