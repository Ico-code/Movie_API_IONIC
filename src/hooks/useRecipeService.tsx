import { useState, useEffect } from "react";

export interface Recipe {
  id: string;
  title: string;
  ingredients: string[];
  instructions: string;
}

const useRecipeService = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const getStoredRecipes = async (): Promise<string | null> => {
    const storedRecipes = await new Promise<string | null>((resolve) => {
      const recipes = localStorage.getItem('recipes');
      resolve(recipes);
    });
    return storedRecipes;
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      const storedRecipes = await getStoredRecipes();
      if (storedRecipes) {
        setRecipes(JSON.parse(storedRecipes));
      } else {
        const defaultRecipes: Recipe[] = [
          {
            id: "1",
            title: "Spaghetti Carbonara",
            ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan"],
            instructions:
              "Boil spaghetti. Cook pancetta. Mix eggs and Parmesan. Combine all.",
          },
          {
            id: "2",
            title: "Chocolate Chip Cookies",
            ingredients: [
              "Flour",
              "Sugar",
              "Butter",
              "Chocolate Chips",
              "Eggs",
              "Baking Soda",
            ],
            instructions:
              "Mix dry ingredients. Add wet ingredients. Fold in chocolate chips. Bake at 350°F for 10 minutes.",
          },
          {
            id: "3",
            title: "Caesar Salad",
            ingredients: [
              "Romaine Lettuce",
              "Caesar Dressing",
              "Parmesan",
              "Croutons",
            ],
            instructions:
              "Chop lettuce. Add dressing. Toss with Parmesan and croutons.",
          },
        ];
        setRecipes(defaultRecipes);
        localStorage.setItem("recipes", JSON.stringify(defaultRecipes));
      }
    };
  
    fetchRecipes();
  }, []);

  const addRecipe = (recipe: Recipe) => {
    const updatedRecipes = [...recipes, recipe];
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  return {
    recipes,
    addRecipe,
  };
};

export default useRecipeService;
