import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Coffee, Droplet, Thermometer, Scale } from "lucide-react";
import { Recipe } from "@shared/schema";

interface RecipeHeaderProps {
  recipe: Recipe;
  multiplier: number;
  onBack: () => void;
  onMultiplierChange: (multiplier: number) => void;
}

export default function RecipeHeader({ 
  recipe, 
  multiplier, 
  onBack,
  onMultiplierChange 
}: RecipeHeaderProps) {
  const scaledCoffee = Math.round(recipe.coffeeAmount * multiplier);
  const scaledWater = Math.round(recipe.waterAmount * multiplier);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          data-testid="button-back"
          className="shrink-0"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1 min-w-0">
          <h1 className="text-xl font-bold leading-tight truncate" data-testid="text-recipe-title">{recipe.name}</h1>
          <p className="text-sm text-muted-foreground truncate">{recipe.expert}</p>
        </div>
        <Badge variant="secondary" className="shrink-0" data-testid="badge-method">{recipe.method}</Badge>
      </div>

      <Card className="p-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
              <Coffee className="w-3.5 h-3.5" />
              <span className="text-xs">Coffee</span>
            </div>
            <p className="font-mono text-xl font-semibold" data-testid="text-coffee-amount">
              {scaledCoffee}g
            </p>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
              <Droplet className="w-3.5 h-3.5" />
              <span className="text-xs">Water</span>
            </div>
            <p className="font-mono text-xl font-semibold" data-testid="text-water-amount">
              {scaledWater}g
            </p>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
              <Scale className="w-3.5 h-3.5" />
              <span className="text-xs">Ratio</span>
            </div>
            <p className="font-mono text-xl font-semibold">
              {recipe.ratio}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
              <Thermometer className="w-3.5 h-3.5" />
              <span className="text-xs">Temp</span>
            </div>
            <p className="font-mono text-xl font-semibold" data-testid="text-water-temp">
              {recipe.waterTemp}°C
            </p>
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0 flex-1">
              <p className="text-xs text-muted-foreground mb-1">Grind Size</p>
              <p className="text-sm font-medium leading-tight">{recipe.grindSize}</p>
            </div>

            <div className="shrink-0">
              <p className="text-xs text-muted-foreground mb-1.5 text-right">Serving</p>
              <div className="flex gap-2">
                {[1, 2, 3].map((mult) => (
                  <Button
                    key={mult}
                    variant={multiplier === mult ? "default" : "outline"}
                    size="sm"
                    onClick={() => onMultiplierChange(mult)}
                    data-testid={`button-multiplier-${mult}`}
                    className="w-10 h-9"
                  >
                    {mult}x
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
