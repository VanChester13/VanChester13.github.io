/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTable, useSortBy, useRowSelect, useFilters } from 'react-table'

import { templateColumns } from './Columns'
import { Checkbox } from './Checkbox'
import SortPopup from './SortPopup'
import { Filter } from './Filter'
import FilterPopup from './FilterPopup'
import { deleteUser } from '../redux/actionsCreators/actions'
import AddUser from './AddUIser'
import  '../scss/table.scss'

function TableUsers() {
    const dispatch = useDispatch()
    const users = useSelector(({ usersInfo }) => usersInfo.users)
    
    const data = React.useMemo(() => users, [users])
    const columns = React.useMemo(() => templateColumns, [])
    const defaultColumn = React.useMemo(() => ({Filter: Filter}), [])

    const [visiableForm, setVisiableForm] = React.useState(false)
    const removeUser = (rows) => window.confirm('Вы действительно хотите удалить?') && dispatch(deleteUser(rows))


const tableInstance = useTable({ columns, data, defaultColumn }, useFilters, useSortBy,  useRowSelect,
    (hooks) => {
        hooks.visibleColumns.push(columns => [
        {
            id: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => (
                <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
             Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()}/>
        },
        ...columns
      ])
    }
)

const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return (
    <div className='container-table'>   
        <section className="panel__devtools"> 
            <p>⚙️ PANEL DEVTOOLS</p>
            <FilterPopup headerGroups={headerGroups}/>
            <SortPopup headerGroups={headerGroups} />
            { visiableForm && <AddUser setVisiableForm={setVisiableForm}/>}
            <button className='btn' onClick={() => setVisiableForm(!visiableForm)}>Add User</button>
            <button className="btn" onClick={ removeUser.bind(null, rows)}>Delete</button> 
        </section>

        <table className="table" {...getTableProps()}>  
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')} </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr style={{background: row.isSelected ? '#ffbb96' : ''}} {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>       
     </div> 
    )
}
export default TableUsers
