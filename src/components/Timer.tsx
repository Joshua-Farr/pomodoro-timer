import styled from "styled-components";
import { useState, useRef, useContext, useEffect } from "react";
import formatToTime from "../utils/FormatToTime";
import ModeToggle from "./ModeToggle";
import Spinner from "./Spinner.tsx";
import { convertTimeToPercent } from "../utils/convertTimeToPercent.tsx";
import SettingsIcon from "@mui/icons-material/Settings";

import { TimerContext } from "../App";

const Timer = () => {
  const [timerActive, setTimerActive] = useState(false);
  const [time, setTime] = useState("25:00");
  const { mode, setMode } = useContext(TimerContext);
  const [numDone, setNumDone] = useState(0);
  const [settingsVisible, setSettingsVisible] = useState(true);

  const interval = useRef(1);
  const seconds = useRef(0);
  const timerLength = useRef(0);

  const startTimer = (length: number) => {
    // console.log("Starting timer with: ", length);
    const startTime = new Date();

    interval.current = setInterval(() => {
      //Checking to see if timer has run out
      if (timerLength.current === 0) {
        console.log("TIME OUT!");
        //Ending the interval timer
        setTime("00:00");
        setTimerActive(false);
        if (mode === 1) {
          setNumDone((prev) => {
            return prev + 1;
          });
          if (numDone % 3 === 0) {
            setMode(3);
          } // Forcing longer break after 3 regular pomodoros
          else {
            setMode(2);
          }
        }
        clearInterval(interval.current);
      }

      const updatedTime = Date.now();
      const timeDiff = updatedTime - startTime.getTime();
      const roundedTimeDiff = Math.round(timeDiff / 1000);

      console.log(roundedTimeDiff);
      seconds.current = roundedTimeDiff;
      timerLength.current = length - roundedTimeDiff / 60;
      console.log("Timer Length: ", timerLength.current);

      setTime(formatToTime(timerLength.current));
    }, 1000);

    return length;
  };

  //Changing the state for which time has been selected
  useEffect(() => {
    setTimerActive(false);
    clearInterval(interval.current);
    if (mode === 1) {
      timerLength.current = 25;
      seconds.current = 0;
      setTime("25:00");
    } else if (mode === 2) {
      timerLength.current = 5;
      seconds.current = 0;
      setTime("5:00");
    } else if (mode === 3) {
      timerLength.current = 10;
      seconds.current = 0;
      setTime("10:00");
    }
  }, [mode]);

  useEffect(() => {
    if (timerActive) {
      startTimer(timerLength.current);
      console.log("Timer is active!");
    } else {
      console.log("timer is inactive!");
      clearInterval(interval.current);
    }
  }, [timerActive]);

  const toggleTimer = () => {
    setTimerActive((prev) => !prev);
  };

  return (
    <>
      <TimerWrapper>
        <Title>pomodoro</Title>
        <ModeToggle />
        <StyledTimer onClick={() => toggleTimer()}>
          {time}
          <Typography>{timerActive === true ? `Pause` : `Start`}</Typography>
          <Spinner percent={convertTimeToPercent(timerLength.current, mode)} />
        </StyledTimer>
        <SettingsIcon
          style={{ marginTop: "1.75em", height: "35px", width: "35px" }}
          onClick={() => {
            setSettingsVisible((prev) => !prev);
          }}
        />
      </TimerWrapper>
    </>
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
