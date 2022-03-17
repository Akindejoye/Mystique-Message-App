import React, { Component } from 'react';
import Inactivex from '../../css/Inactives.module.css';

const Inactive = () => {
    return (
        <>
            <div className={Inactivex.card}>
                <div className={Inactivex.cardImg}>
                    <img src="/images/all-user-ash.svg" alt="All User" className={Inactivex.img}/>
                </div>
                <div className={Inactivex.cardText}>
                    <span className={Inactivex.text1}>1.9M</span>
                    <span className={Inactivex.text2}>Inactive</span>
                </div>
            </div>
        </>
    );
}
 
export default Inactive;