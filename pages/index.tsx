import { iRecipeResponse } from "@/types/recipe";
import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import RecipeGrid from "@/components/RecipeGrid";
import Pagination from "@/components/Pagination";
import { useRouter } from "next/router";

export default function Home() {
  // Initialize 
  const router = useRouter();
  const [recipeData, setRecipeData] = useState<iRecipeResponse | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Use effect to fetch the recipes
  useEffect(() => {
    // Parse the url parameters
    const page = parseInt(router.query.page as string) || 1;
    const search = router.query.search as string || "";
    // Set the search term
    setSearchTerm(search);
    // Fetch the recipes
    getRecipes(page, 8, search)
      .then((data: iRecipeResponse | null) => {
        // If the data is not null, set the recipe data
        if (data) {
          setRecipeData(data);
        }
      });
  }, [router.query.page, router.query.search]); // Only re-fetch when the page or search query changes

  // Function to fetch the recipes
  const getRecipes = async (page: number, limit: number, search: string): Promise<iRecipeResponse | null> => {
    const res = await fetch(`/api/recipes?page=${page}&limit=${limit}&search=${search}`);
    const data = await res.json();
    return data;
  };

  // Function to search for recipes
  const searchRecipes = (search: string): void => {
    setSearchTerm(search);
    router.push(`/?page=1&search=${search}`);
  };

  return (
    <div className="flex flex-col gap-4 p-7 min-h-screen">
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="flex justify-center text-3xl font-bold font-mono">
          Recipes
        </div>
        <SearchBar searchTerm={searchTerm} searchRecipes={searchRecipes} />
      </div>
      <div className="flex-grow flex flex-col justify-center">
        {recipeData && <RecipeGrid recipes={recipeData.recipes} />}
      </div>
      <div className="mt-auto">
        <Pagination recipeData={recipeData} searchTerm={searchTerm} />
      </div>
    </div>
  );
}