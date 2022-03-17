import React from 'react';
import CardPlan from '../../css/CardPlanThree.module.css';

const CardPricingPlanTwo = () => {
    return (
        <div className={CardPlan.cardBox}>
                <div className={CardPlan.mostBox}>
                    <p className={CardPlan.cardText2}>Popular</p>
                </div>
            <div className={CardPlan.figureBox}>
                <p className={CardPlan.figure1}>10K - 49K</p>
                <p className={CardPlan.figure2}>230 subscribers</p>
            </div>
        </div>
    );
}
 
export default CardPricingPlanTwo;