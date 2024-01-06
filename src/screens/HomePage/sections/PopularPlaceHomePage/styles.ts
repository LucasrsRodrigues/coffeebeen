import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const PopularPlace = styled.View`
  width: ${wp(100)}px;
  padding: 0 ${wp(5.33)}px;
  margin: 20px 0;
`;

export const SectionTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PopularPlaceWrap = styled.View`
  margin-top: 20px;
`;


// Item
export const PopularPlaceItem = styled.TouchableOpacity`
  width: ${wp(90)}px;
  height: ${hp(15.12)}px;
  background: ${({ theme }) => theme.colors.white};
  margin-bottom: ${hp(1.73)}px;
  border-radius: ${wp(1.73)}px;

  flex-direction: row;

  padding: ${hp(1.73)}px;

`;

export const PopularPlaceItemImage = styled.Image`
  width: ${wp(19.63)}px;
  height: ${hp(11.66)}px;
  border-radius: ${wp(1.73)}px;
`;

export const PopularPlaceItemInfo = styled.View`
  flex: 1;
  justify-content: space-between;
  margin-left: ${wp(2.80)}px;
`;

export const WrapperStars = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const LimitText = styled.View`
  width: ${wp(100)}px;
  max-width: ${wp(43.69)}px;
`
