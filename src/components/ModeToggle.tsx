import styled from "styled-components";
import { useState, useContext } from "react";

const ModeToggle = () => {
  const [timerState, setTimerState] = useState(1);

  const selectedStyles = {
    color: "#151932",
    backgroundColor: " #f87070",
    borderRadius: "25px",
    margin: "-1.25rem 0",
    marginLeft: `${timerState === 1 ? "-1em" : "none"}`,
    marginRight: `${timerState === 3 ? "-1em" : "none"}`,
    padding: "0.45em 1rem",
  };

  return (
    <StyledToggle>
      <span
        onClick={() => setTimerState(1)}
        style={timerState === 1 ? selectedStyles : {}}
      >
        pomodoro
      </span>
      <span
        onClick={() => setTimerState(2)}
        style={timerState === 2 ? selectedStyles : {}}
      >
        short break
      </span>
      <span
        onClick={() => setTimerState(3)}
        style={timerState === 3 ? selectedStyles : {}}
      >
        long break
      </span>
    </StyledToggle>
  );
};

export default ModeToggle;

const StyledToggle = styled.div`
  color: white;
  background-color: #151932;
  width: 350px;
  height: 50px;
  margin-bottom: 2em;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  letter-spacing: 2px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledCategory = styled.span`
  color: #151932;
  background-color: #f87070;
  border-radius: 25px;
  margin: -1.25rem 0;
  margin-left: -1em;
  padding: 0.45em 1rem;
`;
