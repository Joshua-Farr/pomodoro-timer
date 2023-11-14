export default function formatToTime(number: number) {
  // let time = "";

  let minutes = Math.floor(number / 60);
  let seconds = number % 60;

  let formattedMinutes = "";
  let formattedSeconds = "";

  if (minutes <= 9) {
    formattedMinutes = `0${minutes}`;
  } else {
    formattedMinutes = `${minutes}`;
  }

  if (seconds <= 9) {
    formattedSeconds = `0${seconds}`;
  } else {
    formattedSeconds = `${seconds}`;
  }

  return `${formattedMinutes}:${formattedSeconds}`;
}
