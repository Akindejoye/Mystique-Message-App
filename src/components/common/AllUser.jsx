import React, { Component } from 'react';
import AllUserx from '../../css/AllUsers.module.css';

const AllUser = () => {
    return (
        <>
            <div className={AllUserx.card}>
                <div className={AllUserx.cardImg}>
                    <img src="/images/all-user-ash.svg" alt="All User" className={AllUserx.img}/>
                </div>
                <div className={AllUserx.cardText}>
                    <span className={AllUserx.text1}>1.9M</span>
                    <span className={AllUserx.text2}>All User</span>
                </div>
            </div>
        </>
    );
}
 
export default AllUser;