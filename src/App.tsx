import { useState } from "react";
import LayoutContainer from "./components/layout/LayoutContainer";
import Header from "./components/ui/Header";
import FilterBar from "./components/ui/FilterBar";
import RecipeCard from "./components/ui/RecipeCard";
import RecipeDetail from "./components/ui/RecipeDetail";
import BackButton from "./components/ui/BackButton";

// Mock data
const TAGS = ["Vegan", "Quick", "Dessert"];
const RECIPES = [
  {
    id: 1,
    title: "Avocado Salad",
    description: "Light, healthy lunch",
    tags: ["Vegan", "Quick"],
    ingredients: ["1 avocado", "2 cups spinach", "Lemon juice", "Salt"],
    steps: [
      "Slice avocado",
      "Toss with spinach",
      "Add lemon and salt",
      "Serve",
    ],
  },
  {
    id: 2,
    title: "Pasta Primavera",
    description: "Quick Italian dish",
    tags: ["Quick"],
    ingredients: ["200g pasta", "1 bell pepper", "Olive oil"],
    steps: ["Boil pasta", "Sauté veggies", "Mix & serve"],
  },
  {
    id: 3,
    title: "Chocolate Cake",
    description: "Rich dessert treat",
    tags: ["Dessert"],
    ingredients: ["Flour", "Cocoa powder", "Sugar", "Eggs", "Butter"],
    steps: ["Mix ingredients", "Bake", "Cool & serve"],
  },
  {
    id: 4,
    title: "Miso Ramen",
    description: "Warm, cozy soup",
    tags: ["Vegan"],
    ingredients: ["Ramen noodles", "Miso paste", "Tofu", "Scallions"],
    steps: ["Boil noodles", "Prepare broth", "Add toppings", "Serve hot"],
  },
];

export function App() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);

  const filteredRecipes = activeTag
    ? RECIPES.filter((r) => r.tags.includes(activeTag))
    : RECIPES;

  const selectedRecipe = RECIPES.find((r) => r.id === selectedRecipeId) || null;

  return (
    <LayoutContainer>
      <Header />
      {selectedRecipe ? (
        <>
          <BackButton onClick={() => setSelectedRecipeId(null)} />
          <RecipeDetail
            title={selectedRecipe.title}
            ingredients={selectedRecipe.ingredients}
            steps={selectedRecipe.steps}
            tags={selectedRecipe.tags}
          />
        </>
      ) : (
        <>
          <FilterBar
            tags={TAGS}
            activeTag={activeTag}
            onTagClick={(tag) => setActiveTag(activeTag === tag ? null : tag)}
          />
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                title={recipe.title}
                description={recipe.description}
                tags={recipe.tags}
                onClick={() => setSelectedRecipeId(recipe.id)}
              />
            ))}
          </div>
        </>
      )}
    </LayoutContainer>
  );
}

export default App;
