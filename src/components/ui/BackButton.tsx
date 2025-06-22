// BackButton: returns to the recipe list view
export default function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors mb-5 focus:outline-none focus:ring-2 focus:ring-primary/30 px-2 py-1 rounded-lg"
    >
      <span className="text-lg">←</span> Back
    </button>
  );
}
