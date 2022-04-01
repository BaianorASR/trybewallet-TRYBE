/* eslint-disable camelcase */
export type expenses = {
  id: number;
  value: string;
  currency: string;
  method: string;
  tag: string;
  description: string;
  exchangeRates: {
    [x: string]: {
      code: string;
      codein: string;
      name: string;
      high: string;
      low: string;
      varBid: string;
      pctChange: string;
      bid: string;
      ask: string;
      timestamp: string;
      create_date: string;
    };
  };
};
