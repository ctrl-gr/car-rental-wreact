import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api/',
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'authenticate',
                method: 'POST',
                body: credentials,
            }),
        }),
        register: builder.mutation({
            query: ({ data }) => ({
                url: "register",
                method: "POST",
                body: { data },
            }),
        }),
    }),
});

export const {useLoginMutation, useRegisterMutation} = authApi

