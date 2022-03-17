import React from 'react';
import Header from './common/Header';
import UserDetail from '../css/UserDetails.module.css';
import Sidebar from './common/Sidebar';
import Time from './common/Time';
import UserProfile from './common/UserProfile';

const UsersDetails = () => {
    return (
        <>
            <div>
                <Header />
                <div className={UserDetail.container}>
                    <Sidebar />
                    <section className={UserDetail.main}>
                        <section className={UserDetail.header}>
                            <p className={UserDetail.mainHeader}>
                                User Details
                            </p>
                            <Time />
                        </section>
                        <section className={UserProfile.profile}>
                            <UserProfile />
                        </section>
                    </section>
                </div>
            </div>
        </>
    );
}
 
export default UsersDetails;