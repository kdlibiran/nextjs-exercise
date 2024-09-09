export interface iRecipe {
    id: number;
    image: string;
    name: string;
    ingredients: string[];
    instructions: string[];
}

export interface iRecipeResponse {
    previousPage: number;
    page: number;
    nextPage: number;
    totalPages: number;
    totalRecipes: number;
    recipes: iRecipe[];
}