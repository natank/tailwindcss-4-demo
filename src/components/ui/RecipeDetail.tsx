// RecipeDetail: full recipe view
import React from "react";

type RecipeDetailProps = {
  title: string;
  ingredients: string[];
  steps: string[];
  tags: string[];
};

export default function RecipeDetail({ title, ingredients, steps, tags }: RecipeDetailProps) {
  return (
    <div className="rounded-2xl bg-card/90 backdrop-blur-lg p-7 shadow-2xl border border-surface/30">
      <div className="flex items-center gap-2 mb-3">
        <h2 className="text-2xl font-heading font-bold text-primary mr-2 drop-shadow-sm">{title}</h2>
        <div className="flex gap-1 flex-wrap">
          {tags.map((tag) => (
            <span key={tag} className="bg-accent text-black text-xs px-2 py-0.5 rounded-full font-medium">#{tag}</span>
          ))}
        </div>
      </div>
      <div className="mb-5">
        <div className="font-semibold text-accent mb-1 text-base">📝 Ingredients:</div>
        <ul className="list-disc list-inside text-sm ml-4 space-y-0.5 text-text/90">
          {ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-semibold text-accent mb-1 text-base">🧑‍🍳 Steps:</div>
        <ol className="list-decimal list-inside text-sm ml-4 space-y-1 text-text/90">
          {steps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
