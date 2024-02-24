import React from 'react';

import { Regular, Semibold } from '@components/Typography';
import { VStack } from '@components/VStack';
import { StatusBar } from 'expo-status-bar';

import * as S from './styles';
import { Input } from '@components/Input';
import { HorizontalPlaceList } from '@components/HorizontalPlaceList';
import { VerticalPlaceList } from '@components/VerticalPlaceList';
import { HStack } from '@components/HStack';

export function Caffee() {
  return (
    <S.Container>
      <StatusBar style='dark' />

      <VStack space="10" paddingX={20}>
        <VStack space="5">
          <Semibold fontSize='24'>
            Find your best cafe
          </Semibold>

          <Regular color="secondary_300" fontSize='12'>
            Enjoy the love of the best coffee taste
          </Regular>
        </VStack>

        <Input
          placeholder='Search Caffee'
        />
      </VStack>

      <HorizontalPlaceList />

      <VerticalPlaceList />
    </S.Container>
  );
}