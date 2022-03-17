import React from 'react';
import { Link } from 'react-router-dom';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import Time from './common/Time';
import { SortingTable } from './common/SortingTable';
import CardPricingPlan from './common/CardPricingPlan';
import CardPricingPlanTwo from './common/CardPricingPlanTwo';
import CardPricingPlanThree from './common/CardPricingPlanThree';
import CardPricingPlanFour from './common/CardPricingPlanFour';
import AllUsersColumnSub from './common/AllUsersColumnSub';
import PricePlan from '../css/PricingPlans.module.css';


const PricingPlan = () => {
    return (
        <>
            <div>
                <Header />
                <div className={PricePlan.container}>
                    <Sidebar />
                    <section className={PricePlan.main}>
                        <section className={PricePlan.headerTime}>
                            <Time />
                        </section>
                        <section className={PricePlan.planBox}>
                            <Link to='/pricing'>
                                <button className={PricePlan.btnBox}>
                                    <img src="/images/arrow-left-black.svg" alt="Botton" className={PricePlan.btnHeader} />
                                </button>
                            </Link>
                            <p className={PricePlan.mainHeaderText}>Users Payment Plans</p>
                        </section>
                        <section className={PricePlan.userCard}>
                           <CardPricingPlan />
                           <CardPricingPlanTwo />
                           <CardPricingPlanThree />
                           <CardPricingPlanFour />
                        </section>
                        <AllUsersColumnSub />
                        <section className={PricePlan.table}>
                            <SortingTable />
                        </section>
                    </section>                                                               
                </div>
            </div>
        </>
    );
}
 
export default PricingPlan;