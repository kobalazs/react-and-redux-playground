import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from '../features/user/authSlice';
import counterReducer from '../features/counter/counterSlice';
import taskReducer from '../features/task/taskSlice';

const reducers = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  task: taskReducer,
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
