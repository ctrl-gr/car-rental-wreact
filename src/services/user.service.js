import {apiSlice} from './apiSlice'

const userUrl = '/users'

export const userApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => ({
                url: userUrl + '/all',
                method: 'GET'
            }),
            providesTags: ['User'],
        }),
        addNewUser: build.mutation({
            query: (payload) => ({
                url: userUrl + '/save',
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
                    url: userUrl + '/edit/${id}',
                    method: 'PUT',
                    body,
                }
            },
            invalidatesTags: ['User'],
        }),
        deleteUser: build.mutation({
            query: (id) => ({
                url: userUrl + '/delete/${id}',
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