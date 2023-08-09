import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import authHeader from '../auth/auth-header'

const authHeaderToSend = authHeader()

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api',
        headers: {
            'Authorization': authHeaderToSend.Authorization,
            'Content-type': 'application/json; charset=UTF-8'
        }
    }),
    endpoints: () => ({}),
})


