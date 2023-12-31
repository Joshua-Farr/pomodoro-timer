import styled from "styled-components";
import { useState, useRef, useContext, useEffect } from "react";
import formatToTime from "../utils/FormatToTime";
import ModeToggle from "./ModeToggle";
import Spinner from "./Spinner.tsx";
import { convertTimeToPercent } from "../utils/convertTimeToPercent.tsx";
import SettingsIcon from "@mui/icons-material/Settings";
import { playSound } from "../utils/playSound.tsx";

import { TimerContext } from "../App";
import { SettingsMenu } from "./SettingsMenu.tsx";

const Timer = () => {
  const [timerActive, setTimerActive] = useState(false);
  const [time, setTime] = useState("25:00");
  const { settings } = useContext(TimerContext);
  const { mode, setMode } = useContext(TimerContext);
  const [numDone, setNumDone] = useState(0);
  const [settingsVisible, setSettingsVisible] = useState(false);

  const interval = useRef(1);
  const seconds = useRef(0);
  const timerLength = useRef(0);

  const startTimer = (length: number) => {
    // console.log("Starting timer with: ", length);
    const startTime = new Date();

    interval.current = setInterval(() => {
      //Checking to see if timer has run out

      const updatedTime = Date.now();
      const timeDiff = updatedTime - startTime.getTime();
      const roundedTimeDiff = Math.round(timeDiff / 1000);

      console.log(roundedTimeDiff);
      seconds.current = roundedTimeDiff;
      timerLength.current = length - roundedTimeDiff / 60;
      console.log("Timer Length: ", timerLength.current);
      if (timerLength.current <= 0) {
        playSound("alarm");

        console.log("TIME OUT!");
        //Ending the interval timer
        setTime("00:00");
        console.log("Completed: ", numDone);
        if (mode === 1) {
          console.log("Mode is equal to 1!", mode);
          setNumDone((prev) => {
            return prev + 1;
          });

          console.log("Numdone has been incremented to: ", numDone);

          if (numDone % 3 === 0 && numDone != 0) {
            console.log("Switching to mode 3!");
            setMode(3);
          } // Forcing longer break after 3 regular pomodoros
          else {
            console.log("Moving to small break!");
            setMode(2);
          }
        } else if (mode === 2 || mode === 3) {
          setMode(1); // Starting a new pomodoro after taking a break!
        }
        setTimerActive(false);
        clearInterval(interval.current);
        return;
      }

      setTime(formatToTime(timerLength.current));
    }, 1000);
  };

  //Changing the state for which time has been selected
  useEffect(() => {
    setTimerActive(false);
    clearInterval(interval.current);
    if (mode === 1) {
      timerLength.current = settings.pomodoro;
      seconds.current = 0;
      setTime(`${settings.pomodoro}:00`);
    } else if (mode === 2) {
      timerLength.current = settings.short;
      seconds.current = 0;
      setTime(`${settings.short}:00`);
    } else if (mode === 3) {
      timerLength.current = settings.long;
      seconds.current = 0;
      setTime(`${settings.long}:00`);
    }
  }, [mode, settings]);

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
    playSound("click");
    setTimerActive((prev) => !prev);
  };

  const toggleMenu = () => {
    playSound("click");
    console.log("Toggling the menu!");
    setSettingsVisible((prev) => !prev);
  };

  return (
    <>
      <TimerWrapper style={{ fontFamily: `${settings.font}` }}>
        {!settingsVisible && (
          <>
            <Title>pomodoro</Title>
            <ModeToggle />
            <StyledTimer onClick={() => toggleTimer()}>
              {time}
              <Typography>
                {timerActive === true ? `Pause` : `Start`}
              </Typography>
              <Spinner
                percent={convertTimeToPercent(timerLength.current, mode)}
              />
            </StyledTimer>
            <SettingsIcon
              style={{ marginTop: "1.75em", height: "35px", width: "35px" }}
              onClick={() => {
                setSettingsVisible((prev) => !prev);
              }}
            />
          </>
        )}
        {settingsVisible && <SettingsMenu toggle={() => toggleMenu()} />}
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
  position: relative;
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
