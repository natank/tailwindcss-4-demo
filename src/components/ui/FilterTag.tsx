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
      className={`px-3 py-1 rounded-full text-sm font-medium border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-sm 
        ${active 
          ? "bg-primary text-white border-primary scale-105" 
          : "bg-surface text-muted border-surface hover:bg-primary hover:text-white focus:bg-primary focus:text-white"}
      `}
      aria-pressed={active}
    >
      #{label}
    </button>
  );
}
