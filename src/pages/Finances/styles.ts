import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1rem;

  h1 {
    margin-bottom: 1rem;
    color: var(--text-title);
  }
`;

export const UnderConstruction = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .construction-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .4rem;
  width: 30rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 2.2rem;
  padding: 0 0.8rem;
  border-radius: .4rem;
  border: 1px solid var(--gray-100);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .4rem;

  background-color: var(--blue-300);
  height: 2rem;
  border-radius: .4rem;
  padding: .5rem;
  color: var(--shape);

  transition: background-color .4s;

  &:hover {
    background-color: var(--blue-500);
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-top: 2rem;
`;

export const Partner = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;

  width: 30rem;
  padding: 1rem 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-body);
  border-radius: 0.4rem;

  background-color: var(--shape);

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  span {
    &:hover {
      cursor: pointer;
    }
  }

  &:hover {
    background-color: var(--blue-50);
    cursor: pointer;
  }
`;
