import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api',
        headers: {
            'Authorization': 'Bearer' + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjoiUk9MRV9BRE1JTiIsImlhdCI6MTY5MDk2MTkxNSwiZXhwIjoxNjkwOTc5OTE1fQ.jotEw5ex1goMHuSeVbCH47RjOoSL6zu9kfjYcUiTNzY',
            'Content-type': 'application/json; charset=UTF-8'
        }
    }),
    endpoints: () => ({}),
})


