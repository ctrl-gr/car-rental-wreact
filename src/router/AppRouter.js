import React from 'react'
import {Routes, Route} from "react-router-dom"

import UsersList from '../pages/users/UsersList'
import Homepage from "../pages/common/Homepage";
import CarsList from "../pages/cars/CarsList";
import BookingsList from "../pages/bookings/BookingsList";

function AppRouter() {
    return (
        <>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/users/list" element={<UsersList/>}/>
                    <Route path="/cars/list" element={<CarsList />}/>
                    <Route path="/bookings/list" element={<BookingsList />}/>
                </Routes>
        </>
    )
}

export default AppRouter