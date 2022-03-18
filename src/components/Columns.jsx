import {Filter} from "./Filter"

export const templateColumns = [
        {
            Header: 'ID',
            accessor: 'id',
            sorting: true, 
            disableFilters: true
        },
        {
            Header: 'Avatar',
            accessor: 'name[0]',
            sorting: false,
            disableFilters: true,
            disableSortBy: true,
        },
        {
            Header: 'Name',
            accessor: 'name',
            sorting: true,
            Filter: Filter
        },
        {
            Header: 'Username',
            accessor: 'username',
            disableSortBy: true,
            Filter: Filter
        },
        {
            Header: 'Email',
            accessor: 'email',
            disableSortBy: true,
            Filter: Filter
        },
        {
            Header: 'Phone',
            accessor: 'phone',
            disableSortBy: true,
            Filter: Filter
        },
        {
            Header: 'Zipcode',
            accessor: 'address.zipcode',
            sorting: true,
            Filter: Filter
        }
    ]
