import styled from "styled-components";

const StyledSpinner = styled.div`
  // background: conic-gradient(#f7706f, 3.6deg, #ededed, 0deg);
  width: 250px;
  height: 250px;
  // border: 15px solid #f7706f;
  // border-radius: 50%;
  fill: none;
  stroke: #f7706f;
  stroke-width: 20px;
`;

type SpinnerProps = {
  percent: number;
};

const Spinner = (percent: SpinnerProps) => {
  return <StyledSpinner></StyledSpinner>;
};

export default Spinner;
