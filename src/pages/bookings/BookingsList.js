import React, {useState} from 'react'
import {
    bookingApi
} from "../../services/booking.service";
import Table from "../../components/table/core/Table";

const BookingsList = () => {

    const { useGetBookingsQuery,
        useAddNewBookingMutation,
        useApproveBookingMutation,
        useDeleteBookingMutation } = bookingApi;

    const [addNewBooking, response] = useAddNewBookingMutation()
    const [deleteBooking] = useDeleteBookingMutation()
    const [inputField, setInputField] = useState({
        startDate: '',
        endDate: '',
        user: '',
        licensePlate: ''
    })

    const inputsHandler = (e) => {
        setInputField((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const [approveBooking, {isLoading: isUpdating}] = useApproveBookingMutation()
    const setBookingData = (data) => {
       setInputField({
            licensePlate: data.license,
            user: data.user,
            startDate: data.startDate,
             endDate: data.endDate
        })
     }
     const onEditData = () => {
        approveBooking({
           licensePlate: inputField.licensePlate,
      user: inputField.user,
       startDate: inputField.startDate,
      endDate: inputField.endDate
        })
        setInputField(() => ({
           licensePlate: '',
            user: '',
             startDate: '',
             endDate: ''
        }))
     }

     const onSubmit = (e) => {
         e.preventDefault()
         const {licensePlate, user, startDate, endDate} = e.target.elements
         setInputField((inputField) => ({
            ...inputField,
            [e.target.name]: e.target.value,
         }))
         let formData = {
            licensePlate: licensePlate.value,
         user: user.value,
         startDate: startDate.value,
         endDate: endDate.value
        }

         addNewBooking(formData)
            .unwrap()
            .then(() => {
                 setInputField(() => ({
                licensePlate: '',
                                user: '',
                                  startDate: '',
                                 endDate: ''
                 }))
            })
             .then((error) => {
                console.log(error)
            })
     }
    const {
       data: bookings,
     isLoading: isGetLoading,
     isSuccess: isGetSuccess,
     isError: isGetError,
      error: getError
     } = useGetBookingsQuery({refetchOnMountOrArgChange: true})


    let bookingsContent
    const bookingsListHeaders = ['startDate', 'endDate', 'licensePlate', 'user', 'azioni']
    const bookingsListActions = [
        {
            type: 'modifica',
            actionOnTop: false,
            cssClass: ''
        },
        {
            type: 'elimina',
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
            case 'modifica':
                return console.log(valueToEmit)
            // return setPostData(valueToEmit)
            case 'elimina':
                return (deleteBooking)
            case 'nuovo':
                return console.log('nuovo elemento')
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
            <Table headers={bookingsListHeaders} data={bookings} actions={bookingsListActions} handleAction={actionEmitter}/>
        )
    } else if (isGetError) {
        bookingsContent = (
            <div className="alert alert-danger" role="alert">
                {getError}
            </div>
        )
    }
    return (
        <div className="row">
            <div className="col-md-4 offset-md-*">
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label">
                            <strong>Enter Title</strong>
                        </label>
                        <input
                            value={inputField.licensePlate}
                            type="text"
                            className="form-control"
                            name="title"
                            id="title"
                            onChange={inputsHandler}
                        />
                        <input
                            value={inputField.user}
                            type="text"
                            className="form-control"
                            name="title"
                            id="title"
                            onChange={inputsHandler}
                        />
                        <input
                            value={inputField.startDate}
                            type="text"
                            className="form-control"
                            name="title"
                            id="title"
                            onChange={inputsHandler}
                        />
                        <input
                            value={inputField.endDate}
                            type="text"
                            className="form-control"
                            name="title"
                            id="title"
                            onChange={inputsHandler}
                        />
                    </div>
                    <button className="btn btn-danger me-2" type="submit">
                        Submit
                    </button>
                    <button
                        onClick={onEditData}
                        className="btn btn-primary"
                        type="button"
                    >
                        Update
                    </button>
                </form>
            </div>
            <div className="col-lg-8">
                <div className="row">{bookingsContent}</div>
            </div>
        </div>
    )
}

export default BookingsList