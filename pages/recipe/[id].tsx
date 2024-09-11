import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { iRecipe } from "@/types/recipe";
import RecipeCard from "@/components/RecipeCard";
import Modal from "@/components/Modal";
import styles from "./RecipePage.module.scss"; // Import the SCSS module

export default function RecipePage() {
  // Initialize needed variables
  const router = useRouter();
  const id: string = router.query.id as string;
  const [recipe, setRecipe] = useState<iRecipe | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Function to fetch the recipe
  const getRecipe = async (id: string): Promise<iRecipe | null> => {
    const res = await fetch(`/api/recipe/${id}`);
    const data = await res.json();
    return data;
  };

  // Function to handle the image click for the modal
  const handleImageClick = (image: string): void => {
    setSelectedImage(image);
  };

  // Use effect to fetch the recipe
  useEffect(() => {
    if (id) {
      getRecipe(id)
        .then((data) => {
          setRecipe(data);
        });
    }
  }, [id]);

  // If the recipe is not loaded, show a loading message
  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {selectedImage && (
        <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
      <div className={`${styles.recipePageContainer}`}>
        <div className={styles.backButtonContainer}>
            <button
              className={styles.backButton}
              onClick={() => router.back()}
            >
              ← Back to Recipes
            </button>
        </div>
        <div className={styles.recipeCardContainer}>
          <RecipeCard recipe={recipe} detailed onImageClick={handleImageClick} />
        </div>
      </div>
    </>
  );
}
