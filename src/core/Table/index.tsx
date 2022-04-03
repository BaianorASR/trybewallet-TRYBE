import React, { FC, memo } from 'react';

import Card from '../../shared/components/Card';
import * as S from './styles';

const Table: FC = () => {
  return (
    <S.TableContainer>
      <S.TableHead>
        <S.TableRow>
          <S.TableTh>Descrição</S.TableTh>
          <S.TableTh>Tag</S.TableTh>
          <S.TableTh>Método de pagamento</S.TableTh>
          <S.TableTh>Valor</S.TableTh>
          <S.TableTh>Moeda</S.TableTh>
          <S.TableTh>Câmbio utilizado</S.TableTh>
          <S.TableTh>Valor convertido</S.TableTh>
          <S.TableTh>Moeda de conversão</S.TableTh>
          <S.TableTh>Editar/Excluir</S.TableTh>
        </S.TableRow>
      </S.TableHead>
      <Card />
    </S.TableContainer>
  );
};

export default memo(Table);
