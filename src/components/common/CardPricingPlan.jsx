import React from 'react';
import CardPlan from '../../css/CardPricePlan.module.css';

const CardPricingPlan = () => {
    return (
        <div className={CardPlan.cardBox}>
                <div className={CardPlan.mostBox}>
                    <p className={CardPlan.cardText1}>Most</p>
                    <p className={CardPlan.cardText2}>Popular</p>
                </div>
            <div className={CardPlan.figureBox}>
                <p className={CardPlan.figure1}>500 - 999</p>
                <p className={CardPlan.figure2}>112K subscribers</p>
            </div>
        </div>
    );
}
 
export default CardPricingPlan;