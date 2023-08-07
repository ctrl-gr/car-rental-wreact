import React, {useEffect, useState} from 'react';
import { userApi} from "../../services/user.service";
import Form from '../../components/form/Form'
import {useNavigate, useParams} from "react-router-dom";

const UserForm = () => {
    const {username} = useParams()
    const navigate = useNavigate()
    const {useAddNewUserMutation, useGetUserByUsernameQuery, useUpdateUserMutation,} = userApi;
    const [addNewUser, response] = useAddNewUserMutation()
    const [updateUser, updateResponse] = useUpdateUserMutation()
    const {data: userData, isLoading: isUserDataLoading} = useGetUserByUsernameQuery(username, {skip: !username});
    const [userValues, setUserValues] = useState({})

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
            updateUser({username, formData})
                .unwrap()
                .then(() => {
                    alert('User updated successfully. Click here to go back to Homepage')
                    navigate('/')
                })
                .catch((error) => {
                    console.error('error', error)
                })
        } else {
            addNewUser(formData)
                .unwrap()
                .then(() => {
                    alert('User saved. Click here to go back to Homepage')
                    navigate('/')
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    useEffect(() => {
        if (userData && !isUserDataLoading) {
            setUserValues(userData);
        }
    }, [userData, isUserDataLoading]);

    return (
        <div>
            <Form questions={userQuestions} initialValues={userValues} onSubmitForm={onSubmit}/>
        </div>
    )
}

export default UserForm