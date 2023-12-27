import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const WrapperLogo = styled.View`
  width: ${wp(100)}px;
  flex-direction: row;
  justify-content: center;
  margin-top: ${hp(10)}px;
`;

export const WrapperForm = styled.View`
  justify-content: center;
  width: ${wp(100)}px;
  padding: ${hp(7.04)}px ${wp(6.11)}px;
`;

export const WrapperInput = styled.View`
  margin-bottom: ${hp(2.82)}px;
`;

export const WrapperInputIcon = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.secondary_100};
  padding: 0 ${wp(6.11)}px;
  border-radius: ${wp(4.07)}px;
  width: ${wp(86.93)}px;
  height: ${hp(4.80)}px;
  margin-top: ${hp(1.41)}px;

  flex-direction: row;
  align-items: center;
`;

export const WrapperButtons = styled.View`
  justify-content: center;
  align-items: center;
  width: ${wp(100)}px;
  padding: ${hp(7.04)}px ${wp(6.11)}px;
  gap: 20px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

// Button
export const Button = styled.TouchableOpacity`
  width: ${wp(83.21)}px;
  height: ${hp(6.34)}px;
  border: 1px solid ${({ theme }) => theme.colors.secondary_100};
  border-radius: ${wp(4.07)}px;

  justify-content: center;
  align-items: center;
`;

export const Separator = styled.View`
  width: 96px;
  height: 1px;
  background: #B8B8B8;
`;

export const WrapperSeparator = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const WrapperSocialButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${hp(3)}px ${wp(6.11)}px;
`;

export const SocialButton = styled.TouchableOpacity`
  width: 72px;
  height: 56px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.secondary_100};
  align-items: center;
  justify-content: center;
`;

export const WrapperPlusButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${hp(2)}px;
`;

export const CheckBox = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.secondary_200};
  margin-right: 5px;
`;

export const RememberButton = styled.View`
  flex-direction: row;
  align-items: center;
`;