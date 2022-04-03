import React, { useMemo } from 'react';
import { TableColumn } from 'react-data-table-component';

import { useAppSelector } from '../../store/index.store';
import { TableTools } from '../components';

interface DataRow {
  id: string;
  description: string;
  tag: string;
  method: string;
  value: string;
  currency: string;
  ask: string;
  askToLocale: string;
  localeCurrency: string;
}

export const useExpenses = () => {
  const { expenses } = useAppSelector(state => state.wallet);

  const columns: TableColumn<DataRow>[] = [
    {
      name: 'Descrição',
      sortable: true,
      grow: 1,
      selector: row => row.description,
      style: {
        fontWeight: '600',
      },
    },
    {
      name: 'Tag',
      sortable: true,
      selector: row => row.tag,
    },
    {
      name: 'Método de pagamento',
      sortable: true,
      grow: 0,
      selector: row => row.method,
    },
    {
      name: 'Valor',
      sortable: true,
      grow: 1,
      right: true,
      selector: row => row.value,
    },
    {
      name: 'Moeda',
      sortable: true,
      selector: row => row.currency,
    },
    {
      name: 'Câmbio utilizado',
      sortable: true,
      grow: 0,
      right: true,
      selector: row => row.ask,
    },
    {
      name: 'Valor convertido',
      sortable: true,
      grow: 1,
      right: true,
      selector: row => row.askToLocale,
    },
    {
      name: 'Moeda de conversão',
      sortable: false,
      grow: 0,
      right: true,
      selector: row => row.localeCurrency,
    },
    {
      name: 'Editar/Excluir',
      button: true,
      cell: row => <TableTools id={row.id} />,
      style: {
        display: 'flex',
        justifyContent: 'space-evenly',
      },
    },
  ];

  const data: DataRow[] = useMemo(
    () =>
      expenses.map(({ id, currency, method, value, description, tag, exchangeRates }) => {
        const exchange = exchangeRates[currency]; // eslint-disable-line security/detect-object-injection
        return {
          id,
          description,
          tag,
          method,
          value: (+value).toLocaleString(currency, { style: 'currency', currency }),
          currency: exchange.name.split('/')[0],
          ask: (+exchange.ask).toLocaleString(currency, { style: 'currency', currency }),
          askToLocale: (+value * +exchange.ask).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }),
          localeCurrency: 'Real',
        };
      }),
    [expenses],
  );

  return { columns, data };
};
