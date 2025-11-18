import RecipeCard from "../RecipeCard";
import { Recipe } from "@shared/schema";

const mockRecipe: Recipe = {
  id: "hoffmann-v60",
  name: "Ultimate V60 Technique",
  expert: "James Hoffmann",
  description: "James Hoffmann's refined V60 method focusing on even extraction and clarity",
  coffeeAmount: 15,
  waterAmount: 250,
  ratio: "1:16.6",
  grindSize: "Medium-fine",
  waterTemp: 95,
  totalTime: 210,
  method: "V60",
  steps: []
};

export default function RecipeCardExample() {
  return (
    <RecipeCard 
      recipe={mockRecipe} 
      onClick={() => console.log('Recipe card clicked')}
    />
  );
}
