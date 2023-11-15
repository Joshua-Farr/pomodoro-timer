import styled from "styled-components";

const StyledSpinner = styled.div`
  background-color: #f7706f;
`;

const Spinner = (percent: number) => {
  return <StyledSpinner></StyledSpinner>;
};

export default Spinner;
