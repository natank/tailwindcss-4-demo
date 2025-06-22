// BackButton: returns to the recipe list view
export default function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-sm text-primary underline hover:text-primary/80 mb-4 focus:outline-none focus:ring-2 focus:ring-primary/40"
    >
      ← Back
    </button>
  );
}
