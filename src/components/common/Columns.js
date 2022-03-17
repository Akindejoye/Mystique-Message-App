import { format } from 'date-fns'

export const COLUMNS = [
    {
        Header: 'User',
        Footer: 'User',
        accessor: 'first_name'
    },
    {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'last_name'
    },
    {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone_num'
    },
    {
        Header: 'I.D Ref',
        Footer: 'I.D Ref',
        accessor: 'ref'
    },
    {
        Header: 'Status',
        Footer: 'Status',
        accessor: 'status'
    },
    {
        Header: 'Date',
        Footer: 'Date',
        accessor: 'date',
        Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyy')}
    },
];