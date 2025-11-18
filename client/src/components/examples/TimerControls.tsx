import TimerControls from "../TimerControls";

export default function TimerControlsExample() {
  return (
    <TimerControls 
      isRunning={false}
      isComplete={false}
      onStart={() => console.log('Start clicked')}
      onPause={() => console.log('Pause clicked')}
      onReset={() => console.log('Reset clicked')}
    />
  );
}
