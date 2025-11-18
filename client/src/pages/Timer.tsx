import { useEffect, useMemo, useRef, useState } from "react";
import { Recipe, RecipeStep } from "@shared/schema";
import { scaleRecipe } from "@/lib/recipes";
import RecipeHeader from "@/components/RecipeHeader";
import TimerDisplay from "@/components/TimerDisplay";
import StepList from "@/components/StepList";
import TimerControls from "@/components/TimerControls";
import ThemeToggle from "@/components/ThemeToggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Droplet, Hourglass } from "lucide-react";

interface TimerProps {
  recipe: Recipe;
  onBack: () => void;
}

export default function Timer({ recipe, onBack }: TimerProps) {
  const [multiplier, setMultiplier] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  const scaledRecipe = useMemo(() => scaleRecipe(recipe, multiplier), [recipe, multiplier]);
  const currentStep = scaledRecipe.steps[currentStepIndex];
  const isComplete = currentTime >= scaledRecipe.totalTime;

  // Calculate step time
  const getStepStartTime = (stepIndex: number) => {
    let time = 0;
    for (let i = 0; i < stepIndex; i++) {
      time += scaledRecipe.steps[i].duration;
    }
    return time;
  };

  const stepStartTime = getStepStartTime(currentStepIndex);
  const stepElapsedTime = currentTime - stepStartTime;
  const stepRemainingTime = currentStep ? currentStep.duration - stepElapsedTime : 0;

  type CueType = "pour" | "rest" | "complete";

  const ensureAudioContext = () => {
    if (typeof AudioContext === "undefined") return null;
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }
    if (audioContextRef.current.state === "suspended") {
      void audioContextRef.current.resume();
    }
    return audioContextRef.current;
  };

  const triggerHaptics = (type: CueType) => {
    if (typeof navigator === "undefined" || !("vibrate" in navigator)) return;
    const pattern =
      type === "pour" ? [35, 50, 35] : type === "complete" ? [60, 60, 60] : [40];
    navigator.vibrate(pattern);
  };

  const playBeep = (type: CueType) => {
    const ctx = ensureAudioContext();
    if (!ctx) return;

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const now = ctx.currentTime;

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    const baseFrequency = type === "pour" ? 920 : type === "complete" ? 720 : 540;
    oscillator.frequency.setValueAtTime(baseFrequency, now);
    if (type === "pour") {
      oscillator.frequency.linearRampToValueAtTime(baseFrequency + 180, now + 0.18);
    }
    oscillator.type = "sine";

    gainNode.gain.setValueAtTime(0.32, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + (type === "complete" ? 0.35 : 0.25));

    oscillator.start(now);
    oscillator.stop(now + (type === "complete" ? 0.35 : 0.25));

    triggerHaptics(type);
  };

  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = window.setInterval(() => {
      setCurrentTime((prev) => {
        const newTime = prev + 1;

        let accumulatedTime = 0;
        for (let i = 0; i < scaledRecipe.steps.length; i++) {
          accumulatedTime += scaledRecipe.steps[i].duration;
          if (newTime === accumulatedTime && i < scaledRecipe.steps.length - 1) {
            setCurrentStepIndex(i + 1);
            const upcomingStep = scaledRecipe.steps[i + 1];
            playBeep(upcomingStep?.waterAmount ? "pour" : "rest");
            break;
          }
        }

        if (newTime >= scaledRecipe.totalTime) {
          setIsRunning(false);
          playBeep("complete");
          return scaledRecipe.totalTime;
        }

        return newTime;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, scaledRecipe]);

  const handleStart = () => {
    ensureAudioContext();
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentTime(0);
    setCurrentStepIndex(0);
  };

  const handleMultiplierChange = (newMultiplier: number) => {
    setMultiplier(newMultiplier);
    handleReset();
  };

  const remainingTime = scaledRecipe.totalTime - currentTime;
  const cumulativeWater = scaledRecipe.steps
    .slice(0, currentStepIndex + 1)
    .reduce((total, step) => total + (step.waterAmount || 0), 0);
  const nextStep = scaledRecipe.steps[currentStepIndex + 1];
  const isPourStep = !!currentStep?.waterAmount;
  const actionLabel = isPourStep
    ? `Pour ${currentStep.waterAmount}g now`
    : "Rest / drawdown";
  const nextActionLabel = nextStep
    ? nextStep.waterAmount
      ? `${nextStep.waterAmount}g pour next`
      : "Rest step coming up"
    : "Finishing brew";

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-3 flex items-center justify-end">
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-4 max-w-2xl">
        <RecipeHeader
          recipe={recipe}
          multiplier={multiplier}
          onBack={onBack}
          onMultiplierChange={handleMultiplierChange}
        />

        <div className="mt-6 space-y-6">
          <TimerDisplay
            currentTime={remainingTime}
            totalTime={scaledRecipe.totalTime}
            stepTime={stepRemainingTime}
            stepDuration={currentStep?.duration || 0}
            isRunning={isRunning}
            currentStepName={currentStep?.instruction}
            stepNumber={currentStepIndex + 1}
            totalSteps={scaledRecipe.steps.length}
          />

          {currentStep && (
            <div className="rounded-lg border bg-muted/40 p-4 flex items-start gap-3" data-testid="call-to-action">
              <div className="mt-0.5 rounded-full bg-primary/10 p-2 text-primary">
                {isPourStep ? <Droplet className="h-5 w-5" /> : <Hourglass className="h-5 w-5" />}
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-semibold leading-tight">{actionLabel}</p>
                <p className="text-xs text-muted-foreground">
                  {isPourStep
                    ? `Target: about ${cumulativeWater}g total after this pour.`
                    : `Let it rest. ${nextActionLabel}.`}
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] text-muted-foreground font-medium">
                  <Badge variant="secondary" className="h-6">Current step</Badge>
                  <Badge variant="outline" className="h-6">
                    {nextActionLabel}
                  </Badge>
                </div>
              </div>
            </div>
          )}

          {isComplete && (
            <div className="text-center p-6 bg-primary/10 rounded-lg border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-2">Brew Complete! ☕</h3>
              <p className="text-muted-foreground">Enjoy your perfectly brewed coffee</p>
            </div>
          )}

          <Tabs defaultValue="steps" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="steps" data-testid="tab-steps">Steps</TabsTrigger>
              <TabsTrigger value="recipe" data-testid="tab-recipe">Recipe</TabsTrigger>
            </TabsList>
            <TabsContent value="steps" className="mt-4">
              <div className="mb-3">
                <p className="text-sm text-muted-foreground">
                  Step {currentStepIndex + 1} of {scaledRecipe.steps.length}
                </p>
              </div>
              <StepList
                steps={scaledRecipe.steps}
                currentStepIndex={currentStepIndex}
              />
            </TabsContent>
            <TabsContent value="recipe" className="mt-4 space-y-3">
              <div className="text-sm">
                <h3 className="font-semibold mb-2">About this recipe</h3>
                <p className="text-muted-foreground">{recipe.description}</p>
              </div>
              <div className="text-sm space-y-2">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Method</span>
                  <span className="font-medium">{recipe.method}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Expert</span>
                  <span className="font-medium">{recipe.expert}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Grind Size</span>
                  <span className="font-medium">{recipe.grindSize}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Ratio</span>
                  <span className="font-mono font-medium">{recipe.ratio}</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t">
        <div className="container mx-auto max-w-2xl">
          <TimerControls
            isRunning={isRunning}
            isComplete={isComplete}
            onStart={handleStart}
            onPause={handlePause}
            onReset={handleReset}
          />
        </div>
      </div>
    </div>
  );
}
