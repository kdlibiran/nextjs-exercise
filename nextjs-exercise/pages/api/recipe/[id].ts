import { iRecipe } from "@/types/recipe";
import { iError } from "@/types/error";
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<iRecipe | iError>,
) {
  const { id } = req.query;
  let recipes: iRecipe[] = [];

  try {
    recipes = JSON.parse(fs.readFileSync("recipe.json", "utf8"));
  } catch (error) {
    return res.status(500).json({ error: "Failed to read recipes file" });
  }

  const recipe: iRecipe | undefined = recipes[parseInt(id as string)];
  if (!recipe) {
    return res.status(404).json({ error: "Recipe not found" });
  }

  res.status(200).json(recipe);
}
