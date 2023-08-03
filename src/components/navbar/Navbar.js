import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'


const Navbar = () => {
    return (
        <div className={styles.nav}>
            <nav>
                <ul className={styles.navbarList}>
                    <li>
                        <Link to="/">Homepage</Link>
                    </li>
                    <li className={styles.submenu}>
                        User Area
                        <ul>
                            <li>
                                <Link to="/users/form">User Form</Link>
                            </li>
                            <li>
                                <Link to="/users/list">User List</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.submenu}>
                        Car Area
                        <ul>
                            <li>
                                <Link to="/cars/form">Car Form</Link>
                            </li>
                            <li>
                                <Link to="/cars/list">Car List</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.submenu}>
                        Booking Area
                        <ul>
                            <li>
                                <Link to="/bookings/form">Booking Form</Link>
                            </li>
                            <li>
                                <Link to="/bookings/list">Booking List</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar