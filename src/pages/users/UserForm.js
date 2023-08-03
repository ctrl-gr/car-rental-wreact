import React, {useState} from 'react';
import {userApi} from "../../services/user.service";
import Form from '../../components/form/Form'

const UserForm = () => {

    const { useAddNewUserMutation, useUpdateUserMutation, } = userApi;
    const [addNewUser, response] = useAddNewUserMutation()

    const userQuestions = [
        {
            id: 0,
            qtext: 'firstName',
            type: 'text'
        },
        {
            id: 1,
            qtext: 'lastName',
            type: 'text'
        },
        {
            id: 2,
            qtext: 'birthDate',
            type: 'date'

        },
        {
            id: 3,
            qtext: 'username',
            type: 'text'
        },
        {
            id: 4,
            qtext: 'password',
            type: 'password'
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
        addNewUser(formData)
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
           <Form questions={userQuestions} onSubmitForm={onSubmit}/>
        </div>
    )
}

export default UserForm