import { iRecipeResponse } from "@/types/recipe";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  recipeData: iRecipeResponse | null;
  searchTerm: string;
}

export default function Pagination({ recipeData, searchTerm }: PaginationProps) {
  // Initialize needed variables
  const router = useRouter();

  // Function to handle the page change
  const handlePageChange = (page: number): void => {
    router.push(`/?page=${page}&search=${searchTerm}`);
  };

  return (
    <div className={styles.pagination}>
      {recipeData && (
        <div className={styles.paginationTotal}>
          <span>Total Recipes: {recipeData.totalRecipes}</span>
        </div>
      )}
      <div className={styles.paginationButtons}>
        <button
          onClick={() => handlePageChange(recipeData?.previousPage || 1)}
          disabled={!recipeData || recipeData.previousPage <= 0}
          className={styles.paginationButton}
        >
          <Image src="/icons/prev.svg" alt="Prev" height={20} width={20} />
        </button>
        {recipeData && (
          <div>
            <span className="text-sm">  
              Page <input type="number" value={recipeData.page} onChange={(e) => handlePageChange(parseInt(e.target.value) || 1)} className={styles.paginationInput} /> of {recipeData.totalPages}
            </span>
          </div>
        )}
        <button
          onClick={() => handlePageChange(recipeData?.nextPage || 1)}
          disabled={!recipeData || recipeData.nextPage > recipeData.totalPages}
          className={styles.paginationButton}
        >
          <Image src="/icons/next.svg" alt="Next" height={20} width={20} />
        </button>
      </div>
    </div>
  );
}
