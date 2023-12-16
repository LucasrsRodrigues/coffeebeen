import React from 'react';
import { TextProps } from 'react-native';

import * as S from './styles';

interface ISemiboldProps extends TextProps {
  fontSize?: "12" | "14" | "16" | "18" | "20" | "24" | "32" | "36" | "40" | "72";
  color?: string;
  children: string;
}

export function Semibold({ children, fontSize = "16", color = "secondary_500", ...rest }: ISemiboldProps) {
  return (
    <S.MyText fontSize={fontSize} color={color}  {...rest}>
      {children}
    </S.MyText>
  );
}