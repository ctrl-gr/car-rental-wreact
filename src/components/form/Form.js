import React, {useRef, useState} from 'react'
import styles from './Form.module.css'
import Question from "./question/Question";
import Button from "../button/Button";

const Form = ({questions, onSubmitForm}) => {
    const [inputValues, setInputValues] = useState({});

    const handleInputChange = (qtext, value) => {
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [qtext]: value,
        }));
    };

    const submitForm = (e) => {
        e.preventDefault();
        let formData = {}
        questions.forEach((question) => {
            const {type, id} = question;

            const element = e.target.elements[id].value;
            if (element) {
                formData[question.qtext] = type === "checkbox" ? element.checked : element;
            }
        });
        onSubmitForm(formData)
        alert('Form submitted!')
        setInputValues({})

    }

    return <>
        <form className={styles.form} onSubmit={submitForm}>
            {questions.map((question) => {
                    return <Question key={question.id} qtext={question.qtext} type={question.type} value={inputValues[question.qtext] || ''} onInputChange={(value) => handleInputChange(question.qtext, value)}  />
                }
            )}
            <Button type={'submit'} text={'Invia'}/>
        </form>
    </>
}

export default Form;