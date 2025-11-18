import RecipeHeader from "../RecipeHeader";
import { Recipe } from "@shared/schema";
import { useState } from "react";

const mockRecipe: Recipe = {
  id: "hoffmann-v60",
  name: "Ultimate V60 Technique",
  expert: "James Hoffmann",
  description: "James Hoffmann's refined V60 method",
  coffeeAmount: 15,
  waterAmount: 250,
  ratio: "1:16.6",
  grindSize: "Medium-fine (similar to table salt)",
  waterTemp: 95,
  totalTime: 210,
  method: "V60",
  steps: []
};

export default function RecipeHeaderExample() {
  const [multiplier, setMultiplier] = useState(1);

  return (
    <RecipeHeader 
      recipe={mockRecipe}
      multiplier={multiplier}
      onBack={() => console.log('Back clicked')}
      onMultiplierChange={setMultiplier}
    />
  );
}
