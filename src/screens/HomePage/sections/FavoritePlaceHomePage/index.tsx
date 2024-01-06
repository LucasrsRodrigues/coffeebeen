import React from 'react';

import * as S from './styles';
import { Medium, Semibold } from '@components/Typography';
import { Pressable } from 'react-native';

import LocaleIcon from '@assets/icons/location.svg';

const favoritePlaces = [
  {
    id: "0",
    image: "https://images.pexels.com/photos/1995010/pexels-photo-1995010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    label: "Coffe Bean",
    locale: "Bali, Indonesia"
  },
  {
    id: "1",
    image: "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    label: "Coffe Bean",
    locale: "Bandung, Indonesia"
  },
  {
    id: "2",
    image: "https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    label: "Coffe Bean",
    locale: "Bandung, Indonesia"
  },
];

export function FavoritePlaceHomePage() {
  return (
    <S.FavoritePlace>
      <S.SectionTitle>
        <Semibold fontSize='16'>
          Favorite Place
        </Semibold>

        <Pressable>
          <Medium fontSize='12' color='primary_500'>
            View All
          </Medium>
        </Pressable>
      </S.SectionTitle>

      <S.FavoriteSlide showsHorizontalScrollIndicator={false} horizontal>
        {
          favoritePlaces.map(item => (
            <S.LocaleItem key={item.id}>
              <S.LocaleImageItem
                source={{ uri: item.image }}
                resizeMode='cover'
              />

              <S.LocalImageGradient
                colors={['#00000000', "#00000020", "#00000050", '#000000']}
              >
                <S.LocaleInfos>
                  <Medium fontSize='18' color='white'>
                    {item.label}
                  </Medium>

                  <S.LocaleWrap>
                    <LocaleIcon />

                    <Medium fontSize='12' color='white'>
                      Bali, Indonesia
                    </Medium>
                  </S.LocaleWrap>
                </S.LocaleInfos>
              </S.LocalImageGradient>
            </S.LocaleItem>
          ))
        }
      </S.FavoriteSlide>
    </S.FavoritePlace>
  );
}