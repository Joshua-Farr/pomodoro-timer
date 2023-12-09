export default function formatToTime(number: number, length: number) {
  // console.log("Now formatting: ", number, ". With length of: ", length);

  let minutes = Math.trunc(length) - Math.floor(number / 60);

  let seconds = Math.round(60 * (length % 1));

  let formattedMinutes = "";
  let formattedSeconds = "";

  formattedMinutes = `${minutes}`;

  if (seconds === 60) {
    formattedSeconds = `00`;
  } else {
    formattedSeconds = `${seconds}`;
  }
  return `${formattedMinutes}:${formattedSeconds}`;
}
