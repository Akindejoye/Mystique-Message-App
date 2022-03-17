import React from 'react';
import CardPlan from '../../css/CardPlanTwo.module.css';

const CardPricingPlanTwo = () => {
    return (
        <div className={CardPlan.cardBox}>
                <div className={CardPlan.mostBox}>
                    <p className={CardPlan.cardText1}>Nearly</p>
                    <p className={CardPlan.cardText2}>Popular</p>
                </div>
            <div className={CardPlan.figureBox}>
                <p className={CardPlan.figure1}>1000 - 9,999</p>
                <p className={CardPlan.figure2}>510K subscribers</p>
            </div>
        </div>
    );
}
 
export default CardPricingPlanTwo;