import React, { ReactNode } from 'react';

import * as S from './styles';

interface IGlobalWrapperProps {
  children: ReactNode;
}

export function GlobalWrapper({ children }: IGlobalWrapperProps) {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
}