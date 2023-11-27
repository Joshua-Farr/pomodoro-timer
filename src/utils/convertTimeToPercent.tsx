export const convertTimeToPercent = (
  currentTime: number, //In seconds
  totalTime: number // In minutes
): number => {
  return Math.round((currentTime / (totalTime * 60)) * 100);
};
