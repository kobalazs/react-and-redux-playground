import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/user/authSlice';
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer
  },
});
