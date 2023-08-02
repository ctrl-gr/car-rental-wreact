import {apiSlice} from './apiSlice'

export const userApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => ({
                url: '/users/all',
                method: 'GET'
            }),
            providesTags: ['User'],
        }),
        addNewUser: build.mutation({
            query: (payload) => ({
                url: '/users/save',
                method: 'POST',
                body: payload,
            }),
            invalidatesTags: ['User'],
        }),
        updateUser: build.mutation({
            query: (payload) => {
                console.log(payload)
                const {id, ...body} = payload
                return {
                    url: `/users/edit/${id}`,
                    method: 'PUT',
                    body,
                }
            },
            invalidatesTags: ['User'],
        }),
        deleteUser: build.mutation({
            query: (id) => ({
                url: `/users/delete/${id}`,
                method: 'DELETE',
                credentials: 'include',
            }),

            invalidatesTags: ['User'],
        }),
        overrideExisting: false,
    })
})

export const { useGetUsersQuery,
    useAddNewUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation } = userApi