import React from 'react';

import * as S from './styles';
import { Bold } from '@components/Typography';

export function HeaderHomePage() {
  return (
    <S.HeaderHomePage>
      <S.WrapperText>
        <Bold fontSize='20' color='white'>
          Coffee Beans
        </Bold>
      </S.WrapperText>
    </S.HeaderHomePage>
  );
}