import { format } from 'date-fns'

export const COLUMNS = [
    {
        Header: 'Sender I.D',
        Footer: 'Sender I.D',
        accessor: 'sender'
    },
    {
        Header: 'Contacts',
        Footer: 'Contacts',
        accessor: 'contacts'
    },
    {
        Header: 'Message Content',
        Footer: 'Message Content',
        accessor: 'message'
    },
    {
        Header: 'Status',
        Footer: 'Status',
        accessor: 'status'
    },
    {
        Header: 'Time',
        Footer: 'Time',
        accessor: 'time'
    },
    {
        Header: 'Date',
        Footer: 'Date',
        accessor: 'date',
        Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyy')}
    },
];