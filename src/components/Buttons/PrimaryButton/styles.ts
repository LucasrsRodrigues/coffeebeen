import styled, { css } from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const Container = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.primary_500};
  border-radius: 15px;
  padding: 5px 16px;
  flex-direction: row;

  width: ${wp(83.21)}px;
  height: ${hp(6.34)}px;

  justify-content: center;
  align-items: center;

  ${(props) => props.disabled && css`
    opacity: 0.4;
  `};
`;

// export const Button = styled.TouchableOpacity`
//   border: 1px solid ${({ theme }) => theme.colors.secondary_100};
//   border-radius: ${wp(4.07)}px;
// `;