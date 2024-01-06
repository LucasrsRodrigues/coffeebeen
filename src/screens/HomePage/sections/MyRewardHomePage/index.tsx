import React from 'react';
import { Pressable } from 'react-native';
import CoffeeIcon from '@assets/icons/Coffe.svg';

import { Medium, Regular, Semibold } from '@components/Typography';

import * as S from './styles';

export function MyRewardHomePage() {
  return (
    <S.MyReward>
      <S.SectionTitle>
        <Semibold fontSize='16'>
          My Reward
        </Semibold>

        <Pressable>
          <Medium fontSize='12' color='primary_500'>
            View All
          </Medium>
        </Pressable>
      </S.SectionTitle>

      <S.MyRewardCard>
        <S.RewardIcon>
          <CoffeeIcon />
        </S.RewardIcon>

        <S.RewardTexts>
          <Semibold fontSize='14'>
            Free 1 Coffee
          </Semibold>

          <Regular fontSize='12'>
            Buy 10 Coffees and get 1 Coffee for free
          </Regular>
        </S.RewardTexts>
      </S.MyRewardCard>
    </S.MyReward>
  );
}