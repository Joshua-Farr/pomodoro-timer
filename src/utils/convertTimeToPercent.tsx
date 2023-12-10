import { useContext } from "react";
import { TimerContext } from "../App";

export const convertTimeToPercent = (
  totalTime: number, // In minutes
  mode: number
): number => {
  const { settings } = useContext(TimerContext);

  let timerTotal = 0;
  if (mode === 1) {
    timerTotal = settings.pomodoro;
  } else if (mode === 2) {
    timerTotal = settings.short;
  } else {
    timerTotal = 10;
  }

  return 100 - (totalTime / timerTotal) * 100;
};
