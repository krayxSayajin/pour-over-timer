import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Droplet, Hourglass } from "lucide-react";
import { RecipeStep } from "@shared/schema";

interface StepListProps {
  steps: RecipeStep[];
  currentStepIndex: number;
}

export default function StepList({ steps, currentStepIndex }: StepListProps) {
  return (
    <div className="space-y-3" data-testid="step-list">
      {steps.map((step, index) => {
        const isActive = index === currentStepIndex;
        const isComplete = index < currentStepIndex;
        const isPending = index > currentStepIndex;
        const isPourStep = step.waterAmount > 0;

        return (
          <Card
            key={step.stepNumber}
            className={`p-4 transition-all ${
              isActive ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''
            } ${isPending ? 'opacity-50' : ''}`}
            data-testid={`card-step-${step.stepNumber}`}
          >
            <div className="flex items-start gap-3">
              <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                isComplete ? 'bg-primary text-primary-foreground' :
                isActive ? 'bg-primary/10 text-primary ring-2 ring-primary' :
                'bg-muted text-muted-foreground'
              }`}>
                {isComplete ? <Check className="w-4 h-4" /> : step.stepNumber}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex-1 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-semibold text-sm leading-tight" data-testid={`text-step-instruction-${step.stepNumber}`}>
                        {step.instruction}
                      </h4>
                      {isActive && (
                        <Badge variant="secondary" className="h-6 px-2">
                          {isPourStep ? "Pour now" : "Rest now"}
                        </Badge>
                      )}
                      <Badge variant="outline" className="h-6 px-2">
                        {isPourStep ? "Pour" : "Rest"}
                      </Badge>
                    </div>
                    {step.technique && (
                      <p className="text-xs text-muted-foreground">
                        {step.technique}
                      </p>
                    )}
                  </div>
                  <Badge variant="outline" className="shrink-0 font-mono text-xs">
                    {Math.floor(step.duration / 60)}:{(step.duration % 60).toString().padStart(2, '0')}
                  </Badge>
                </div>

                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  {isPourStep ? (
                    <div className="flex items-center gap-2">
                      <Droplet className="w-3.5 h-3.5 text-primary" />
                      <span className="font-mono font-medium" data-testid={`text-step-water-${step.stepNumber}`}>
                        {step.waterAmount}g water
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Hourglass className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="font-medium">Rest / drawdown</span>
                    </div>
                  )}
                  {isPending && (
                    <Badge variant="outline" className="h-5 px-2">
                      {isPourStep ? "Get ready to pour" : "Hold for rest"}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
