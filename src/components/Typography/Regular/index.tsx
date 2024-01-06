import React, { ReactNode } from 'react';
import { TextProps } from 'react-native';

import * as S from './styles';

interface IRegularProps extends TextProps {
  fontSize?: "12" | "14" | "16" | "18" | "20" | "24" | "32" | "36" | "40" | "72";
  color?: string;
  children: string;
}

export function Regular({ children, fontSize = "16", color = "secondary_500", ...rest }: IRegularProps) {
  return (
    <S.MyText fontSize={fontSize} color={color}  {...rest}>
      {children}
    </S.MyText>
  );
}