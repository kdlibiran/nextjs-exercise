import { iRecipe } from "@/types/recipe";
import Link from "next/link";
import RecipeCard from "./RecipeCard";
import styles from "./RecipeGrid.module.scss"; // Import the SCSS module

interface RecipeGridProps {
  recipes: iRecipe[];
}

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  return (
    <div className={styles.gridContainer}>
      {recipes.map((recipe) => (
        <div className={styles.cardContainer} key={recipe.id}>
          <Link href={`/recipe/${recipe.id}`} className={styles.cardLink}>
            <RecipeCard recipe={recipe} />
          </Link>
        </div>
      ))}
    </div>
  );
}
