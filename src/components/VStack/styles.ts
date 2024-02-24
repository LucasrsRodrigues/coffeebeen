import styled, { css } from "styled-components/native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

interface IContainerProps {
  space?: string;
  paddingX?: number;
  paddingY?: number;
}

export const Container = styled.View<IContainerProps>`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  
  ${({ space }) => space && css`
    gap: ${space}px;
  `};

  ${({ paddingX }) => paddingX && css`
    padding: 0 ${paddingX}px;
  `};

  ${({ paddingY }) => paddingY && css`
    padding: ${paddingY}px 0;
  `};

`;