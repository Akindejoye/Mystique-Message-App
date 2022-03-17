import React from 'react';
import SubEdit from '../../css/SubEditsBoxFour.module.css';

const SubcriptionBox = () => {
    return (
        <div className={SubEdit.subContainer}>
            <div className={SubEdit.subStatus}>
                <img src="/images/not-popular.svg" alt="Not Popular" className={SubEdit.subStatusImg} />
                <span className={SubEdit.subStatusText}>Not Popular</span>
            </div>
            <div className={SubEdit.subInfo}>
                <p className={SubEdit.subRange}>50,000-999,999</p>
                <input type="text" placeholder='NGN 0.00' className={SubEdit.subPriceEdit} />
                <p className={SubEdit.priceSpan}>/SMS</p>
                <button className={SubEdit.subEditbtn}>Save</button>
            </div>
        </div>
    );
}
 
export default SubcriptionBox;