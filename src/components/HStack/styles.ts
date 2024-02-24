import styled, { css } from "styled-components/native";

interface IContainerProps {
  space?: string;
}

export const Container = styled.View<IContainerProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  
  ${({ space }) => space && css`
    gap: ${space}px;
  `};
`;