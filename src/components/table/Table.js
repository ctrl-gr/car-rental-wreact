import React from 'react'
import styles from './Table.module.css'
import Button from "../button/Button";

const Table = ({headers, data, actions, handleAction}) => {

    function actionEmitter(type, valueToEmit) {
        handleAction(type, valueToEmit)
    }
// TODO actions in input, paginazione e ordinamento
    return <>

        {actions.map((action) => {
            return action.actionOnTop ? (
                 <Button key={action.type} type={action.type}  text={action.type} handleClick={() => actionEmitter(action.type)} />
            ) : null
        })}
        <table className={styles.tableStyle}>
            <thead>
            <tr>
                {headers.map((header) => {
                    return <th key={header} className={styles.headers}>{header}</th>
                })}
            </tr>
            </thead>
            <tbody>
            {data.map((dataRow) => {
                return (
                    <tr key={dataRow.id}>
                        {headers.map((header) => {
                            return header !== 'azioni' ? (
                                <td key={header}>{dataRow[header]}</td>
                            ) : (
                                <td key={'azioni'}>
                                    <div className={styles.actions}>
                                        {actions.map((action) => {
                                            return !action.actionOnTop ? (
                                                <Button key={action.type} type={action.type} text={action.type} handleClick={() => actionEmitter(action.type, dataRow)} />
                                            ) : null
                                        })}
                                    </div>
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    </>
}

export default Table;