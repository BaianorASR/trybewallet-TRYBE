import React from 'react';
import DataTable from 'react-data-table-component';

import { useExpenses } from '../../shared/hooks/useExpenses';
import useTheme from '../../shared/hooks/useTheme';
import { darkTable, lightTable } from './styles';

export default function Table() {
  const { columns, data } = useExpenses();
  const { theme } = useTheme();

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  return (
    <DataTable
      title="Minha Carteira"
      columns={columns}
      data={data}
      theme={theme.name === 'dark' ? darkTable : lightTable}
      paginationComponentOptions={paginationComponentOptions}
      pagination
      highlightOnHover
      dense
      fixedHeader
      fixedHeaderScrollHeight="400px"
    />
  );
}
