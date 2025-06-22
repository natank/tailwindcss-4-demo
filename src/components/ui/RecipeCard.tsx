// RecipeCard: summary card for a recipe
import React from "react";

type RecipeCardProps = {
  title: string;
  description: string;
  tags: string[];
  onClick?: () => void;
};

export default function RecipeCard({ title, description, tags, onClick }: RecipeCardProps) {
  return (
    <div
      className="rounded-2xl bg-card/80 backdrop-blur-md p-5 shadow-lg cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border border-surface/30 group focus-within:ring-2 focus-within:ring-primary/40 mb-2"
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${title}`}
      onKeyPress={e => { if (e.key === 'Enter' && onClick) onClick(); }}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-lg font-heading font-semibold text-primary group-hover:text-accent transition-colors">{title}</span>
      </div>
      <div className="text-muted text-sm mb-3">{description}</div>
      <div className="flex gap-1 flex-wrap">
        {tags.map((tag) => (
          <span key={tag} className="bg-primary/90 text-white text-xs px-2 py-0.5 rounded-full font-semibold shadow-sm">#{tag}</span>
        ))}
      </div>
    </div>
  );
}
