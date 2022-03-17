import React from 'react';
import SubThree from '../../css/SubThree.module.css';

const SubcriptionBoxThree = () => {
    return (
        <div className={SubThree.subContainer}>
            <div className={SubThree.subStatus}>
                <img src="/images/not-popular.svg" alt="Most Popular" className={SubThree.subStatusImg} />
                <span className={SubThree.subStatusText}>Not popular</span>
            </div>
            <div className={SubThree.subInfo}>
                <p className={SubThree.subRange}>50,000-999,999</p>
                <p className={SubThree.subPrice}>1.50 NGN </p>
                <p className={SubThree.priceSpan}>/SMS</p>
                <p className={SubThree.subCapacity}>20 subscribers</p>
            </div>
        </div>
    );
}
 
export default SubcriptionBoxThree;