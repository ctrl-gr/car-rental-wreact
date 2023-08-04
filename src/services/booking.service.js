import {apiSlice} from './apiSlice'

const bookingUrl = '/bookings'

export const bookingApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getBookings: build.query({
            query: () => ({
                url: bookingUrl + '/all',
                method: 'GET'
            }),
            providesTags: ['Booking'],
        }),
        addNewBooking: build.mutation({
            query: (payload) => (
                {
                url: bookingUrl + '/save',
                method: 'POST',
                params: {licensePlate: payload.licensePlate, username: 'admin', startDate: payload.startDate, endDate: payload.endDate},
            }),
            invalidatesTags: ['Booking'],
        }),
        approveBooking: build.mutation({
            query: (payload) => {
                console.log(payload)
                const {id, ...body} = payload
                return {
                    url: bookingUrl + '/approve',
                    method: 'PUT',
                    body,
                }
            },
            invalidatesTags: ['Booking'],
        }),
        deleteBooking: build.mutation({
            query: (id) => ({
                url: bookingUrl + '/delete/${id}',
                method: 'DELETE',
                credentials: 'include',
            }),

            invalidatesTags: ['Booking'],
        }),
        overrideExisting: false,
    })
})

export const { useGetBookingsQuery,
    useAddNewBookingMutation,
    useApproveBookingMutation,
    useDeleteBookingMutation } = bookingApi