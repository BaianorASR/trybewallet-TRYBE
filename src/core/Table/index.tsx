import React, { memo } from 'react';
import DataTable from 'react-data-table-component';

import { useExpenses, useTheme } from '../../shared/hooks';
import { darkTable, lightTable } from './styles';

const Table = () => {
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
};

export default memo(Table);
