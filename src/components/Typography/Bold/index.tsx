import React, { ReactNode } from 'react';
import { TextProps } from 'react-native';

import * as S from './styles';

interface IBoldProps extends TextProps {
  fontSize?: "12" | "14" | "16" | "18" | "20" | "24" | "32" | "36" | "40" | "72";
  color?: string;
  children: string;
}

export function Bold({ children, fontSize = "16", color = "secondary_500", ...rest }: IBoldProps) {
  return (
    <S.MyText fontSize={fontSize} color={color}  {...rest}>
      {children}
    </S.MyText>
  );
}