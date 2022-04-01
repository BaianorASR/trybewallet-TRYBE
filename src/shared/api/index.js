export const API = () =>
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((res) => res.json())
    .then((data) => {
      delete data.USDT;
      return data;
    });

export const nada = 'nada';
