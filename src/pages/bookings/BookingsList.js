import React, {useState} from 'react'
import {
    bookingApi
} from "../../services/booking.service";
import Table from "../../components/table/core/Table";
import {useNavigate} from "react-router-dom";

const BookingsList = () => {
    const navigate = useNavigate()
    const {
        useGetBookingsQuery,
        useApproveBookingMutation,
        useDeleteBookingMutation
    } = bookingApi;

    const [deleteBooking] = useDeleteBookingMutation()

    const [approveBooking, {isLoading: isUpdating}] = useApproveBookingMutation()


    const {
        data: bookings,
        isLoading: isGetLoading,
        isSuccess: isGetSuccess,
        isError: isGetError,
        error: getError
    } = useGetBookingsQuery({refetchOnMountOrArgChange: true})


    let bookingsContent
    const bookingsListHeaders = ['startDate', 'endDate', 'licensePlate', 'username', 'isApproved', 'azioni']
    const bookingsListActions = [
        {
            type: 'approva',
            actionOnTop: false,
            cssClass: ''
        },
        {
            type: 'rifiuta',
            actionOnTop: false,
            cssClass: ''
        },
        {
            type: 'nuovo',
            actionOnTop: true,
            cssClass: ''
        }
    ]

    function actionEmitter(type, valueToEmit) {
        switch (type) {
            case 'approva':
                console.log('before approving', valueToEmit.isApproved)
                const approvedBooking = { username: valueToEmit.username, licensePlate: valueToEmit.licensePlate, startDate: valueToEmit.startDate, endDate: valueToEmit.endDate, isApproved: true}
                console.log(approvedBooking.isApproved)
                return approveBooking(approvedBooking)
            case 'rifiuta':
                console.log('before approving', valueToEmit.isApproved)
                const rejectedBooking = { username: valueToEmit.username, licensePlate: valueToEmit.licensePlate, startDate: valueToEmit.startDate, endDate: valueToEmit.endDate, isApproved: false}
                console.log(rejectedBooking.isApproved)
                return approveBooking(rejectedBooking)
            case 'nuovo':
                return navigate('/bookings/form')
            default:
                return console.log('actions clicked', valueToEmit)
        }
    }


    if (isGetLoading) {
        bookingsContent = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    } else if (isGetSuccess) {
        return (
            <Table headers={bookingsListHeaders} data={bookings} actions={bookingsListActions}
                   handleAction={actionEmitter}/>
        )
    } else if (isGetError) {
        bookingsContent = (
            <div className="alert alert-danger" role="alert">
                {getError}
            </div>
        )
    }
}

export default BookingsList