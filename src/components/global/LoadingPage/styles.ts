import styled from "styled-components";

export const Container = styled.main`
  background: var(--blue-50);
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  animation-name: fadeIn;
  animation-duration: 2s;

  @keyframes fadeIn {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }
`;
