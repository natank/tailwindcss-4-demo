// FilterTag: toggleable tag button
import React from "react";

type FilterTagProps = {
  label: string;
  active: boolean;
  onClick?: () => void;
};

export default function FilterTag({ label, active, onClick }: FilterTagProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-block px-2 py-0.5 rounded-md text-sm font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary/40
        ${active ? "bg-accent text-black" : "bg-surface text-muted hover:bg-accent/60"}`}
      aria-pressed={active}
    >
      #{label}
    </button>
  );
}
