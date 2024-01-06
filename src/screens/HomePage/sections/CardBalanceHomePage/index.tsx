import React from 'react';
import { Medium, Semibold } from '@components/Typography';

import WalletAddIcon from "@assets/icons/wallet-add.svg";
import EmptyWalletTickIcon from "@assets/icons/empty-wallet-tick.svg";
import DiscountShapeIcon from "@assets/icons/discount-shape.svg";
import ClockIcon from "@assets/icons/clock.svg";

const optionsArray = [
  {
    id: "0",
    icon: WalletAddIcon,
    label: "Top Up"
  },
  {
    id: "1",
    icon: EmptyWalletTickIcon,
    label: "Pay"
  },
  {
    id: "2",
    icon: DiscountShapeIcon,
    label: "Promo"
  },
  {
    id: "3",
    icon: ClockIcon,
    label: "History"
  },
]

import * as S from './styles';

export function CardBalanceHomePage() {
  return (
    <S.CardBalance>
      <S.CardBalanceTop>
        <Medium fontSize="14" color="secondary_400">
          Your card balance
        </Medium>
        <Semibold fontSize='16'>
          $240.00
        </Semibold>
      </S.CardBalanceTop>

      <S.CardBalanceDivider />

      <S.CardBalanceOptions>
        {optionsArray.map(({ id, label, icon: Icon }) => (
          <S.CardOptionButton key={id}>
            <Icon />
            <Medium fontSize='14' color="secondary_400">
              {label}
            </Medium>
          </S.CardOptionButton>
        ))}
      </S.CardBalanceOptions>
    </S.CardBalance>
  );
}