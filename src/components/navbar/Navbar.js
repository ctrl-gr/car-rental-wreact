import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <nav>
                    <li>
                        <Link to="/">homepage</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
            </nav>
        </div>
    )
}

export default Navbar