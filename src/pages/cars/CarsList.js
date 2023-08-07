import React, {useState} from 'react'
import {
    carApi
} from "../../services/car.service";
import Table from "../../components/table/core/Table";
import {useNavigate} from "react-router-dom";

const CarsList = () => {

    const { useGetCarsQuery,
        useDeleteCarMutation } = carApi;
    const navigate = useNavigate()
    const [deleteCar] = useDeleteCarMutation()

    const {
        data: cars,
        isLoading: isGetLoading,
        isSuccess: isGetSuccess,
        isError: isGetError,
        error: getError
    } = useGetCarsQuery({refetchOnMountOrArgChange: true})


    let carsContent
    const carsListHeaders = ['licensePlate', 'manufacturer', 'model', 'type', 'azioni']
    const carsListActions = [
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
                return navigate('/cars/form/'+ valueToEmit.id)
            case 'elimina':
                deleteCar(valueToEmit.id)
                return alert('Car deleted')
            case 'nuovo':
                return navigate('/cars/form')
            default:
                return console.log('actions clicked', valueToEmit)
        }
    }


    if (isGetLoading) {
        carsContent = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    } else if (isGetSuccess) {
        return (
            <Table headers={carsListHeaders} data={cars} actions={carsListActions} handleAction={actionEmitter}/>
        )
    } else if (isGetError) {
        carsContent = (
            <div className="alert alert-danger" role="alert">
                {getError}
            </div>
        )
    }
}

export default CarsList