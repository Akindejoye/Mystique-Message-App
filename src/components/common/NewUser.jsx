import React, { Component } from 'react';
import NewUserx from '../../css/NewUsers.module.css';

const NewUser = () => {
    return (
        <>
            <div className={NewUserx.card}>
            <div className={NewUserx.cardImg}>
                    <img src="/images/new-user-blue.svg" alt="All User" className={NewUserx.img}/>
                </div>
                <div className={NewUserx.cardText}>
                    <span className={NewUserx.text1}>100.9M</span>
                    <span className={NewUserx.text2}>New Users</span>
                </div>
            </div>
        </>
    );
}
 
export default NewUser;