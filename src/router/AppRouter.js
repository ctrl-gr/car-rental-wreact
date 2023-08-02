import React from 'react'
import {Routes, Route} from "react-router-dom"

import UsersList from '../pages/users/UsersList'
import Homepage from "../pages/common/Homepage";
import CarsList from "../pages/cars/CarsList";

function AppRouter() {
    return (
        <>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/users" element={<UsersList/>}/>
                    <Route path="/cars" element={<CarsList />}/>
                    {/*<Route path="/bookings" element={<BookingsList />}/>*/}
                </Routes>
        </>
    )
}

export default AppRouter