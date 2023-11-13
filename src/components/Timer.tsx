import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import formatToTime from "../FormatToTime";

interface TimerProps {
  time: string;
}

const Timer: React.FC<TimerProps> = () => {
  const [timerActive, setTimerActive] = useState(false);
  const [time, setTime] = useState("00:00");
  const seconds = useRef(0);

  const toggleTimer = () => {
    setTimerActive((prev) => !prev);
  };

  useEffect(() => {
    startTimer(25);
  }, []);

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
      setTime(formatToTime(seconds.current));
    }, 1000);

    return length;
  };

  return (
    <StyledTimer onClick={() => toggleTimer()}>
      {time}
      <Typography>{timerActive === true ? `Start` : `Pause`}</Typography>
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
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.15em;
  text-transform: uppercase;
  padding-left: 1.15em;
`;
