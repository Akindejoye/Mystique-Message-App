import React from 'react';
import SubT from '../../css/SubTwo.module.css';

const SubcriptionBox = () => {
    return (
        <div className={SubT.subContainer}>
            <div className={SubT.subStatus}>
                <img src="/images/popular.svg" alt="Most Popular" className={SubT.subStatusImg} />
                <span className={SubT.subStatusText}>Most popular</span>
            </div>
            <div className={SubT.subInfo}>
                <p className={SubT.subRange}>1000-9,999</p>
                <p className={SubT.subPrice}>2.00 NGN </p>
                <p className={SubT.priceSpan}>/SMS</p>
                <p className={SubT.subCapacity}>510 subscribers</p>
            </div>
        </div>
    );
}
 
export default SubcriptionBox;