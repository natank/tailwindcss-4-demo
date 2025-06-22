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
    <div className="bg-surface rounded-2xl p-6 shadow-card">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-xl font-bold mr-2">{title}</h2>
        <div className="flex gap-1 flex-wrap">
          {tags.map((tag) => (
            <span key={tag} className="bg-accent text-black text-xs px-2 py-0.5 rounded-md">#{tag}</span>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <div className="font-semibold mb-1">📝 Ingredients:</div>
        <ul className="list-disc list-inside text-sm ml-2">
          {ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-semibold mb-1">🧑‍🍳 Steps:</div>
        <ol className="list-decimal list-inside text-sm ml-2 space-y-1">
          {steps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
