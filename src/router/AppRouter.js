import React from 'react'
import {Routes, Route} from "react-router-dom"

import UsersList from '../pages/users/UsersList'
import Homepage from "../pages/common/Homepage";

function AppRouter() {
    return (
        <>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/users" element={<UsersList/>}/>
                </Routes>
        </>
    )
}

export default AppRouter