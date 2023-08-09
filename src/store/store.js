import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../auth/auth.service';
import {apiSlice} from "../services/apiSlice";


const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(apiSlice.middleware),
});

export default store;
