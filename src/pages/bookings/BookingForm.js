import React, {useState} from 'react';
import Form from '../../components/form/Form'
import {carApi } from "../../services/car.service";
import Table from "../../components/table/core/Table";

const BookingForm = () => {

    const { useGetAvailableCarsQuery } = carApi;
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    // const {
    //     data: availableCars,
    //     isLoading: isGetLoading,
    //     isSuccess: isGetSuccess,
    //     isError: isGetError,
    //     error: getError
    // } = useGetAvailableCarsQuery()

    const bookingQuestions = [
        {
            id: 0,
            qtext: 'startDate',
            type: 'date'
        },
        {
            id: 1,
            qtext: 'endDate',
            type: 'date'
        }
    ]


    const availableCarsHeaders = ['licensePlate', 'manufacturer', 'model', 'azioni']
    const availableCarsActions = [
        {
            type: 'prenota',
            actionOnTop: false,
            cssClass: ''
        }
    ]

    function actionEmitter(type, valueToEmit) {
        switch (type) {
            case 'prenota':
                return console.log(valueToEmit)
            // return setPostData(valueToEmit)
            default:
                return console.log('actions clicked', valueToEmit)
        }
    }

    const onSubmit = (formData) => {
        console.log(formData)
        setStartDate(formData[0])
        setEndDate(formData[1])
    }

    // let availableCarsContent
    //
    // if (isGetLoading) {
    //     availableCarsContent = (
    //         <div className="d-flex justify-content-center">
    //             <div className="spinner-border" role="status">
    //                 <span className="visually-hidden">Loading...</span>
    //             </div>
    //         </div>
    //     )
    // } else if (isGetSuccess) {
    //     return (
    //         <Table headers={availableCarsHeaders} data={availableCars} actions={availableCarsActions} handleAction={actionEmitter}/>
    //     )
    // } else if (isGetError) {
    //     availableCarsContent = (
    //         <div className="alert alert-danger" role="alert">
    //             {getError}
    //         </div>
    //     )
    // }
    return (
        <>
            <div>
                <Form questions={bookingQuestions} onSubmitForm={onSubmit}/>
                {/*{availableCarsContent}*/}
            </div>
        </>
    )
}

export default BookingForm