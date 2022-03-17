import React from 'react';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import Time from './common/Time';
import AllUser from './common/AllUser';
import NewUser from './common/NewUser';
import Active from './common/Active';
import Inactive from './common/Inactive';
import Tile from '../css/UserAllTile.module.css';
import AllUsersColumn from './common/AllUsersColumn';
import Verified from './common/Verified';
import Unverified from './common/UnVerified';

const UserAllTitles = () => {
    return (
        <>
        <div>
            <Header />
            <div className={Tile.container}>
                <Sidebar />
                <section className={Tile.main}>
                    <section className={Tile.header}>
                        <p className={Tile.mainHeader}>
                            Platform Users
                        </p>
                        <Time />
                    </section>
                        <section className={Tile.userCard}>
                            <AllUser />
                            <NewUser />
                            <Active />
                            <Inactive />
                        </section>
                        <AllUsersColumn />
                        <section className={Tile.information}>
                            <Verified />
                            <Verified />
                            <Unverified />
                            <Verified />
                            <Verified />

                            <Verified />
                            <Verified />
                            <Unverified />
                            <Verified />
                            <Verified />

                            <Verified />
                            <Verified />
                            <Unverified />
                            <Verified />
                            <Verified />

                            <Verified />
                            <Verified />
                            <Unverified />
                            <Verified />
                            <Verified />

                           <div className={Tile.pagination}>
                           <button className={Tile.btn1}>1</button>
                            <button className={Tile.btn2}>2</button>
                           </div>
                        </section>
                </section>
            </div>
        </div>
    </>
    );
}
 
export default UserAllTitles;