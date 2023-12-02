export default function formatToTime(number: number, length: number) {
  // let time = "";

  console.log("Now formatting: ", number, ". With length of: ", length);

  let minutes = Math.ceil(length) - 1 - Math.floor(number / 60);
  let seconds = 59 - (number % 60);

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
