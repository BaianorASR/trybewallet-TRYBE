import { createTheme } from 'react-data-table-component';

createTheme(
  'lightTable',
  {
    text: {
      primary: '#F5F5F5',
      secondary: '#F7F5F2',
    },
    background: {
      default: '#1A535C',
    },
    divider: {
      default: '#174a52',
    },
    highlightOnHover: {
      default: '#174a52',
      text: '#F5F5F5',
    },
    button: {
      default: '#35BCB3',
      focus: '#2fa9a1',
      hover: '#2fa9a1',
    },
  },
  'light',
);

createTheme(
  'darkTable',
  {
    text: {
      primary: '#222831',
      secondary: '#0D292E',
    },
    background: {
      default: '#35BCB3',
    },
    divider: {
      default: '#2fa9a1',
    },
    highlightOnHover: {
      default: '#2fa9a1',
      text: '#222831',
    },
    button: {
      default: '#1A535C',
      focus: '#174a52',
      hover: '#174a52',
      disabled: '#2fa9a1',
    },
  },
  'dark',
);

const darkTable = 'darkTable';
const lightTable = 'lightTable';

export { lightTable, darkTable };
