import React, { useState } from 'react';
import { Pressable } from 'react-native';

import { GlobalWrapper } from '@components/GlobalWrapper';
import { Bold, Medium } from '@components/Typography';
import { PrimaryButton, SecondaryButton } from '@components/Buttons';

import EyeOpen from "@assets/icons/eye.svg";
import EyeClose from "@assets/icons/eye-slash.svg";

import FacebookIcon from "@assets/icons/social/facebook.svg";
import AppleIcon from "@assets/icons/social/apple.svg";
import GoogleIcon from "@assets/icons/social/google.svg";

import * as S from './styles';

//  {"hp": 852, "wp": 393}
export function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <GlobalWrapper>
      <S.WrapperLogo>
        <Bold fontSize='32'>Coffee</Bold>
        <Bold fontSize='32' color='primary_500'>Been</Bold>
      </S.WrapperLogo>

      <S.WrapperForm>
        <S.WrapperInput>
          <Medium fontSize='14' color="secondary_300" >Email</Medium>

          <S.WrapperInputIcon>
            <S.Input
              autoCapitalize='none'
              autoCorrect={false}
            />
          </S.WrapperInputIcon>
        </S.WrapperInput>

        <S.WrapperInput>
          <Medium fontSize='14' color="secondary_300" >Password</Medium>

          <S.WrapperInputIcon>
            <S.Input secureTextEntry={showPassword} />

            <Pressable onPress={() => setShowPassword(prev => !prev)}>
              {showPassword ? (
                <EyeClose stroke="#131313" />
              ) : (
                <EyeOpen stroke="#131313" />
              )}
            </Pressable>
          </S.WrapperInputIcon>

          <S.WrapperPlusButton>
            <S.RememberButton>
              <S.CheckBox>

              </S.CheckBox>
              <Medium fontSize='14' color="secondary_200">Remember me</Medium>
            </S.RememberButton>

            <Pressable>
              <Medium fontSize='14' color="secondary_200">Forgot password</Medium>
            </Pressable>
          </S.WrapperPlusButton>
        </S.WrapperInput>
      </S.WrapperForm>

      <S.WrapperButtons>
        <SecondaryButton label='Create Account' />
        <PrimaryButton label='Sign In' />
      </S.WrapperButtons>

      <S.WrapperSeparator>
        <S.Separator />
        <Medium fontSize='14' color="secondary_300">
          or continue with
        </Medium>
        <S.Separator />
      </S.WrapperSeparator>

      <S.WrapperSocialButtons>
        <S.SocialButton>
          <GoogleIcon />
        </S.SocialButton>

        <S.SocialButton>
          <AppleIcon />
        </S.SocialButton>

        <S.SocialButton>
          <FacebookIcon />
        </S.SocialButton>
      </S.WrapperSocialButtons>
    </GlobalWrapper>
  );
}