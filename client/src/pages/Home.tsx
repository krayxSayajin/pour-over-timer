import { recipes } from "@/lib/recipes";
import RecipeCard from "@/components/RecipeCard";
import ThemeToggle from "@/components/ThemeToggle";
import { Coffee } from "lucide-react";

interface HomeProps {
  onSelectRecipe: (recipeId: string) => void;
}

export default function Home({ onSelectRecipe }: HomeProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
              <Coffee className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold" data-testid="text-app-title">Pour Over Timer</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Expert brewing recipes</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-2xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Choose Your Recipe</h2>
          <p className="text-sm text-muted-foreground">
            {recipes.length} expert pour over methods
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={() => onSelectRecipe(recipe.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
