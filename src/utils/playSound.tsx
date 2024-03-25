export const playSound = (filePath: string) => {
  const sound = new Audio(`${filePath}`);
  sound.play();
};
