import styled from "styled-components/native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


export const CardBalance = styled.View`
  position: relative;
  width: ${wp(87.20)}px;
  height: ${hp(16.20)}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${wp(6.40)}px;
  top: -${hp(5.94)}px;
  padding: ${hp(2.16)}px ${wp(5.33)}px;
  justify-content: space-between;
`;

export const CardBalanceTop = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardBalanceDivider = styled.View`
  height: 1px;
  border-width: 1px;
  border-style: dashed;
  border-color: ${({ theme }) => theme.colors.primary_300};
`;

export const CardBalanceOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CardOptionButton = styled.View`
  align-items: center;
  gap: 9px;
`;
