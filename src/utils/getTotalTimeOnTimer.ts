import { Settings } from "../Interfaces";

export const getTotalTimeOnTimer = (mode: number, settings: Settings) => {
  let timerTotal = 0;
  if (mode === 1) {
    timerTotal = settings.pomodoro;
  } else if (mode === 2) {
    timerTotal = settings.short;
  } else if (mode === 3) {
    timerTotal = settings.long;
  }

  return timerTotal;
};
