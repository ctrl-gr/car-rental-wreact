import React, {useState} from 'react';
import { userApi} from "../../services/user.service";
import Form from '../../components/form/Form'
import {useParams} from "react-router-dom";

const UserForm = () => {
    const {username} = useParams()
    console.log(username)
    const {useAddNewUserMutation, useGetUserByUsernameQuery, useUpdateUserMutation,} = userApi;
    const [addNewUser, response] = useAddNewUserMutation()
    const {data: userData, isLoading: isUserDataLoading} = useGetUserByUsernameQuery(username);
    console.log(userData)

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

    const onSubmit = (formData) => {
        if (username) {
            console.log('edit')
        } else {
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
    }

    return (
        <div>
            <Form questions={userQuestions} onSubmitForm={onSubmit}/>
        </div>
    )
}

export default UserForm