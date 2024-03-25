export const calculateSeconds = (time: number) => {
  return Math.round(60 * (time % 1));
};
