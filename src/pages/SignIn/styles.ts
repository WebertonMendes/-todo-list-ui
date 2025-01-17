import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 30vw;
  background: var(--shape);
  border-radius: 1rem;
  border: 1px solid var(--gray-200);
  padding: 4rem 5rem;
  margin-top: 2rem;

  h2 {
    color: var(--text-tile);
    font-weight: normal;
  }

  @media (max-width: 1080px) {
    width: 50vw;
  }

  @media (max-width: 720px) {
    padding: 4rem 3rem;
    width: 85vw;
  }
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;

  .error-msg {
    font-size: 0.8rem;
    color: var(--red-300);
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  background-color: var(--background);
  color: var(--text-body);
  border: 1px solid var(--gray-200);
  border-radius: 0.2rem;
  padding: 0.2rem 1rem;

  input {
    height: 2.4rem;
    width: 100%;
    background-color: var(--background);
    color: var(--text-body);
  }

  .viewPassword:hover {
    cursor: pointer;
  }

  &.input-error {
    border: 1px solid var(--red-300);
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 3rem;
  padding: 0.8rem;
  border-radius: 0.2rem;
  position: relative;

  background-color: var(--blue-300);
  color: var(--shape);

  transition: background-color 0.4s;

  &.isLoading {
    opacity: .7;

    div {
      position: absolute;
      right: .2rem;
      top: 0;
    }

    &:hover {
      cursor: not-allowed;
    }
  }

  &:not(.isLoading) {
    &:hover {
      background-color: var(--blue-500);
    }
  }
`;

export const Link = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.8rem;

  a {
    color: var(--blue-800);
    transition: 0.4s;
  }

  a:hover {
    color: var(--blue-300);
  }
`;
