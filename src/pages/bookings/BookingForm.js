import React, {useState} from 'react';
import Form from '../../components/form/Form'
import {carApi} from "../../services/car.service";
import Table from "../../components/table/core/Table";
import { useAddNewBookingMutation} from "../../services/booking.service";
import {useNavigate} from "react-router-dom";

const BookingForm = () => {

    const navigate = useNavigate()
    const {useGetAvailableCarsQuery } = carApi;
    const [addNewBooking] = useAddNewBookingMutation()
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const {
        data: availableCars,
        isLoading: isGetLoading,
        isSuccess: isGetSuccess,
        isError: isGetError,
        error: getError,
    } = useGetAvailableCarsQuery({startDate: startDate, endDate: endDate}, {
        skip: startDate === '' && endDate === '',
    })

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('en', { month: 'long' });
        return `${day} ${month}`;
    };

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


     const availableCarsHeaders = ['licensePlate', 'manufacturer', 'model', 'seats', 'headquartersName', 'azioni']
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
                 addNewBooking({licensePlate: valueToEmit.licensePlate, startDate, endDate})
                 alert('Booking submitted for approval.')
                 navigate("/")
                 return
             default:
                 return console.log('actions clicked', valueToEmit)
         }
     }

    const onSubmit = (formData) => {
        console.log(formData)
        setStartDate(formData.startDate)
        setEndDate(formData.endDate)
        setIsSubmitted(!isSubmitted)
    }


      let availableCarsContent

      if (isGetLoading) {
          availableCarsContent = (
             <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                     <span className="visually-hidden">Loading...</span>
                  </div>
              </div>
          )
      } else if (isGetSuccess) {
          return (
              <div>
                  <h1>Car availables from {formatDate(startDate)} to  {formatDate(endDate)}</h1>
                  <Table headers={availableCarsHeaders} data={availableCars} actions={availableCarsActions} handleAction={actionEmitter}/>
              </div>

          )
      } else if (isGetError) {
          availableCarsContent = (
              <div className="alert alert-danger" role="alert">
                 {getError}
              </div>
          )
      }
    return (
        <>
            <div>
                <Form questions={bookingQuestions} onSubmitForm={onSubmit}/>
                {availableCarsContent}
            </div>
        </>
    )
}

export default BookingForm