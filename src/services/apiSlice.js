import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api',
        headers: {
            'Authorization': 'Bearer' + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjoiUk9MRV9BRE1JTiIsImlhdCI6MTY5MTA3MDIzNCwiZXhwIjoxNjkxMDg4MjM0fQ.Daoz_bf7Zb2lACXyTn-2lSZDIgygHKRuZgfaWBfo5ag',
            'Content-type': 'application/json; charset=UTF-8'
        }
    }),
    endpoints: () => ({}),
})


