import React, { ReactNode } from 'react';

import * as S from './styles';
import { ViewProps } from 'react-native';


interface IHStackProps extends ViewProps {
  children: ReactNode;
  space?: string;
}

export function HStack({ children, space = "0" }: IHStackProps) {
  return (
    <S.Container space={space}>
      {children}
    </S.Container>
  );
}