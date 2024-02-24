import styled from "styled-components/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const Container = styled.ScrollView`
  flex: 1;
  
  padding-top: ${hp(6)}px;
  background-color: ${({ theme }) => theme.colors.white};
`;