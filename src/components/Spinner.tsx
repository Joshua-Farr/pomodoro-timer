import styled from "styled-components";

const StyledSpinner = styled.div`
  background-color: #f7706f;
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

type SpinnerProps = {
  percent: number;
};

const Spinner = (percent: SpinnerProps) => {
  return <StyledSpinner></StyledSpinner>;
};

export default Spinner;
