import { combineReducers } from '@reduxjs/toolkit';

import user from '../store/reducers/user.reducer';
import wallet from '../store/reducers/wallet.reducer';

const reducer = combineReducers({ user, wallet });

export default reducer;
