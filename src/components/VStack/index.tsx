import React, { ReactNode } from 'react';

import * as S from './styles';
import { ViewProps } from 'react-native';


interface IVStackProps extends ViewProps {
  children: ReactNode;
  space?: string;
  paddingY?: number;
  paddingX?: number;
}

export function VStack({ children, space = "0", paddingX = 0, paddingY = 0, ...rest }: IVStackProps) {
  return (
    <S.Container space={space} paddingX={paddingX} paddingY={paddingY} {...rest}>
      {children}
    </S.Container>
  );
}