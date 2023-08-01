import React from 'react'
import styles from './Button.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Button = ({handleClick, customClass, icon, text, type}) => {

    return <>
        <button className={`${styles.buttonStyle} ${customClass}`} type={type} onClick={handleClick}>{icon && (
            <>
                <FontAwesomeIcon className={styles.icon} icon={icon}/>
                {" "}
            </>
        )}
            {text}</button>
    </>
}

export default Button;