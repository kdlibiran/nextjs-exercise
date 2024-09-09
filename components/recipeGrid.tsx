import { iRecipe } from "@/types/recipe";
import Link from "next/link";
import RecipeCard from "./RecipeCard";
interface RecipeGridProps {
  recipes: iRecipe[];
}

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {recipes.map((recipe) => (
        <div className="flex flex-col h-full" key={recipe.id}>
          <Link href={`/recipe/${recipe.id}`} className="h-full">
            <RecipeCard recipe={recipe} />
          </Link>
        </div>
      ))}
    </div>
  );
}
