import React from 'react'
import styles from './Table.module.css'

const Table = ({headers, data}) => {

    return <>
        <table className={styles.tableStyle}>
            <thead>
            <tr className={styles.tr}>
                {headers.map((header) => {
                    return <th key={header}>{header}</th>
                })}
            </tr>
            </thead>
            <tbody>
            {data.map((dataRow) => {
                return (
                    <tr className={styles.tr} key={dataRow.id}>
                        {headers.map((header) => {
                            return <td key={header}>{dataRow[header]}</td>
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    </>
}

export default Table;