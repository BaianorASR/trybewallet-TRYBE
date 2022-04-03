import React from 'react';
import { RiDeleteBin7Fill, RiEditFill } from 'react-icons/ri';

import { useAppDispatch } from '../../../store/index.store';
import * as A from '../../../store/reducers';

type TableToolsProps = {
  id: string;
};

export function TableTools({ id }: TableToolsProps) {
  const dispatch = useAppDispatch();

  const deleteExpense = () => dispatch(A.actionsRemoveExpense(id));
  const editExpense = () => dispatch(A.actionsEditExpense(id));

  return (
    <>
      <RiEditFill onClick={editExpense} />
      <RiDeleteBin7Fill onClick={deleteExpense} />
    </>
  );
}
