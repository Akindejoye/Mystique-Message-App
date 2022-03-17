import React from 'react';
import Sub from '../../css/SubBox.module.css';

const SubcriptionBox = () => {
    return (
        <div className={Sub.subContainer}>
            <div className={Sub.subStatus}>
                <img src="/images/most-popular.svg" alt="Most Popular" className={Sub.subStatusImg} />
                <span className={Sub.subStatusText}>Most popular</span>
            </div>
            <div className={Sub.subInfo}>
                <p className={Sub.subRange}>500-999</p>
                <p className={Sub.subPrice}>2.50 NGN </p>
                <p className={Sub.priceSpan}>/SMS</p>
                <p className={Sub.subCapacity}>112,000 subscribers</p>
            </div>
        </div>
    );
}
 
export default SubcriptionBox;