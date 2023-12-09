export const convertTimeToPercent = (
  totalTime: number, // In minutes
  mode: number
): number => {
  let timerTotal = 0;
  if (mode === 1) {
    timerTotal = 25;
  } else if (mode === 2) {
    timerTotal = 5;
  } else {
    timerTotal = 10;
  }

  return 100 - (totalTime / timerTotal) * 100;
};
