import { Recipe } from "@shared/schema";

export const recipes: Recipe[] = [
  {
    id: "hoffmann-v60",
    name: "Ultimate V60 Technique",
    expert: "James Hoffmann",
    description: "James Hoffmann's refined V60 method focusing on even extraction and clarity",
    coffeeAmount: 15,
    waterAmount: 250,
    ratio: "1:16.6",
    grindSize: "Medium-fine (similar to table salt)",
    waterTemp: 95,
    totalTime: 210,
    method: "V60",
    steps: [
      {
        stepNumber: 1,
        duration: 10,
        waterAmount: 50,
        instruction: "Start your timer and pour 50g of water in a spiral motion",
        technique: "Bloom - wet all grounds evenly"
      },
      {
        stepNumber: 2,
        duration: 35,
        waterAmount: 0,
        instruction: "Wait and let the coffee bloom",
        technique: "Allow CO2 to release"
      },
      {
        stepNumber: 3,
        duration: 30,
        waterAmount: 100,
        instruction: "Pour to 150g total in a slow spiral",
        technique: "Gentle circular pour"
      },
      {
        stepNumber: 4,
        duration: 30,
        waterAmount: 100,
        instruction: "Pour to 250g total in a slow spiral",
        technique: "Maintain consistent pour rate"
      },
      {
        stepNumber: 5,
        duration: 105,
        waterAmount: 0,
        instruction: "Let it draw down completely",
        technique: "Target total time around 3:30"
      }
    ]
  },
  {
    id: "kasuya-4-6",
    name: "4:6 Method",
    expert: "Tetsu Kasuya",
    description: "Award-winning method that allows you to control sweetness and strength independently",
    coffeeAmount: 20,
    waterAmount: 300,
    ratio: "1:15",
    grindSize: "Medium-coarse",
    waterTemp: 92,
    totalTime: 210,
    method: "V60",
    steps: [
      {
        stepNumber: 1,
        duration: 45,
        waterAmount: 60,
        instruction: "First pour: 60g of water",
        technique: "Controls sweetness - pour gently"
      },
      {
        stepNumber: 2,
        duration: 45,
        waterAmount: 60,
        instruction: "Second pour: 60g (120g total)",
        technique: "Controls sweetness"
      },
      {
        stepNumber: 3,
        duration: 45,
        waterAmount: 60,
        instruction: "Third pour: 60g (180g total)",
        technique: "Controls strength"
      },
      {
        stepNumber: 4,
        duration: 45,
        waterAmount: 60,
        instruction: "Fourth pour: 60g (240g total)",
        technique: "Controls strength"
      },
      {
        stepNumber: 5,
        duration: 30,
        waterAmount: 60,
        instruction: "Fifth pour: 60g (300g total)",
        technique: "Final pour - maintain consistency"
      }
    ]
  },
  {
    id: "winton-single-pour",
    name: "Single Pour V60",
    expert: "Matt Winton",
    description: "Simple single-pour technique focused on consistency and ease of execution",
    coffeeAmount: 15,
    waterAmount: 250,
    ratio: "1:16.6",
    grindSize: "Medium",
    waterTemp: 96,
    totalTime: 180,
    method: "V60",
    steps: [
      {
        stepNumber: 1,
        duration: 10,
        waterAmount: 45,
        instruction: "Bloom with 45g of water, gentle pour",
        technique: "Wet all grounds evenly"
      },
      {
        stepNumber: 2,
        duration: 30,
        waterAmount: 0,
        instruction: "Wait for bloom",
        technique: "Let CO2 escape"
      },
      {
        stepNumber: 3,
        duration: 60,
        waterAmount: 205,
        instruction: "Pour remaining 205g in one continuous pour to 250g total",
        technique: "Steady spiral from center outward"
      },
      {
        stepNumber: 4,
        duration: 80,
        waterAmount: 0,
        instruction: "Let it draw down",
        technique: "Target total time 3:00"
      }
    ]
  },
  {
    id: "rao-spin",
    name: "Rao Spin Method",
    expert: "Scott Rao",
    description: "Technique using aggressive swirling to create a flat coffee bed for even extraction",
    coffeeAmount: 22,
    waterAmount: 360,
    ratio: "1:16.4",
    grindSize: "Medium-fine",
    waterTemp: 96,
    totalTime: 180,
    method: "V60",
    steps: [
      {
        stepNumber: 1,
        duration: 15,
        waterAmount: 60,
        instruction: "Pour 60g for bloom, then swirl gently",
        technique: "Ensure all grounds are wet"
      },
      {
        stepNumber: 2,
        duration: 30,
        waterAmount: 0,
        instruction: "Wait for bloom phase",
        technique: "Let coffee degas"
      },
      {
        stepNumber: 3,
        duration: 30,
        waterAmount: 150,
        instruction: "Pour to 210g total, aggressive swirl after",
        technique: "Spin the V60 to flatten bed"
      },
      {
        stepNumber: 4,
        duration: 30,
        waterAmount: 150,
        instruction: "Pour to 360g total, aggressive swirl after",
        technique: "Final spin for flat bed"
      },
      {
        stepNumber: 5,
        duration: 75,
        waterAmount: 0,
        instruction: "Let it draw down",
        technique: "Aim for flat, even bed"
      }
    ]
  },
  {
    id: "chemex-classic",
    name: "Chemex Classic",
    expert: "Blue Bottle Coffee",
    description: "Clean, bright method optimized for Chemex's thick filters",
    coffeeAmount: 42,
    waterAmount: 700,
    ratio: "1:16.6",
    grindSize: "Medium-coarse",
    waterTemp: 93,
    totalTime: 270,
    method: "Chemex",
    steps: [
      {
        stepNumber: 1,
        duration: 15,
        waterAmount: 100,
        instruction: "Bloom with 100g of water",
        technique: "Saturate all grounds"
      },
      {
        stepNumber: 2,
        duration: 30,
        waterAmount: 0,
        instruction: "Wait for bloom",
        technique: "Allow degassing"
      },
      {
        stepNumber: 3,
        duration: 45,
        waterAmount: 200,
        instruction: "Pour to 300g total in slow circles",
        technique: "Steady, even pour"
      },
      {
        stepNumber: 4,
        duration: 45,
        waterAmount: 200,
        instruction: "Pour to 500g total",
        technique: "Maintain pour rate"
      },
      {
        stepNumber: 5,
        duration: 45,
        waterAmount: 200,
        instruction: "Pour to 700g total",
        technique: "Final pour - stay consistent"
      },
      {
        stepNumber: 6,
        duration: 90,
        waterAmount: 0,
        instruction: "Let it fully drain",
        technique: "Target 4:30 total time"
      }
    ]
  },
  {
    id: "kalita-wave",
    name: "Kalita Wave Standard",
    expert: "George Howell Coffee",
    description: "Forgiving flat-bottom method with excellent consistency",
    coffeeAmount: 20,
    waterAmount: 320,
    ratio: "1:16",
    grindSize: "Medium",
    waterTemp: 93,
    totalTime: 210,
    method: "Kalita Wave",
    steps: [
      {
        stepNumber: 1,
        duration: 15,
        waterAmount: 60,
        instruction: "Bloom with 60g, pour in center",
        technique: "Gentle pour to wet grounds"
      },
      {
        stepNumber: 2,
        duration: 30,
        waterAmount: 0,
        instruction: "Bloom rest",
        technique: "Wait for degassing"
      },
      {
        stepNumber: 3,
        duration: 30,
        waterAmount: 100,
        instruction: "Pour to 160g total in pulses",
        technique: "Small circles in center"
      },
      {
        stepNumber: 4,
        duration: 30,
        waterAmount: 80,
        instruction: "Pour to 240g total",
        technique: "Keep water level consistent"
      },
      {
        stepNumber: 5,
        duration: 30,
        waterAmount: 80,
        instruction: "Pour to 320g total",
        technique: "Final additions"
      },
      {
        stepNumber: 6,
        duration: 75,
        waterAmount: 0,
        instruction: "Draw down",
        technique: "Flat bed at finish"
      }
    ]
  },
  {
    id: "onyx-method",
    name: "Onyx Coffee Method",
    expert: "Onyx Coffee Lab",
    description: "Competition-style method with precise pulse pours for maximum clarity",
    coffeeAmount: 15,
    waterAmount: 250,
    ratio: "1:16.6",
    grindSize: "Medium-fine",
    waterTemp: 96,
    totalTime: 195,
    method: "V60",
    steps: [
      {
        stepNumber: 1,
        duration: 10,
        waterAmount: 50,
        instruction: "Bloom with 50g",
        technique: "Center pour, spiral out"
      },
      {
        stepNumber: 2,
        duration: 35,
        waterAmount: 0,
        instruction: "Bloom rest",
        technique: "Wait and observe"
      },
      {
        stepNumber: 3,
        duration: 15,
        waterAmount: 50,
        instruction: "Pour to 100g total",
        technique: "Pulse pour - center first"
      },
      {
        stepNumber: 4,
        duration: 15,
        waterAmount: 50,
        instruction: "Pour to 150g total",
        technique: "Pulse pour - steady rate"
      },
      {
        stepNumber: 5,
        duration: 15,
        waterAmount: 50,
        instruction: "Pour to 200g total",
        technique: "Pulse pour - maintain level"
      },
      {
        stepNumber: 6,
        duration: 15,
        waterAmount: 50,
        instruction: "Pour to 250g total",
        technique: "Final pulse"
      },
      {
        stepNumber: 7,
        duration: 90,
        waterAmount: 0,
        instruction: "Draw down",
        technique: "Target 3:15 total"
      }
    ]
  },
  {
    id: "prufrock-method",
    name: "Prufrock Coffee Method",
    expert: "Gwilym Davies",
    description: "World Barista Champion's precise method emphasizing temperature and timing",
    coffeeAmount: 16,
    waterAmount: 260,
    ratio: "1:16.25",
    grindSize: "Medium-fine",
    waterTemp: 94,
    totalTime: 180,
    method: "V60",
    steps: [
      {
        stepNumber: 1,
        duration: 15,
        waterAmount: 50,
        instruction: "Bloom pour - 50g in center",
        technique: "Gentle spiral motion"
      },
      {
        stepNumber: 2,
        duration: 30,
        waterAmount: 0,
        instruction: "Bloom wait",
        technique: "Observe expansion"
      },
      {
        stepNumber: 3,
        duration: 45,
        waterAmount: 100,
        instruction: "Pour to 150g total, slow and steady",
        technique: "Circular pour from center"
      },
      {
        stepNumber: 4,
        duration: 30,
        waterAmount: 110,
        instruction: "Pour to 260g total",
        technique: "Finish with consistent rate"
      },
      {
        stepNumber: 5,
        duration: 60,
        waterAmount: 0,
        instruction: "Final draw down",
        technique: "Target 3:00 finish"
      }
    ]
  }
];

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find(r => r.id === id);
}

export function scaleRecipe(recipe: Recipe, multiplier: number): Recipe {
  return {
    ...recipe,
    coffeeAmount: Math.round(recipe.coffeeAmount * multiplier),
    waterAmount: Math.round(recipe.waterAmount * multiplier),
    steps: recipe.steps.map(step => ({
      ...step,
      waterAmount: Math.round(step.waterAmount * multiplier)
    }))
  };
}
