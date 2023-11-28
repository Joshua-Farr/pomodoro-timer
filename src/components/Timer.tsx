import styled from "styled-components";
import { useState, useRef, useContext, useEffect } from "react";
import formatToTime from "../utils/FormatToTime";
import ModeToggle from "./ModeToggle";
import Spinner from "./Spinner.tsx";
import { convertTimeToPercent } from "../utils/convertTimeToPercent.tsx";

import { TimerContext } from "../App";

const Timer = () => {
  const [timerActive, setTimerActive] = useState(false);
  const [time, setTime] = useState("25:00");
  const { mode } = useContext(TimerContext);
  const [pomodoroTimerLength, setPomodoroTimerLength] = useState(0);

  const seconds = useRef(0);
  let elapsedTime = 0;

  const startTimer = (length: number) => {
    const startTime = new Date();

    const interval = setInterval(() => {
      const updatedTime = Date.now();
      const timeDiff = updatedTime - startTime.getTime();
      elapsedTime = timeDiff;
      const roundedTimeDiff = Math.round(timeDiff / 1000);

      console.log("Checking for pause!", timerActive);
      if (timerActive === false) {
        console.log("PAUSING!");
        setTime(formatToTime(elapsedTime, length));
        clearInterval(interval);
        return;
      }

      //Checking to see if timer has reached 25min
      if (roundedTimeDiff === length * 60) {
        console.log("Rounded Time: ", roundedTimeDiff, " Length: ", length);
        console.log("TIME OUT!");

        //Ending the interval timer
        clearInterval(interval);
        setTime("00:00");
        setTimerActive(false);
      }

      seconds.current = roundedTimeDiff;
      setTime(formatToTime(seconds.current, length));
    }, 1000);

    return length;
  };

  useEffect(() => {
    console.log("State changed!!!!!", timerActive);

    let timerLength = 0;
    if (mode === 1) {
      timerLength = 25;
      setTime("25:00");
    } else if (mode === 2) {
      timerLength = 5;
      setTime("5:00");
    } else {
      timerLength = 10;
      setTime("10:00");
    }
    if (timerActive) {
      startTimer(timerLength);
      setPomodoroTimerLength(timerLength);
    }
  }, [timerActive, mode]);

  const toggleTimer = () => {
    setTimerActive((prev) => !prev);
  };

  return (
    <TimerWrapper>
      <Title>pomodoro</Title>
      <ModeToggle />
      <StyledTimer onClick={() => toggleTimer()}>
        {time}
        <Typography>{timerActive === true ? `Pause` : `Start`}</Typography>
        <Spinner
          percent={convertTimeToPercent(seconds.current, pomodoroTimerLength)}
        />
      </StyledTimer>
    </TimerWrapper>
  );
};

export default Timer;

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
  margin-bottom: 1em;
  font-size: 3rem;
  letter-spacing: 2px;
`;

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
  box-shadow: 0 0 60px 1px #a512;

  &:hover {
    cursor: pointer;
  }
`;

const Typography = styled.div`
  margin-top: 1rem;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.15em;
  text-transform: uppercase;
  padding-left: 1.15em;
`;
