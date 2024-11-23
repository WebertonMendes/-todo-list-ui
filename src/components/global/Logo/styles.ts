import styled from "styled-components";

interface StylesProps {
  widthImage: number;
  orientation: string;
}

export const Container = styled.div<StylesProps>`
  display: flex;
  align-items: center;

  ${({ orientation }) =>
    orientation === "landscape"
    ? `flex-direction: row;`
    : `flex-direction: column;`
  }

  ${({ orientation }) =>
    orientation === "landscape"
    && `gap: 0.8rem;`
  }

  h1 {
    font-family: "Dosis", sans-serif;
    font-weight: 600;
    color: var(--blue-300);
  }

  img {
    width: ${({ widthImage }) => widthImage}px;
    border-radius: 0.8rem;
  }
`;
