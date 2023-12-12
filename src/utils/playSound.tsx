export const playSound = (type: string) => {
  const alarm = new Audio(`src/assets/alarm-clock-short-6402.mp3`);
  const click = new Audio(`src/assets/click_effect-86995.mp3`);
  if (type === "alarm") {
    alarm.play();
    setTimeout(function () {
      alarm.pause();
    }, 8000);
  } else if (type === "click") {
    click.currentTime = 0.155;
    click.play();
  }
};
