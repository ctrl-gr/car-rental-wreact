import React, {useState} from 'react'
import {
    carApi
} from "../../services/car.service";
import Table from "../../components/table/core/Table";

const CarsList = () => {

    const { useGetCarsQuery,
        useAddNewCarMutation,
        useUpdateCarMutation,
        useDeleteCarMutation } = carApi;

    const [addNewCar, response] = useAddNewCarMutation()
    const [deleteCar] = useDeleteCarMutation()
    const [inputField, setInputField] = useState({
        licensePlate: '',
        manufacturer: '',
        model: '',
        type: ''
    })

    const inputsHandler = (e) => {
        setInputField((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const [updateCar, {isLoading: isUpdating}] = useUpdateCarMutation()
    const setCarData = (data) => {
        setInputField({
            licensePlate: data.license,
            manufacturer: data.manufacturer,
            model: data.model,
            type: data.type
        })
    }
    const onEditData = () => {
        updateCar({
            licensePlate: inputField.license,
            manufacturer: inputField.manufacturer,
            model: inputField.model,
            type: inputField.type
        })
        setInputField(() => ({
            licensePlate: '',
            manufacturer: '',
            model: '',
            type: ''
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const {licensePlate, manufacturer, model, type} = e.target.elements
        setInputField((inputField) => ({
            ...inputField,
            [e.target.name]: e.target.value,
        }))
        let formData = {
            licensePlate: licensePlate.value,
            manufacturer: manufacturer.value,
            model: model.value,
            type: type.value
        }

        addNewCar(formData)
            .unwrap()
            .then(() => {
                setInputField(() => ({
                    licensePlate: '',
                    manufacturer: '',
                    model: '',
                    type: ''
                }))
            })
            .then((error) => {
                console.log(error)
            })
    }
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
                return console.log(valueToEmit)
            // return setPostData(valueToEmit)
            case 'elimina':
                return (deleteCar)
            case 'nuovo':
                return console.log('nuovo elemento')
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
                            value={inputField.manufacturer}
                            type="text"
                            className="form-control"
                            name="title"
                            id="title"
                            onChange={inputsHandler}
                        />
                        <input
                            value={inputField.model}
                            type="text"
                            className="form-control"
                            name="title"
                            id="title"
                            onChange={inputsHandler}
                        />
                        <input
                            value={inputField.type}
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
                <div className="row">{carsContent}</div>
            </div>
        </div>
    )
}

export default CarsList