import { iRecipe, iRecipeResponse } from "@/types/recipe";
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<iRecipeResponse | { error: string }>,
) {
  let recipes: iRecipe[] = [];
  try {
    recipes = Object.values(JSON.parse(fs.readFileSync("recipe.json", "utf8")));
  } catch (error) {
    return res.status(500).json({ error: "Failed to read recipes file" });
  }

  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const search = (req.query.search as string || "").toLowerCase();

  // Filter recipes based on search query
  const filteredRecipes: iRecipe[] = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(search)
  );

  const startIndex: number = (page - 1) * limit;
  const endIndex: number = page * limit;

  const paginatedRecipes: iRecipe[] = filteredRecipes.slice(startIndex, endIndex);

  const response: iRecipeResponse = {
    previousPage: page - 1,
    page: page,
    nextPage: page + 1,
    totalPages: Math.ceil(filteredRecipes.length / limit),
    totalRecipes: filteredRecipes.length,
    recipes: paginatedRecipes,
  };

  res.status(200).json(response);
}
