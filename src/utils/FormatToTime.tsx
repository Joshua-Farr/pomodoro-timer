export default function formatToTime(minutes: number, seconds: number) {
  let formattedMinutes = `${minutes}`;
  let formattedSeconds = "";

  if (seconds <= 9) {
    formattedSeconds = `0${seconds}`;
  } else if (seconds === 60) {
    formattedSeconds = `00`;
  } else {
    formattedSeconds = `${seconds}`;
  }

  return `${formattedMinutes}:${formattedSeconds}`;
}
