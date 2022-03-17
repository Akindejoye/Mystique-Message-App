import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from './MessColumns';
import MessageMock from './MessageMock.json';
import Palmer from './messageTable.module.css';
import TableBox from '../../../user/components/tableBox/TableBox';

export const MessageTable = () => {

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MessageMock, []);

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
      } = useTable({ columns, data });
    
    return (
        <div className={Palmer.tableContainer}>
            <table className={Palmer.messTable} {...getTableProps()}>
                <thead className={Palmer.messTableHeadBox}>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()} className={Palmer.messTableHR}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()} className={Palmer.messTableHCl}>{column.render("Header")}</th>
                    ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()} className={Palmer.messTableBody}>
                {rows.map(row => {
                    prepareRow(row);

                    return (
                    <tr {...row.getRowProps()} className={Palmer.messTableBR}>
                        {row.cells.map(cell => {
                        return (
                            <td {...cell.getCellProps()} className={Palmer.messTableBCl}>{cell.render("Cell")}</td>
                        );
                        })}
                    </tr>
                    );
                })}
                </tbody>
            </table>
            <div className={Palmer.paginationBox}>
                <span className={Palmer.pagination1}>1</span>
                <span className={Palmer.pagination2}>2</span>
            </div>
        </div>
    );
}
 