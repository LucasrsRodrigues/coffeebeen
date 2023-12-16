import React, { useEffect, useState } from 'react';
import { GlobalWrapper } from '@components/GlobalWrapper';

import { Bold } from '@components/Typography/Bold';
import { Medium } from '@components/Typography/Medium';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Semibold } from '@components/Typography/Semibold';
import { PrimaryButton } from '@components/Buttons/PrimaryButton';

import EyeOpen from "@assets/icons/eye.svg";
import EyeClose from "@assets/icons/eye-slash.svg";

import * as S from './styles';
import { Pressable } from 'react-native';
import { SecondaryButton } from '@components/Buttons/SecondaryButton';

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
        </S.WrapperInput>
      </S.WrapperForm>

      <S.WrapperButtons>
        <SecondaryButton label='Create Account' />
        <PrimaryButton label='Sign In' />
      </S.WrapperButtons>
    </GlobalWrapper>
  );
}