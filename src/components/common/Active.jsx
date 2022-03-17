import React, { Component } from 'react';
import Activex from '../../css/Actives.module.css';

const Active = () => {
    return (
        <>
            <div className={Activex.card}>
                <div className={Activex.cardImg}>
                    <img src="/images/active-green.svg" alt="All User" className={Activex.img}/>
                </div>
                <div className={Activex.cardText}>
                    <span className={Activex.text1}>1.9M</span>
                    <span className={Activex.text2}>Active</span>
                </div>
            </div>
        </>
    );
}
 
export default Active;