import { calculatePercentage } from "./calculatePercentage";
import { Settings } from "../Interfaces";
import { getTotalTimeOnTimer } from "./getTotalTimeOnTimer";

export const convertTimeToPercent = (
  timeRemaining: number, // In minutes
  mode: number,
  settings: Settings
): number => {
  const startingTime = getTotalTimeOnTimer(mode, settings);

  return calculatePercentage(timeRemaining, startingTime);
};
