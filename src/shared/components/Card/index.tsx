import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/index.store';
import * as A from '../../../store/reducers';

const Card: FC = () => {
  const { expenses } = useAppSelector((state) => state.wallet);
  const dispatch = useAppDispatch();

  const deleteExpense = (id: number) => {
    dispatch(A.actionsRemoveExpense(id));
  };

  const editExpense = (id: number) => {
    dispatch(A.actionsEditExpense(id));
  };

  return (
    <>
      {expenses.map((each) => (
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
            <button type="button" onClick={() => editExpense(each.id)}>
              Editar
            </button>
            <button type="button" onClick={() => deleteExpense(each.id)}>
              Excluir
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Card;
