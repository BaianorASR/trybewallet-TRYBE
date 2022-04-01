import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  actionsEditExpense,
  actionsRemoveExpense,
} from '../../../store/reducers/wallet.reducer';
import * as S from './styles';

const Table = () => {
  const { expenses } = useSelector((state) => state.wallet);

  const dispatch = useDispatch();

  const deleteExpense = (id) => {
    dispatch(actionsRemoveExpense(id));
  };

  const editExpense = (id) => {
    dispatch(actionsEditExpense(id));
  };

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
        {expenses.map((each) => (
          <tr key={ each.id }>
            <td>{each.description}</td>
            <td>{each.tag}</td>
            <td>{each.method}</td>
            <td>{(+each.value).toFixed(2)}</td>
            <td>{each.exchangeRates[each.currency].name}</td>
            <td>{(+each.exchangeRates[each.currency].ask).toFixed(2)}</td>
            <td>{(+each.value * +each.exchangeRates[each.currency].ask).toFixed(2)}</td>
            <td>Real</td>
            <td>
              <button
                data-testid="edit-btn"
                type="button"
                onClick={ () => editExpense(each.id) }
              >
                Editar
              </button>
              <button
                data-testid="delete-btn"
                type="button"
                onClick={ () => deleteExpense(each.id) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </thead>
    </S.TableContainer>
  );
};
export default Table;
