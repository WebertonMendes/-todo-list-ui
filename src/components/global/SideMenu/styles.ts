import styled from "styled-components";

export const Container = styled.aside`
  position: absolute;
  left: 0;
  top: 0;

  background-color: var(--blue-900);
  min-height: 100vh;
  padding-top: 1rem;
  width: 4rem;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1rem 0;
  color: var(--shape);

  &:hover {
    cursor: pointer;
    background-color: var(--blue-800);
  }

  &.active {
    background-color: var(--blue-800);
  }
`;

