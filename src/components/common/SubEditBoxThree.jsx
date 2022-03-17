import React from 'react';
import SubEdit from '../../css/SubEditBoxsThree.module.css';

const SubcriptionBox = () => {
    return (
        <div className={SubEdit.subContainer}>
            <div className={SubEdit.subStatus}>
                <img src="/images/nearly-popular.svg" alt="Most Popular" className={SubEdit.subStatusImg} />
                <span className={SubEdit.subStatusText}>Nearly Popular</span>
            </div>
            <div className={SubEdit.subInfo}>
                <p className={SubEdit.subRange}>10,000-49,999</p>
                <input type="text" placeholder='NGN 0.00' className={SubEdit.subPriceEdit} />
                <p className={SubEdit.priceSpan}>/SMS</p>
                <button className={SubEdit.subEditbtn}>Save</button>
            </div>
        </div>
    );
}
 
export default SubcriptionBox;