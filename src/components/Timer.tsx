import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

interface TimerProps {
  time: string;
}

const Timer: React.FC<TimerProps> = () => {
  const [timerActive, setTimerActive] = useState(false);

  const seconds = useRef(0);

  const [time, setTime] = useState("00:00");

  const toggleTimer = () => {
    timerActive === true
      ? console.log("timer started!")
      : console.log("timer stopped!");
    setTimerActive((prev) => !prev);
  };

  useEffect(() => {
    startTimer(25);
  }, [time]);

  const startTimer = (length: number) => {
    const startTime = new Date();

    console.log("Start Time: ", startTime);

    const interval = setInterval(() => {
      const updatedTime = new Date();
      const timeDiff = updatedTime.getTime() - startTime.getTime();
      const roundedTimeDiff = Math.round(timeDiff / 1000);

      //Checking to see if timer has reached 25min
      if (roundedTimeDiff === 1500) {
        //Ending the interval timer
        clearInterval(interval);
      }

      seconds.current = roundedTimeDiff;
      // console.log("Seconds since start: ", roundedTimeDiff);
      setTime(formatToTime(seconds.current));
    }, 1000);

    return length;
  };

  function formatToTime(number: number) {
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

  return (
    <StyledTimer onClick={() => toggleTimer()}>
      {time}
      <Typography>Start</Typography>
    </StyledTimer>
  );
};

export default Timer;

const StyledTimer = styled.div`
  border-radius: 50%;
  height: 400px;
  width: 400px;
  background-color: #151932;
  font-family: "Archivo Narrow", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 6rem;
  font-weight: 600;
  user-select: none;
  box-shadow: 0 0 60px 1px #7fff;

  &:hover {
    cursor: pointer;
  }
`;

const Typography = styled.div`
  margin-top: 1rem;
  font-size: 1.125rem;
  text-align: center;
  letter-spacing: 1.15em;
  text-transform: uppercase;
`;
