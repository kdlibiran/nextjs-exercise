import { iRecipe } from "@/types/recipe";
import { iError } from "@/types/error";
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<iRecipe | iError>,
) {
  // Read the parameters from the request specifically the id
  const { id } = req.query;
  let recipes: iRecipe[] = [];

  // Read the recipes from the JSON file
  try {
    recipes = JSON.parse(fs.readFileSync("recipe.json", "utf8"));
  } catch (error) {
    // If the file cannot be read, return an error
    return res.status(500).json({ error: "Failed to read recipes file" });
  }

  // Find the recipe with the given id
  const recipe: iRecipe | undefined = recipes[parseInt(id as string)];

  // If the recipe is not found, return an error
  if (!recipe) {
    return res.status(404).json({ error: "Recipe not found" });
  }

  // Return the recipe
  res.status(200).json(recipe);
}
