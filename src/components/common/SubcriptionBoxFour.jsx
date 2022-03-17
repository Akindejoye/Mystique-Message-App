import React from 'react';
import SubFours from '../../css/SubFour.module.css';

const SubcriptionBoxFour = () => {
    return (
        <div className={SubFours.subContainer}>
            <div className={SubFours.subStatus}>
                <img src="/images/nearly-popular.svg" alt="Most Popular" className={SubFours.subStatusImg} />
                <span className={SubFours.subStatusText}>Nearly popular</span>
            </div>
            <div className={SubFours.subInfo}>
                <p className={SubFours.subRange}>10,000-49,999</p>
                <p className={SubFours.subPrice}>1.90 NGN </p>
                <p className={SubFours.priceSpan}>/SMS</p>
                <p className={SubFours.subCapacity}>230 subscribers</p>
            </div>
        </div>
    );
}
 
export default SubcriptionBoxFour;