import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Coffee, Thermometer } from "lucide-react";
import { Recipe } from "@shared/schema";

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

export default function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  const totalMinutes = Math.floor(recipe.totalTime / 60);
  const totalSeconds = recipe.totalTime % 60;
  const timeDisplay = totalSeconds > 0 
    ? `${totalMinutes}:${totalSeconds.toString().padStart(2, '0')}`
    : `${totalMinutes}m`;

  return (
    <Card 
      className="p-6 hover-elevate active-elevate-2 cursor-pointer transition-all"
      onClick={onClick}
      data-testid={`card-recipe-${recipe.id}`}
    >
      <div className="space-y-4">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold leading-tight" data-testid={`text-recipe-name-${recipe.id}`}>
              {recipe.name}
            </h3>
            <Badge variant="secondary" className="shrink-0 text-xs" data-testid={`badge-method-${recipe.id}`}>
              {recipe.method}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground" data-testid={`text-expert-${recipe.id}`}>
            {recipe.expert}
          </p>
        </div>

        <p className="text-sm text-foreground/80 line-clamp-2">
          {recipe.description}
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span className="font-mono" data-testid={`text-time-${recipe.id}`}>{timeDisplay}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Coffee className="w-4 h-4" />
            <span className="font-mono" data-testid={`text-coffee-${recipe.id}`}>{recipe.coffeeAmount}g</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Thermometer className="w-4 h-4" />
            <span className="font-mono" data-testid={`text-temp-${recipe.id}`}>{recipe.waterTemp}°C</span>
          </div>
        </div>

        <div className="pt-2 border-t">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Ratio</span>
            <span className="font-mono font-medium">{recipe.ratio}</span>
          </div>
          <div className="flex items-center justify-between text-xs mt-1">
            <span className="text-muted-foreground">Grind</span>
            <span className="font-medium text-foreground/90">{recipe.grindSize}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
