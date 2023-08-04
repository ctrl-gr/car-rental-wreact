import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api',
        headers: {
            'Authorization': 'Bearer' + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjoiUk9MRV9BRE1JTiIsImlhdCI6MTY5MTE1ODU0OCwiZXhwIjoxNjkxMTc2NTQ4fQ.EKwk_jRkvAYEblyCFCyYvcDw0w7-TVFHqGCRmVHcCJ8',
            'Content-type': 'application/json; charset=UTF-8'
        }
    }),
    endpoints: () => ({}),
})


