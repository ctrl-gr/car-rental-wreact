import React from 'react'
import styles from './Question.module.css'

const Question = ({question, type}) => {

    return <div className={styles.question}>
        <label className={styles.label} id={question}>{question}</label>
        <input className={styles.input} key={question} type={type}></input>
    </div>
}

export default Question;