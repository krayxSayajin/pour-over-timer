import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";

interface TimerControlsProps {
  isRunning: boolean;
  isComplete: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export default function TimerControls({
  isRunning,
  isComplete,
  onStart,
  onPause,
  onReset
}: TimerControlsProps) {
  return (
    <div className="flex gap-3 w-full" data-testid="timer-controls">
      {!isComplete ? (
        <>
          {!isRunning ? (
            <Button
              size="lg"
              className="flex-1 h-14 text-lg font-semibold"
              onClick={onStart}
              data-testid="button-start"
            >
              <Play className="w-6 h-6 mr-2" />
              Start
            </Button>
          ) : (
            <Button
              size="lg"
              variant="secondary"
              className="flex-1 h-14 text-lg font-semibold"
              onClick={onPause}
              data-testid="button-pause"
            >
              <Pause className="w-6 h-6 mr-2" />
              Pause
            </Button>
          )}
          <Button
            size="lg"
            variant="outline"
            onClick={onReset}
            data-testid="button-reset"
            className="h-14 w-14 p-0"
          >
            <RotateCcw className="w-6 h-6" />
          </Button>
        </>
      ) : (
        <Button
          size="lg"
          className="flex-1 h-14 text-lg font-semibold"
          onClick={onReset}
          data-testid="button-brew-again"
        >
          <RotateCcw className="w-6 h-6 mr-2" />
          Brew Again
        </Button>
      )}
    </div>
  );
}
