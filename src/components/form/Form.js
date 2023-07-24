import React from 'react'
import styles from './Form.module.css'
import Question from "./question/Question";
import Button from "../button/Button";

const Form = ({questions}) => {

    function submitForm(e) {
        e.preventDefault()
        console.log('form sent')
    }

    return <>
        <form className={styles.form}>
            {questions.map((question) => {
                    return <Question key={question.qText} question={question.qText} type={question.type} />
                }
            )}
            <Button type={'submit'} text={'Invia'} handleClick={(e) => submitForm(e)} />
        </form>
    </>
}

export default Form;