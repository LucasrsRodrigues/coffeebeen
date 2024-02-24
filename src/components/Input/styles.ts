import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const Container = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.secondary_100};
  padding: 0 ${wp(6.11)}px;
  border-radius: ${wp(4.07)}px;
  height: ${hp(4.80)}px;
  margin-top: ${hp(1.41)}px;
  flex-direction: row;
  align-items: center;
`;

export const RNInput = styled.TextInput`
  font-family: ${({ theme }) => theme.fonts.medium};
`;