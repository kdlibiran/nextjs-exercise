import { iRecipe, iRecipeResponse } from "@/types/recipe";
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<iRecipeResponse | { error: string }>,
) {
  // Read the recipes from the JSON file
  let recipes: iRecipe[] = [];
  try {
    recipes = Object.values(JSON.parse(fs.readFileSync("recipe.json", "utf8")));
  } catch (error) {
    // If the file cannot be read, return an error
    return res.status(500).json({ error: "Failed to read recipes file" });
  }

  // Parse the query parameters
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const search = (req.query.search as string || "").toLowerCase();

  // Filter recipes based on search query
  const filteredRecipes: iRecipe[] = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(search)
  );

  // Calculate the start and end index for pagination
  const startIndex: number = (page - 1) * limit;
  const endIndex: number = page * limit;

  // Get the paginated recipes
  const paginatedRecipes: iRecipe[] = filteredRecipes.slice(startIndex, endIndex);

  // Create the response object
  const response: iRecipeResponse = {
    previousPage: page - 1,
    page: page,
    nextPage: page + 1,
    totalPages: Math.ceil(filteredRecipes.length / limit),
    totalRecipes: filteredRecipes.length,
    recipes: paginatedRecipes,
  };

  // Send the response
  res.status(200).json(response);
}
