import React from 'react';
import { Pressable } from 'react-native';
import { Medium, Regular, Semibold } from '@components/Typography';
import StarIcon from "@assets/icons/star.svg";
// FFC73A
import * as S from './styles';

const optionArray = [
  {
    id: "0",
    image: "https://images.pexels.com/photos/2307221/pexels-photo-2307221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Coffe Bean - Resort Kuta",
    note: "4,9",
    description: "Coffee Bean - Kuta Resort is one of the best coffee cafes . . ."
  },
  {
    id: "1",
    image: "https://images.pexels.com/photos/2551794/pexels-photo-2551794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Coffe Bean - Mandalika’s",
    note: "4,8",
    description: "Coffee Bean - Mandalika’s is one of the best coffee cafes . . ."
  },
  {
    id: "2",
    image: "https://images.pexels.com/photos/13677015/pexels-photo-13677015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Coffe Bean - Street View",
    note: "4,7",
    description: "Coffee Bean - Street View is one of the best coffee cafes in . . ."
  },
]

export function PopularPlaceHomePage() {
  //  {"ht": 926, "wd": 428}

  return (
    <S.PopularPlace>
      <S.SectionTitle>
        <Semibold fontSize='16'>
          Popular Place
        </Semibold>

        <Pressable>
          <Medium fontSize='12' color='primary_500'>
            View All
          </Medium>
        </Pressable>
      </S.SectionTitle>

      <S.PopularPlaceWrap>
        {optionArray.map(item => (
          <S.PopularPlaceItem key={item.id}>
            <S.PopularPlaceItemImage
              source={{ uri: item.image }}
              resizeMode='cover'
            />

            <S.PopularPlaceItemInfo>
              <Semibold fontSize='16'>
                {item.title}
              </Semibold>

              <S.WrapperStars>
                <StarIcon fill="#FFC73A" />
                <StarIcon fill="#FFC73A" />
                <StarIcon fill="#FFC73A" />
                <StarIcon fill="#FFC73A" />
                <StarIcon fill="#E7E7E7" />

                <Medium fontSize='12'>
                  4,8
                </Medium>
              </S.WrapperStars>

              <S.LimitText>
                <Regular fontSize='12' color="secondary_300">
                  {item.description}
                </Regular>
              </S.LimitText>

            </S.PopularPlaceItemInfo>
          </S.PopularPlaceItem>
        ))}
      </S.PopularPlaceWrap>
    </S.PopularPlace>
  );
}