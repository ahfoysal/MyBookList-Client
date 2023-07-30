import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import userSlice from './features/user/userSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const store = configureStore({
  reducer: {
    // cart: cartReducer,
    // product: productReducer,
    user: userSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
setupListeners(store.dispatch);
