import { useContext } from 'react';

import { ThemeContext } from '../context/theme';

export const useTheme = () => {
  return useContext(ThemeContext);
};
