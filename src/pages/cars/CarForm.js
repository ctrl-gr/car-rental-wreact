import React, {useEffect, useState} from 'react';
import {carApi} from "../../services/car.service";
import Form from '../../components/form/Form'
import {useNavigate, useParams} from "react-router-dom";

const CarForm = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const { useAddNewCarMutation, useGetCarByIdQuery, useUpdateCarMutation, } = carApi;
    const [addNewCar, response] = useAddNewCarMutation()
    const [updateCar, updateResponse] = useUpdateCarMutation()
    const {data: carData, isLoading: isCarDataLoading} = useGetCarByIdQuery(id, {skip: !id});
    const [carValues, setCarValues] = useState({})

    const carQuestions = [
        {
            id: 0,
            qtext: 'licensePlate',
            type: 'text'
        },
        {
            id: 1,
            qtext: 'manufacturer',
            type: 'text'
        },
        {
            id: 2,
            qtext: 'model',
            type: 'text'

        },
        {
            id: 3,
            qtext: 'type',
            type: 'text'
        },
        {
            id: 4,
            qtext: 'year',
            type: 'text'
        },
        {
            id: 5,
            qtext: 'seats',
            type: 'text'
        },
        {
            id: 6,
            qtext: 'headquartersName',
            type: 'text'
        },
        {
            id: 7,
            qtext: 'id',
            type: 'hidden',
            hidden: true
        },
    ]

    const onSubmit = (formData) => {
        if (id) {
            console.log(formData)
            updateCar(formData)
                .unwrap()
                .then(() => {
                    alert('Car updated successfully. Click here to go back to Homepage')
                    navigate('/')
                })
                .catch((error) => {
                    console.error('error', error)
                })
        } else {
            addNewCar(formData)
                .unwrap()
                .then(() => {
                    alert('Car saved. Click here to go back to Homepage')
                    navigate('/')
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    useEffect(() => {
        if (carData && !isCarDataLoading) {
            setCarValues(carData);
        }
    }, [carData, isCarDataLoading]);

    return (
        <div>
            <Form questions={carQuestions} initialValues={carValues} onSubmitForm={onSubmit}/>
        </div>
    )
}

export default CarForm