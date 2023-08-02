import {apiSlice} from './apiSlice'

export const carApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getCars: build.query({
            query: () => ({
                url: '/cars/all',
                method: 'GET'
            }),
            providesTags: ['Car'],
        }),
        addNewCar: build.mutation({
            query: (payload) => ({
                url: '/cars/save',
                method: 'POST',
                body: payload,
            }),
            invalidatesTags: ['Car'],
        }),
        updateCar: build.mutation({
            query: (payload) => {
                console.log(payload)
                const {id, ...body} = payload
                return {
                    url: `/cars/edit`,
                    method: 'PUT',
                    body,
                }
            },
            invalidatesTags: ['Car'],
        }),
        deleteCar: build.mutation({
            query: (id) => ({
                url: `/cars/delete/${id}`,
                method: 'DELETE',
                credentials: 'include',
            }),

            invalidatesTags: ['Car'],
        }),
        overrideExisting: false,
    })
})

export const { useGetCarsQuery,
    useAddNewCarMutation,
    useUpdateCarMutation,
    useDeleteCarMutation } = carApi