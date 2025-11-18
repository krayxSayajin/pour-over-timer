import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

interface TimerDisplayProps {
  currentTime: number;
  totalTime: number;
  stepTime: number;
  stepDuration: number;
  isRunning: boolean;
  currentStepName?: string;
  stepNumber?: number;
  totalSteps?: number;
}

export default function TimerDisplay({ 
  currentTime, 
  totalTime,
  stepTime,
  stepDuration,
  isRunning,
  currentStepName,
  stepNumber,
  totalSteps
}: TimerDisplayProps) {
  const totalMinutes = Math.floor(currentTime / 60);
  const totalSeconds = currentTime % 60;
  const stepMinutes = Math.floor(stepTime / 60);
  const stepSeconds = stepTime % 60;
  const totalProgress = ((totalTime - currentTime) / totalTime) * 100;
  const stepProgress = stepDuration > 0 ? ((stepDuration - stepTime) / stepDuration) * 100 : 0;

  return (
    <div className="space-y-6" data-testid="timer-display">
      {currentStepName && (
        <Card className="p-4 bg-primary/5 border-primary/20">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">
              Step {stepNumber} of {totalSteps}
            </p>
            <h3 className="text-base font-semibold leading-tight" data-testid="text-current-step">
              {currentStepName}
            </h3>
          </div>
        </Card>
      )}

      <div className="relative">
        <div className="flex items-center justify-center">
          <div className={`relative w-72 h-72 flex items-center justify-center ${isRunning ? 'animate-pulse-subtle' : ''}`}>
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="2"
              />
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="4"
                strokeDasharray={`${2 * Math.PI * 42}`}
                strokeDashoffset={`${2 * Math.PI * 42 * (1 - stepProgress / 100)}`}
                strokeLinecap="round"
                className="transition-all duration-300 ease-linear"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">
                Step Timer
              </div>
              <div className="font-mono text-7xl font-bold tabular-nums leading-none" data-testid="text-step-timer">
                {stepMinutes}:{stepSeconds.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-muted-foreground mt-3">
                {isRunning ? 'Brewing...' : 'Ready'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3 px-2">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-muted-foreground uppercase tracking-wide">Current Step</span>
            <span className="text-xs font-mono font-semibold">
              {stepMinutes}:{stepSeconds.toString().padStart(2, '0')} / {Math.floor(stepDuration / 60)}:{(stepDuration % 60).toString().padStart(2, '0')}
            </span>
          </div>
          <Progress value={stepProgress} className="h-2" data-testid="progress-step" />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-muted-foreground uppercase tracking-wide">Total Brew</span>
            <span className="text-xs font-mono font-semibold" data-testid="text-total-timer">
              {Math.floor((totalTime - currentTime) / 60)}:{((totalTime - currentTime) % 60).toString().padStart(2, '0')} / {Math.floor(totalTime / 60)}:{(totalTime % 60).toString().padStart(2, '0')}
            </span>
          </div>
          <Progress value={totalProgress} className="h-2" data-testid="progress-timer" />
        </div>
      </div>
    </div>
  );
}
