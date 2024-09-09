"use client";
import { iRecipeResponse } from "@/types/recipe";
import { useEffect, useState } from "react";
import RecipeCard from "@/components/recipeCard";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [recipeData, setRecipeData] = useState<iRecipeResponse | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const getRecipes = async (page: number, limit: number, search: string) => {
    const res = await fetch(`/api/recipes?page=${page}&limit=${limit}&search=${search}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const page = parseInt(router.query.page as string) || 1;
    const search = router.query.search as string || "";
    setSearchTerm(search);
    getRecipes(page, 12, search)
      .then((data: iRecipeResponse) => {
        setRecipeData(data);
      });
  }, [router.query.page, router.query.search]);

  const searchRecipes = (search: string) => {
    setSearchTerm(search);
    router.push(`/?page=1&search=${search}`);
  };

  const handlePreviousPage = () => {
    if (recipeData && recipeData.previousPage > 0) {
      router.push(`/?page=${recipeData.previousPage}&search=${searchTerm}`);
    }
  };

  const handleNextPage = () => {
    if (recipeData && recipeData.nextPage <= recipeData.totalPages) {
      router.push(`/?page=${recipeData.nextPage}&search=${searchTerm}`);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-7">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Recipes</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => searchRecipes(e.target.value)}
          placeholder="Search recipes..."
          className="px-4 py-2 border rounded w-full max-w-md"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recipeData?.recipes.map((recipe) => (
          <div className="flex flex-col h-full" key={recipe.id}>
            <Link href={`/recipe/${recipe.id}`} className="h-full">
              <RecipeCard recipe={recipe} />
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4 items-center">
        <button
          onClick={handlePreviousPage}
          disabled={!recipeData || recipeData.previousPage <= 0}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        {recipeData && (
          <span>
            Page {recipeData.page} of {recipeData.totalPages}
          </span>
        )}
        <button
          onClick={handleNextPage}
          disabled={!recipeData || recipeData.nextPage > recipeData.totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}