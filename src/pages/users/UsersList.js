import React, {useState} from 'react'
import {
    userApi
} from "../../services/user.service";
import Table from "../../components/table/core/Table";

const UsersList = () => {

    const { useGetUsersQuery, useDeleteUserMutation } = userApi;

    const [deleteUser] = useDeleteUserMutation()

    const {
        data: users,
        isLoading: isGetLoading,
        isSuccess: isGetSuccess,
        isError: isGetError,
        error: getError
    } = useGetUsersQuery({refetchOnMountOrArgChange: true})


    let usersContent
    const usersListHeaders = ['firstName', 'lastName', 'username', 'azioni']
    const usersListActions = [
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
                return (deleteUser)
            case 'nuovo':
                return console.log('nuovo elemento')
            default:
                return console.log('actions clicked', valueToEmit)
        }
    }


    if (isGetLoading) {
        usersContent = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    } else if (isGetSuccess) {
        return (
            <Table headers={usersListHeaders} data={users} actions={usersListActions} handleAction={actionEmitter}/>
        )
    } else if (isGetError) {
        usersContent = (
            <div className="alert alert-danger" role="alert">
                {getError}
            </div>
        )
    }
    return (
        <>
        </>
    )
}

export default UsersList