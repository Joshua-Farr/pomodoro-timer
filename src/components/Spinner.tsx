import styled from "styled-components";

const StyledSpinner = styled.div`
  background-color: #f7706f;
`;

const Spinner = (percent: Number) => {
  return <StyledSpinner></StyledSpinner>;
};

export default Spinner;
