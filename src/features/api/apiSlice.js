import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api/',
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => ({
                url: '/users/all',
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer' + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjoiUk9MRV9BRE1JTiIsImlhdCI6MTY5MDg4MzI2NCwiZXhwIjoxNjkwOTAxMjY0fQ.NFG0fprssy7u2WelObspO89uCZueDIx1MuNrVL1si3U',
                }
            }),
            providesTags: ['User'],
        }),
        addNewUser: builder.mutation({
            query: (payload) => ({
                url: '/users/save',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['User'],
        }),
        updateUser: builder.mutation({
            query: (payload) => {
                console.log(payload)
                const { id, ...body } = payload
                return {
                    url: `/users/edit/${id}`,
                    method: 'PUT',
                    body,
                }
            },
            invalidatesTags: ['User'],
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/delete/${id}`,
                method: 'DELETE',
                credentials: 'include',
            }),
            invalidatesTags: ['User'],
        }),
    }),
})
export const {
    useGetUsersQuery,
    useAddNewUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = apiSlice