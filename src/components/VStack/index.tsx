import React, { ReactNode } from 'react';

import * as S from './styles';
import { ViewProps } from 'react-native';


interface IVStackProps extends ViewProps {
  children: ReactNode;
  space?: string;
}

export function VStack({ children, space = "0" }: IVStackProps) {
  return (
    <S.Container space={space}>
      {children}
    </S.Container>
  );
}