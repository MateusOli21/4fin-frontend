import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: '4finapp',
      storage,
      whitelist: ['auth', 'user', 'categories'],
    },
    reducers
  );

  return persistedReducer;
};
