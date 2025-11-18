import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Timer from "@/pages/Timer";
import { getRecipeById } from "@/lib/recipes";

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);

  const selectedRecipe = selectedRecipeId ? getRecipeById(selectedRecipeId) : null;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {selectedRecipe ? (
          <Timer 
            recipe={selectedRecipe} 
            onBack={() => setSelectedRecipeId(null)}
          />
        ) : (
          <Home onSelectRecipe={setSelectedRecipeId} />
        )}
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
