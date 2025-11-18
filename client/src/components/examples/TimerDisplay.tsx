import TimerDisplay from "../TimerDisplay";

export default function TimerDisplayExample() {
  return (
    <TimerDisplay 
      currentTime={125}
      totalTime={210}
      stepTime={25}
      stepDuration={45}
      isRunning={true}
      currentStepName="Pour to 150g total in a slow spiral"
      stepNumber={2}
      totalSteps={5}
    />
  );
}
