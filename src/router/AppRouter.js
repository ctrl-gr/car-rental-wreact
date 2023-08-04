import React from 'react'
import {Routes, Route} from "react-router-dom"

import UsersList from '../pages/users/UsersList'
import Homepage from "../pages/common/Homepage";
import CarsList from "../pages/cars/CarsList";
import BookingsList from "../pages/bookings/BookingsList";
import UserForm from "../pages/users/UserForm";
import CarForm from "../pages/cars/CarForm";
import BookingForm from "../pages/bookings/BookingForm";

function AppRouter() {
    return (
        <>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/users/list" element={<UsersList/>}/>
                    <Route path="/users/form" element={<UserForm />}/>
                    <Route path="/users/form/:username" element={<UserForm />}/>
                    <Route path="/cars/list" element={<CarsList />}/>
                    <Route path="/cars/form" element={<CarForm />}/>
                    <Route path="/bookings/list" element={<BookingsList />}/>
                    <Route path="/bookings/form" element={<BookingForm />}/>
                </Routes>
        </>
    )
}

export default AppRouter