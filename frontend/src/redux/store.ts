import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './services/authService';
import authSlice from './slices/authSlice';

import { setupListeners } from '@reduxjs/toolkit/dist/query';


export const store = configureStore({
    reducer: {
        [ authApi.reducerPath ]: authApi.reducer,
        auth: authSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware
        )
});

setupListeners(store.dispatch);