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
      className="bg-surface rounded-2xl p-4 shadow-card cursor-pointer hover:shadow-lg transition-shadow mb-4"
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${title}`}
      onKeyPress={e => { if (e.key === 'Enter' && onClick) onClick(); }}
    >
      <div className="font-semibold text-lg mb-1">{title}</div>
      <div className="text-muted text-sm mb-2">{description}</div>
      <div className="flex gap-1 flex-wrap">
        {tags.map((tag) => (
          <span key={tag} className="bg-accent text-black text-xs px-2 py-0.5 rounded-md">#{tag}</span>
        ))}
      </div>
    </div>
  );
}
