import React, { useState } from 'react'
import {
    useGetUsersQuery,
    useAddNewUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation
} from "../api/apiSlice";

function UsersList() {
    const [addNewUser, response] = useAddNewUserMutation()
    const [deleteUser] = useDeleteUserMutation()
    const [inputField, setInputField] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    })

    const inputsHandler = (e) => {
        setInputField((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const [updatePost, {isLoading: isUpdating }] = useUpdateUserMutation()
    const setPostData = (data) => {
        setInputField({
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            password: data.password
        })
    }
    const onEditData = () => {
        updatePost({
            firstName: inputField.firstName,
            lastName: inputField.lastName,
            username: inputField.username,
            password: inputField.password
        })
        setInputField(() => ({
            firstName: '',
            lastName: '',
            username: '',
            password: ''
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const {firstName, lastName, username, password } = e.target.elements
        setInputField((inputField) => ({
            ...inputField,
            [e.target.name]: e.target.value,
        }))
        let formData = {
            firstName: firstName.value,
            lastName: lastName.value,
            username: username.value,
            password: password.value
        }

        addNewUser(formData)
            .unwrap()
            .then(() => {
                setInputField(() => ({
                    firstName: '',
                    lastName: '',
                    username: '',
                    password: ''
                }))
            })
            .then((error) => {
                console.log(error)
            })
    }
    const {
        data: users,
        isLoading: isGetLoading,
        isSuccess: isGetSuccess,
        isError: isGetError,
        error: getError
    } = useGetUsersQuery({ refetchOnMountOrArgChange: true})


let usersContent
if (isGetLoading) {
    usersContent = (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
} else if (isGetSuccess) {
    usersContent = users.map((user) => {
        return (
            <div className="col-lg-12 mb-3" key={user.id}>
                <div className="card alert alert-secondary">
                    <div className="card-body">
                        <h5 className="card-title">{user.username}</h5>
                        <p className="card-text">{user.firstName}</p>
                        <p className="card-text">{user.lastName}</p>
                        <button
                            onClick={() => deleteUser(user.id)}
                            className="btn btn-outline-danger me-2"
                        >
                            Remove
                        </button>
                        <button
                            onClick={() => setPostData(user)}
                            className="btn btn-outline-primary"
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        )
    })
} else if (isGetError) {
    usersContent = (
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
                        value={inputField.firstName}
                        type="text"
                        className="form-control"
                        name="title"
                        id="title"
                        onChange={inputsHandler}
                    />
                    <input
                        value={inputField.lastName}
                        type="text"
                        className="form-control"
                        name="title"
                        id="title"
                        onChange={inputsHandler}
                    />
                    <input
                        value={inputField.username}
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
            <div className="row">{usersContent}</div>
        </div>
    </div>
)
}
export default UsersList