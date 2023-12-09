export default function formatToTime(number: number, length: number) {
  // console.log("Now formatting: ", number, ". With length of: ", length);

  let minutes = Math.ceil(length) - Math.floor(number / 60);

  let seconds = Math.round(60 * (length % 1));

  let formattedMinutes = "";
  let formattedSeconds = "";

  if (minutes <= 9) {
    formattedMinutes = `0${minutes}`;
  } else {
    formattedMinutes = `${minutes}`;
  }

  if (seconds === 60) {
    formattedSeconds = `00`;
  } else {
    formattedSeconds = `${seconds}`;
  }

  // if (seconds <= 9) {
  //   formattedSeconds = `0${seconds}`;
  // } else if (seconds === 60) {
  //   formattedSeconds = `00`;
  // } else {
  //   formattedSeconds = `${seconds}`;
  // }

  return `${formattedMinutes}:${formattedSeconds}`;
}
