import React, {useMemo, useState} from 'react'
import styles from './Table.module.css'
import Button from "../../button/Button";
import Pagination from "../basic components/pagination/Pagination";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import  useSort from '../basic components/hooks/useSort'


const Table = ({headers, data, actions, handleAction}) => {
    const initialPageSize = data.length;
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(initialPageSize)
    const [showAll, setShowAll] = useState(false)

    const {sortedData, sortKey, sortDirection, handleSort} = useSort(data, 'nome', 'asc')

    const tableData = useMemo(() => {
        const showAll = !pageSize
        if (showAll) {
            return sortedData
        }
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return sortedData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, pageSize, sortedData, showAll]);


    const approveRejectActions = [
        {
            type: 'approva',
            actionOnTop: false,
            cssClass: '',
        },
        {
            type: 'rifiuta',
            actionOnTop: false,
            cssClass: '',
        },
        // Puoi aggiungere altre azioni per 'isApproved' qui, se necessario...
    ];


    function actionEmitter(type, valueToEmit) {
        handleAction(type, valueToEmit)
    }

    function handlePageSizeChange(newSize) {
        setCurrentPage(1);
        setPageSize(newSize);
        setShowAll(!newSize)
    }

    return <>

        {actions.map((action) => {
            return action.actionOnTop ? (
                 <Button key={action.type} type={action.type} customClass={styles.actiontop} text={action.type} handleClick={() => actionEmitter(action.type)} />
            ) : null
        })}
        <table className={styles.tableStyle}>
            <thead>
            <tr>
                {headers.map((header) => {
                    return <th key={header} className={styles.headers}>
                        {sortDirection === 'asc' ?

                            <Button icon={faSortUp} customClass={styles.sort} handleClick={() => handleSort(header, 'asc')}  />
                        :
                            <Button icon={faSortDown} customClass={styles.sort} handleClick={() => handleSort(header, 'desc')}/>
                        }
                        {header}</th>
                })}
            </tr>
            </thead>
            <tbody>
            {tableData.map((dataRow) => {
                return (
                    <tr key={dataRow.id}>
                        {headers.map((header) => {
                            return header !== 'azioni' ? (
                                <td key={header}>  {header === 'isApproved'
                                    ? dataRow[header].toString()
                                    : dataRow[header]}</td>
                            ) : (
                                <td key={'azioni'}>
                                    <div className={styles.actions}>
                                        {dataRow.hasOwnProperty('isApproved') ? (
                                            <>
                                                <Button
                                                    key="approva"
                                                    type="approva"
                                                    text="Approva"
                                                    handleClick={() => actionEmitter('approva', dataRow)}
                                                />
                                                <Button
                                                    key="rifiuta"
                                                    type="rifiuta"
                                                    text="Rifiuta"
                                                    handleClick={() => actionEmitter('rifiuta', dataRow)}
                                                />
                                            </>
                                        ) : (
                                            actions.map((action) =>
                                                !action.actionOnTop ? (
                                                    <Button
                                                        key={action.type}
                                                        type={action.type}
                                                        text={action.type}
                                                        handleClick={() => actionEmitter(action.type, dataRow)}
                                                    />
                                                ) : null
                                            )
                                        )}
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