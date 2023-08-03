import {apiSlice} from './apiSlice'

const carUrl = '/cars'

export const carApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getCars: build.query({
            query: () => ({
                url: carUrl + '/all',
                method: 'GET'
            }),
            providesTags: ['Car'],
        }),
        addNewCar: build.mutation({
            query: (payload) => ({
                url: carUrl + '/save',
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
                    url: carUrl + '/edit',
                    method: 'PUT',
                    body,
                }
            },
            invalidatesTags: ['Car'],
        }),
        getAvailableCars: build.query({
            query: (payload) => {
                console.log(payload)
                const {id, ...params} = payload
                return {
                    url: carUrl + '/get-available-cars',
                    method: 'GET',
                    params,
                }
            },
            providesTags: ['Car'],
        }),
        deleteCar: build.mutation({
            query: (id) => ({
                url: carUrl + '/delete/${id}',
                method: 'DELETE',
                credentials: 'include',
            }),

            invalidatesTags: ['Car'],
        }),
        overrideExisting: false,
    })
})

export const { useGetCarsQuery,
    useGetAvailableCarsQuery,
    useAddNewCarMutation,
    useUpdateCarMutation,
    useDeleteCarMutation } = carApi