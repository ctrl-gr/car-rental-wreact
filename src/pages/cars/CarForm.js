import React, {useState} from 'react';
import {carApi} from "../../services/car.service";
import Form from '../../components/form/Form'

const CarForm = () => {

    const { useAddNewCarMutation, useUpdateCarMutation, } = carApi;
    const [addNewCar, response] = useAddNewCarMutation()

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
            qtext: 'headquarters',
            type: 'text'
        },
    ]

    // const [inputField, setInputField] = useState({
    //     firstName: '',
    //     lastName: '',
    //     username: '',
    //     password: ''
    // })
    //
    // const inputsHandler = (e) => {
    //     setInputField((prevState) => ({
    //         ...prevState,
    //         [e.target.name]: e.target.value,
    //     }))
    // }
    //
    // const [updatePost, {isLoading: isUpdating}] = useUpdateUserMutation()
    // const setPostData = (data) => {
    //     setInputField({
    //         firstName: data.firstName,
    //         lastName: data.lastName,
    //         username: data.username,
    //         password: data.password
    //     })
    // }
    // const onEditData = () => {
    //     updatePost({
    //         firstName: inputField.firstName,
    //         lastName: inputField.lastName,
    //         username: inputField.username,
    //         password: inputField.password
    //     })
    //     setInputField(() => ({
    //         firstName: '',
    //         lastName: '',
    //         username: '',
    //         password: ''
    //     }))
    // }

    const onSubmit = (formData) => {
        console.log('entered', formData)
        addNewCar(formData)
            .unwrap()
            .then(() => {
                // setInputField(() => ({
                //     firstName: '',
                //     lastName: '',
                //     username: '',
                //     password: ''
                // }))
            })
            .then((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <Form questions={carQuestions} onSubmitForm={onSubmit}/>
        </div>
    )
}

export default CarForm