import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

export const FavoritePlace = styled.View`
  width: ${wp(100)}px;
  /* padding: 0 ${wp(5.33)}px; */
  margin-left: ${wp(5.33)}px;
`;

export const FavoriteSlide = styled.ScrollView`
  margin-top: 20px;
`;

export const SectionTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LocaleItem = styled.TouchableOpacity`
  position: relative;
  /* width: ${wp(42.06)}px; */
  width: ${wp(50)}px;
  /* height: ${hp(23.76)}px; */
  height: ${hp(30)}px;
  border-radius: ${wp(2.8)}px;
  overflow: hidden;
  margin-right: ${wp(4.67)}px;
`;

export const LocaleImageItem = styled.Image`
  flex: 1;
`;

export const LocalImageGradient = styled(LinearGradient)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

export const LocaleInfos = styled.View`
  position: absolute;
  bottom: ${hp(1.73)}px;
  margin-left: ${wp(3.74)}px;
`;

export const LocaleWrap = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${hp(0.647948)}px;
`;

export const PopularPlace = styled.View`
  width: ${wp(100)}px;
  padding: 0 ${wp(5.33)}px;
  margin: 20px 0;
`;