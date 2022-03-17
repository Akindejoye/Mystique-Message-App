import React from 'react';
import Header from './common/Header';
import UserList from '../css/UsersAllLists.module.css';
import Time from './common/Time';
import Sidebar from './common/Sidebar';
import AllUser from './common/AllUser';
import NewUser from './common/NewUser';
import Active from './common/Active';
import Inactive from './common/Inactive';
import { UsersTable } from './common/UsersTable';
import { SortingTable } from './common/SortingTable';
import AllUsersColumn from './common/AllUsersColumn';
import MaterialTable from './common/MaterialTable';

const UsersAllList = () => {

    return (
        <>
            <div>
                <Header />
                <div className={UserList.container}>
                    <Sidebar />
                    <section className={UserList.main}>
                        <section className={UserList.header}>
                            <p className={UserList.mainHeader}>Platform Users</p>
                            <Time />
                        </section>
                        <section className={UserList.userCard}>
                            <AllUser />
                            <NewUser />
                            <Active />
                            <Inactive />
                        </section>
                        <AllUsersColumn />
                        {/* <MaterialTable /> */}
                        <section className={UserList.table}>
                            {/* <UsersTable /> */}
                            <SortingTable />
                        </section>
                    </section>                                                               
                </div>
            </div>
        </>
    );
}
 
export default UsersAllList;