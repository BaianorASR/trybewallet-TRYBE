import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  actionsEditExpense,
  actionsRemoveExpense,
} from '../../../store/reducers/wallet.reducer';

const Card = () => {
  const { expenses } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();

  const deleteExpense = (id) => {
    dispatch(actionsRemoveExpense(id));
  };

  const editExpense = (id) => {
    dispatch(actionsEditExpense(id));
  };

  return expenses.map((each) => (
    <tr key={each.id}>
      <td>{each.description}</td>
      <td>{each.tag}</td>
      <td>{each.method}</td>
      <td>{(+each.value).toFixed(2)}</td>
      <td>{each.exchangeRates[each.currency].name}</td>
      <td>{(+each.exchangeRates[each.currency].ask).toFixed(2)}</td>
      <td>{(+each.value * +each.exchangeRates[each.currency].ask).toFixed(2)}</td>
      <td>Real</td>
      <td>
        <button data-testid="edit-btn" type="button" onClick={() => editExpense(each.id)}>
          Editar
        </button>
        <button
          data-testid="delete-btn"
          type="button"
          onClick={() => deleteExpense(each.id)}
        >
          Excluir
        </button>
      </td>
    </tr>
  ));
};

export default Card;
