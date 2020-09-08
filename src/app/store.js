import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';

import authReducer from '../features/user/authSlice';
import counterReducer from '../features/counter/counterSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  auth: authReducer,
  counter: counterReducer
});

const persistConfig = {
  key: 'root',
  storage
};

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
const persistor = persistStore(store);

export default store;
export { persistor };
