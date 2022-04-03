import React, { FC, memo } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/index.store';
import * as A from '../../../store/reducers';
import * as S from './styles';

const Card: FC = () => {
  const { expenses } = useAppSelector(state => state.wallet);
  const dispatch = useAppDispatch();

  const deleteExpense = (id: number) => {
    dispatch(A.actionsRemoveExpense(id));
  };

  const editExpense = (id: number) => {
    dispatch(A.actionsEditExpense(id));
  };

  // const LocaleCoin = (value: number) => {
  //   return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  // };

  return (
    <S.TableBody>
      {expenses?.map(each => (
        <S.TableRow key={each.id}>
          <td>{each.description}</td>
          <td>{each.tag}</td>
          <td>{each.method}</td>
          <td>
            {Number(each.value).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </td>
          <td>{each.exchangeRates[each.currency].name.split('/')[0]}</td>
          <td>
            {Number(each.exchangeRates[each.currency].ask).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </td>
          <td>
            {(
              Number(each.value) * Number(each.exchangeRates[each.currency].ask)
            ).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </td>
          <td>Real</td>
          <td>
            <button type="button" onClick={() => editExpense(each.id)}>
              Editar
            </button>
            <button type="button" onClick={() => deleteExpense(each.id)}>
              Excluir
            </button>
          </td>
        </S.TableRow>
      ))}
    </S.TableBody>
  );
};

export default memo(Card);
