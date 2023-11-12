import styled from "styled-components";

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
`;

interface TimerProps {
  time: string;
}

const Timer: React.FC<TimerProps> = ({ time }) => {
  return (
    <StyledTimer>
      {/* <Typography> */}
      {time}
      {/* </Typography> */}
    </StyledTimer>
  );
};

export default Timer;
