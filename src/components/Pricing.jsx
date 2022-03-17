import React from 'react';
import { Link } from 'react-router-dom';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import Time from './common/Time';
import SubcriptionBoxFour from './common/SubcriptionBoxFour';
import SubcriptionBoxThree from './common/SubcriptionBoxThree';
import SubcriptionBoxTwo from './common/SubcriptionBoxTwo';
import SubcriptionBox from './common/SubcriptionBox';

import Price from '../css/Pricings.module.css'

const Pricing = () => {
    return (
        <>
            <div>
                <Header />
                <div className={Price.container}>
                    <Sidebar />
                    <section className={Price.main}>
                        <section className={Price.header}>
                            <p className={Price.mainHeader}>
                                Current Price Rate
                            </p>
                            <Time />
                        </section>
                        <section className={Price.subcriptionType}>
                            <Link to='pricingplan' className='link'>
                                <SubcriptionBox />
                            </Link>
                            <SubcriptionBoxTwo />
                            <SubcriptionBoxFour />
                            <SubcriptionBoxThree />
                        </section>
                        <Link to='/modifyprice'>
                            <div className={Price.btnContainer}>
                                <button className={Price.btnModify}>Modify Prices</button>
                            </div>
                        </Link>
                    </section>
                </div>
                
            </div>
        </>
    );
}
 
export default Pricing;