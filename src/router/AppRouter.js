import React from 'react'
import {Routes, Route} from "react-router-dom"
import UsersList from '../pages/users/UsersList'
import Homepage from "../pages/common/Homepage";
import CarsList from "../pages/cars/CarsList";
import BookingsList from "../pages/bookings/BookingsList";
import UserForm from "../pages/users/UserForm";
import CarForm from "../pages/cars/CarForm";
import BookingForm from "../pages/bookings/BookingForm";
import Login from "../pages/common/Login";

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/homepage" element={<Homepage/>}/>

                <Route path="/users/">
                    <Route path="list" element={<UsersList />} />
                    <Route path="form" element={<UserForm />}/>
                    <Route path="form/:username" element={<UserForm />}/> {/* messo qui dato che non è proprio figlio dell'elemento form secondo me*/}
                </Route>

                <Route path="/cars/">
                    <Route path="list" element={<CarsList />} />
                    <Route path="form" element={<CarForm />}/>
                    <Route path="form/:id" element={<CarForm />}/> {/* uguale a sopra */}
                </Route>

                <Route path="/bookings/">
                    <Route path="list" element={<BookingsList />} />
                    <Route path="form" element={<BookingForm />}/>
                </Route>
            </Routes>
        </>
    )
}

export default AppRouter