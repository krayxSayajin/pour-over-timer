import StepList from "../StepList";
import { RecipeStep } from "@shared/schema";

const mockSteps: RecipeStep[] = [
  {
    stepNumber: 1,
    duration: 10,
    waterAmount: 50,
    instruction: "Start your timer and pour 50g of water",
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
  }
];

export default function StepListExample() {
  return (
    <StepList 
      steps={mockSteps}
      currentStepIndex={1}
    />
  );
}
