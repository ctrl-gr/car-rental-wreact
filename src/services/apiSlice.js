import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api',
        headers: {
            'Authorization': 'Bearer' + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjoiUk9MRV9BRE1JTiIsImlhdCI6MTY5MDk4MDQzOSwiZXhwIjoxNjkwOTk4NDM5fQ.NPWXglAhVBm6FAyMpBtYXS6PwqybWDlyv3J88rntoJ8',
            'Content-type': 'application/json; charset=UTF-8'
        }
    }),
    endpoints: () => ({}),
})


