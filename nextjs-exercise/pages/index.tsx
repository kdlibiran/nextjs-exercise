"use client";
import { iRecipeResponse } from "@/types/recipe";
import { useEffect, useState } from "react";
import SearchBar from "@/components/searchBar";
import RecipeGrid from "@/components/recipeGrid";
import Pagination from "@/components/pagination";
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
    getRecipes(page, 8, search)
      .then((data: iRecipeResponse) => {
        setRecipeData(data);
      });
  }, [router.query.page, router.query.search]);

  const searchRecipes = (search: string) => {
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