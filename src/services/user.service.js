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
        getUserByUsername: build.query({
            query: (payload) => {
                const username = payload
                console.log(payload)
                return {
                    url: userUrl + '/get-user-by-username',
                    method: 'GET',
                    params: {username}
                }
            },
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
            query: ({username, formData}) => {
                console.log({username, formData})
                return {
                    url: userUrl + '/edit',
                    method: 'PUT',
                    params: {username},
                    body: formData
                }
            },
            invalidatesTags: ['User'],
        }),
        deleteUser: build.mutation({
            query: (id) => (
                console.log(id),
                {
                url: userUrl + '/delete',
                method: 'DELETE',
                params: {id}
            }),

            invalidatesTags: ['User'],
        }),
        overrideExisting: false,
    })
})

export const { useGetUsersQuery,
    useGetUserByUsernameQuery,
    useAddNewUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation } = userApi