import { iRecipe } from "@/types/recipe";
import Image from "next/image";
import styles from "./recipeCard.module.scss";

interface RecipeCardProps {
  recipe: iRecipe;
  detailed?: boolean;
  onImageClick?: (image: string) => void;
}

export default function RecipeCard({ recipe, detailed = false, onImageClick }: RecipeCardProps) {
  return (
    <div className={styles["recipe-card"]}>
      <div className={styles["image-container"]}>
        <Image
          src={recipe.image}
          alt={recipe.name}
          height={1000}
          width={1000}
          className={styles.image}
          onClick={() => onImageClick && onImageClick(recipe.image)} // Handle image click
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{recipe.name}</h2>
        {detailed && (
          <>
            <h3 className={styles["ingredients-title"]}>Ingredients:</h3>
            <ul className={styles["ingredients-list"]}>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3 className={styles["instructions-title"]}>Instructions:</h3>
            <ol className={styles["instructions-list"]}>
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
