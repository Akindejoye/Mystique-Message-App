import React from 'react';
import CardPlan from '../../css/CardPlanFour.module.css';

const CardPricingPlanTwo = () => {
    return (
        <div className={CardPlan.cardBox}>
                <div className={CardPlan.mostBox}>
                    <p className={CardPlan.cardText1}>Not</p>
                    <p className={CardPlan.cardText2}>Popular</p>
                </div>
            <div className={CardPlan.figureBox}>
                <p className={CardPlan.figure1}>50K - 1M</p>
                <p className={CardPlan.figure2}>20 subscribers</p>
            </div>
        </div>
    );
}
 
export default CardPricingPlanTwo;