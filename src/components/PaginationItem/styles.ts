import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .4rem;

  width: 2.8rem;
  height: 2.8rem;

  background-color: var(--blue-200);
  border-radius: 100%;
  padding: .8rem;
  color: var(--shape);

  transition: background-color .4s;

  &:hover,
  &.isActive {
    background-color: var(--blue-300);
  }
`
