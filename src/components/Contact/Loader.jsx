import styled, { keyframes } from "styled-components";

const spin = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 0.2em solid rgba(0, 0, 0, 0.1);
  border-top: 0.2em solid #767676;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  animation: ${spin} 0.6s linear infinite;
  display: block;
  margin: 0 auto;
  text-align: center;
`;

export default Loader;