import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import styled from "styled-components/native";

export const MyReward = styled.View`
  width: ${wp(100)}px;
  padding: 0 ${wp(5.33)}px;
`;

export const SectionTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;


export const MyRewardCard = styled.View`
  background: ${({ theme }) => theme.colors.white};
  flex-direction: row;
  border-radius: 16px;
  padding: ${hp(2.16)}px ${wp(5.33)}px;
  margin-top: 20px;
`;

export const RewardIcon = styled.View`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.primary_200};
  border-radius: 48px;
  align-items: center;
  justify-content: center;
`;

export const RewardTexts = styled.View`
  margin-left: 10px;
`;