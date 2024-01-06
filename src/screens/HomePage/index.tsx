import React from 'react';
import { Pressable } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Medium, Semibold } from '@components/Typography';
import { HeaderHomePage, CardBalanceHomePage, MyRewardHomePage, FavoritePlaceHomePage, PopularPlaceHomePage } from './sections';

import * as S from './styles';

export function HomePage() {
  //  {"ht": 926, "wd": 428}

  return (
    <S.Container showsVerticalScrollIndicator={false}>
      <StatusBar style='light' />

      <HeaderHomePage />

      <S.BodyContainer>
        <CardBalanceHomePage />
        <MyRewardHomePage />

        <FavoritePlaceHomePage />

        <PopularPlaceHomePage />
      </S.BodyContainer>
    </S.Container>
  );
}