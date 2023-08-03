import React, {forwardRef, useImperativeHandle, useState} from 'react'
import styles from './Question.module.css'

const Question = ({qtext, type, value, onInputChange}) => {


    const formatQuestionText = (text) => {
        const words = text.split(/(?=[A-Z])/); // divide in base alle maiuscole
        return words.map((word, index) => {
            if (index === 0) {
                return word.charAt(0).toUpperCase() + word.slice(1); // Prima parola, mantieni maiuscolo
            } else {
                return word.toLowerCase(); // Altre parole, converte in minuscolo
            }
        }).join(' ');
    };

    const formattedQText = formatQuestionText(qtext)

    const handleInputChange = (e) => {
        onInputChange(e.target.value)
    }


    return <div className={styles.question}>
        <label className={styles.label} id={qtext}>{formattedQText}</label>
        <input className={styles.input} id={qtext} type={type} value={value} onChange={handleInputChange}/>
    </div>
}

export default Question;