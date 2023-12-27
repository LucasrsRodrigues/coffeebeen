import styled, { css } from "styled-components/native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

interface IContainerProps {
  space?: string;
}

export const Container = styled.View<IContainerProps>`
  width: ${wp(100)}px;
  flex-direction: row;
  align-items: center;
  
  ${({ space }) => space && css`
    gap: ${space}px;
  `};
`;