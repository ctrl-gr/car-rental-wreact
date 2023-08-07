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
        getCarById: build.query({
            query: (payload) => {
                const id = payload
                console.log(payload)
                return {
                    url: carUrl + '/get-car-by-id',
                    method: 'GET',
                    params: {id}
                }
            },
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
                return {
                    url: carUrl + '/edit',
                    method: 'PUT',
                    body: payload,
                }
            },
            invalidatesTags: ['Car'],
        }),
        getAvailableCars: build.query({
            query: (payload) => {
                const {startDate, endDate} = payload
                return {
                    url: carUrl + '/get-available-cars',
                    method: 'GET',
                    params: {startDate, endDate},
                }
            },
            providesTags: ['Car'],
        }),
        deleteCar: build.mutation({
            query: (id) => ({
                url: carUrl + '/delete',
                method: 'DELETE',
                params: {id},
            }),

            invalidatesTags: ['Car'],
        }),
        overrideExisting: false,
    })
})

export const { useGetCarsQuery,
    useGetCarByIdQuery,
    useGetAvailableCarsQuery,
    useAddNewCarMutation,
    useUpdateCarMutation,
    useDeleteCarMutation } = carApi