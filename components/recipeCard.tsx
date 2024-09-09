import { iRecipe } from "@/types/recipe";
import Image from "next/image";

interface RecipeCardProps {
  recipe: iRecipe;
  detailed?: boolean;
  onImageClick?: (image: string) => void; // Add onImageClick prop
}

export default function RecipeCard({ recipe, detailed = false, onImageClick }: RecipeCardProps) {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden bg-slate-100 h-full">
      <div className="bg-gray-200 h-48 flex items-center justify-center overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.name}
          height={1000}
          width={1000}
          className="hover:scale-105 transition-all duration-300 cursor-pointer"
          onClick={() => onImageClick && onImageClick(recipe.image)} // Handle image click
        />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{recipe.name}</h2>
        {detailed && (
          <>
            <h3 className="text-lg font-medium mb-1">Ingredients:</h3>
            <ul className="list-disc list-inside mb-4">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3 className="text-lg font-medium mb-1">Instructions:</h3>
            <ol className="list-decimal list-inside">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </>
        )}
      </div>
    </div>
  );
}
