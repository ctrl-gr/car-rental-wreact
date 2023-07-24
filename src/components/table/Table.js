import React from 'react'
import styles from './Table.module.css'
import Button from "../button/Button";

const Table = ({headers, data}) => {

    function action(type, valueToEmit) {
        switch (type) {
            case 'modifica':
                return console.log('modificato', valueToEmit)
            case 'elimina':
                return console.log('eliminato', valueToEmit)
            default:
                return console.log('actions clicked', valueToEmit)
        }
    }

    return <>
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
                                <td key={'actions'}>
                                    <div className={styles.actions}>
                                    <Button text={'modifica'} handleClick={() => action('modifica', dataRow)}/>
                                    <Button text={'elimina'} handleClick={() => action('elimina', dataRow)}/>
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