import React from 'react';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import Time from './common/Time';
import SubEditBox from './common/SubEditBox';
import SubEditBoxTwo from './common/SubEditBoxTwo';
import SubEditBoxThree from './common/SubEditBoxThree';
import SubEditBoxFour from './common/SubEditBoxFour';

import PriceEdite from '../css/PriceEdits.module.css';

const PriceEdit = () => {
    return (
        <>
            <div>
                <Header />
                <div className={PriceEdite.container}>
                    <Sidebar />
                    <section className={PriceEdite.main}>
                        <section className={PriceEdite.header}>
                            <p className={PriceEdite.mainHeader}>
                                Current Price Rate
                            </p>
                            <Time />
                        </section>
                        <section className={PriceEdite.subcriptionType}>
                           <SubEditBox />
                           <SubEditBoxTwo />
                           <SubEditBoxThree />
                           <SubEditBoxFour />
                        </section>
                    </section>
                </div>
                
            </div>
        </>
    );
}
 
export default PriceEdit;