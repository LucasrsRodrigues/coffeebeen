import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import styled from "styled-components/native";

export const HeaderHomePage = styled.View`
  height: ${hp(22)}px;
  width: ${wp(100)}px;
  background-color: ${({ theme }) => theme.colors.primary_500};
`;

export const WrapperText = styled.View`
  margin-top: ${hp(10)}px;
  margin-left: ${wp(5.61)}px;
`;