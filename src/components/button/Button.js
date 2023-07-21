import React from 'react'
import styles from './Button.module.css'


const Button = ({handleClick, text, type}) => {

    return <>
        <button className={styles.buttonStyle} type={type} onClick={handleClick}>{text}</button>
    </>
}

export default Button;