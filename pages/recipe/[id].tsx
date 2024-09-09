import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { iRecipe } from "@/types/recipe";
import RecipeCard from "@/components/recipeCard";
import Modal from "@/components/modal";

export default function RecipePage() {
  const router = useRouter();
  const { id } = router.query;
  const [recipe, setRecipe] = useState<iRecipe | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getRecipe = async (id: string) => {
    const res = await fetch(`/api/recipe/${id}`);
    const data = await res.json();
    return data;
  };  

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    if (id) {
      getRecipe(id as string)
        .then((data) => {
          setRecipe(data);
        });
    }
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {selectedImage && (
        <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
      <div className="min-h-screen flex flex-col justify-center items-center relative">
        <div className="absolute top-4 left-4">
            <button className="text-slate-500 hover:text-blue-700 transition-colors duration-300" onClick={() => router.back()}>
              ← Back to Recipes
            </button>
        </div>
        <div className="max-w-2xl w-full mx-auto p-4">
          <RecipeCard recipe={recipe} detailed onImageClick={handleImageClick} />
        </div>
      </div>
    </>
  );
}
