import React, {useMemo, useState} from 'react'
import styles from './Table.module.css'
import Button from "../button/Button";
import Pagination from "../../utils/pagination/Pagination";

let initialPageSize = 3;

const Table = ({headers, data, actions, handleAction}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(initialPageSize)
    const [showAll, setShowAll] = useState(false);

    const tableData = useMemo(() => {
        const showAll = !pageSize
        if (showAll) {
            return data
        }
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, pageSize, data, showAll]);

    function actionEmitter(type, valueToEmit) {
        handleAction(type, valueToEmit)
    }

    function handlePageSizeChange(newSize) {
        setCurrentPage(1);
        setPageSize(newSize);
        setShowAll(!newSize)
    }
// TODO ordinamento
    return <>

        {actions.map((action) => {
            return action.actionOnTop ? (
                 <Button key={action.type} type={action.type}  className={styles.actiontop} text={action.type} handleClick={() => actionEmitter(action.type)} />
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
            {tableData.map((dataRow) => {
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
        <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={pageSize}
            onPageChange={page => setCurrentPage(page)}
            onPageSizeChange={handlePageSizeChange}
            />
    </>
}

export default Table;