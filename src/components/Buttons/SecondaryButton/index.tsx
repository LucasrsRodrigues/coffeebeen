import React, { ReactNode } from 'react';

import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';
import { Semibold } from '@components/Typography/Semibold';

interface IPrimaryButtonProps extends TouchableOpacityProps {
  label: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export function SecondaryButton({ label, iconLeft, ...rest }: IPrimaryButtonProps) {
  return (
    <S.Container {...rest}>
      {/* icon left */}
      {/* label */}
      <Semibold>
        {label}
      </Semibold>
      {/* icon right */}
      {/* onlyIcon */}
    </S.Container>
  );
}