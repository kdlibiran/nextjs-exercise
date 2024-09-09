import { iRecipeResponse } from "@/types/recipe";
import { useRouter } from "next/router";
import Image from "next/image";

interface PaginationProps {
  recipeData: iRecipeResponse | null;
  searchTerm: string;
}

export default function Pagination({ recipeData, searchTerm }: PaginationProps) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`/?page=${page}&search=${searchTerm}`);
  };

  return (
    <div className="flex flex-col items-center mt-4">
      {recipeData && (
        <div className="mb-2">
          <span>Total Recipes: {recipeData.totalRecipes}</span>
        </div>
      )}
      <div className="flex gap-2 items-center">
        <button
          onClick={() => handlePageChange(recipeData?.previousPage || 1)}
          disabled={!recipeData || recipeData.previousPage <= 0}
          className="px-2 py-1 bg-slate-500 text-white rounded disabled:bg-gray-300"
        >
          <Image src="/icons/prev.svg" alt="Prev" height={20} width={20} />
        </button>
        {recipeData && (
          <div>
            <span className="text-sm">  
              Page {recipeData.page} of {recipeData.totalPages}
            </span>
          </div>
        )}
        <button
          onClick={() => handlePageChange(recipeData?.nextPage || 1)}
          disabled={!recipeData || recipeData.nextPage > recipeData.totalPages}
          className="px-2 py-1 bg-slate-500 text-white rounded disabled:bg-gray-300"
        >
          <Image src="/icons/next.svg" alt="Next" height={20} width={20} />
        </button>
      </div>
    </div>
  );
}
