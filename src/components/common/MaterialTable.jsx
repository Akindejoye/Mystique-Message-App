import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import MOCK_DATA from '../MOCK_DATA.json';

const MaterialTable = () => {

  const [data, setData] = useState(MOCK_DATA);

  const handleDelete = (id) => {
    setData(
      data.filter((item) => item.id !== id)
      )}

  const tableEdit = {
    color: 'white',
    backgroundColor: 'black',
    fontSize: '1.2rem',
    padding: '1rem'
  }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
          field: 'first_name',
          headerName: 'First Name',
          width: 150,
          editable: true,
        },
        {
          field: 'last_name',
          headerName: 'Last Name',
          width: 150,
          editable: true,
        },
        {
          field: 'phone_num',
          headerName: 'Phone Number',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'ref',
          headerName: 'Ref Number',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
        {
          field: 'status',
          headerName: 'Status',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
        {
          field: 'date',
          headerName: 'Date',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
        {
          field: 'image',
          headerName: 'Profile Avater',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 100,
          renderCell: (params) => {
            return (
              <>
                <button className= {tableEdit}>Edit</button>
                <DeleteOutline className='itemDelete' onClick={() => handleDelete(params.row.id)} />
              </>
            )
          }
        }
      ];

      
      // const rows = [
      //   {id:1, first_name:'Francis', last_name:"Akindejoye",phone_num:'08034879300', ref:'220360493-x', status:'active', date:'05-Sep-2021', image:"/images/icon-avata.svg"},
      //   {id:2, first_name:'Francis', last_name:"Akindejoye",phone_num:'08034879300', ref:'220360493-x', status:'active', date:'05-Sep-2021', image:"/images/icon-avata.svg"},
      //   {id:3, first_name:'Francis', last_name:"Akindejoye",phone_num:'08034879300', ref:'220360493-x', status:'active', date:'05-Sep-2021', image:"/images/icon-avata.svg"},
      //   {id:4, first_name:'Francis', last_name:"Akindejoye",phone_num:'08034879300', ref:'220360493-x', status:'active', date:'05-Sep-2021', image:"/images/icon-avata.svg"},
      //   {id:5, first_name:'Francis', last_name:"Akindejoye",phone_num:'08034879300', ref:'220360493-x', status:'active', date:'05-Sep-2021', image:"/images/icon-avata.svg"},





      //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
      //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
      //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
      //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      // ];

      const size = {
        height: '90vh',
        width: 'auto'
      }

    return (
        <div>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={20}
                checkboxSelection
                disableSelectionOnClick
                style = {size}
            />
            <input type="file" />
        </div>
    );
}
 
export default MaterialTable;

