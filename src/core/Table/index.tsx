import React, { FC, memo } from 'react';

import Card from '../../shared/components/Card';
import * as S from './styles';

const Table: FC = () => {
  return (
    <S.TableContainer>
      <thead>
        <tr>
          <th scope="col">Descrição</th>
          <th scope="col">Tag</th>
          <th scope="col">Método de pagamento</th>
          <th scope="col">Valor</th>
          <th scope="col">Moeda</th>
          <th scope="col">Câmbio utilizado</th>
          <th scope="col">Valor convertido</th>
          <th scope="col">Moeda de conversão</th>
          <th scope="col">Editar/Excluir</th>
        </tr>
        <Card />
      </thead>
    </S.TableContainer>
  );
};

export default memo(Table);
