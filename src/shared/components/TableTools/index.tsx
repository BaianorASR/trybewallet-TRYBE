import React, { FC } from 'react';
import { RiDeleteBin7Fill, RiEditFill } from 'react-icons/ri';

import { useAppDispatch } from '../../../store/index.store';
import * as A from '../../../store/reducers';

type TableToolsProps = {
  id: string;
};

export const TableTools: FC<TableToolsProps> = ({ id }: TableToolsProps) => {
  const dispatch = useAppDispatch();

  const deleteExpense = () => dispatch(A.actionRemoveExpense(id));
  const editExpense = () => dispatch(A.actionEditExpense(id));

  return (
    <>
      <RiEditFill onClick={editExpense} />
      <RiDeleteBin7Fill onClick={deleteExpense} />
    </>
  );
};
