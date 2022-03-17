import PageHeader from '../../components/pageHeader/PageHeader';
import PaymentPlan from '../../components/paymentPlan/PaymentPlan';
import Layout from '../../layout/Layout';
import Transact from './paymentPricing.module.css';
import { useState } from 'react';

const PaymentsPricing = () => {

    const [isPendingPayment, setIsPendingPayment] = useState(false);

    return ( 
        <Layout>
            <PageHeader header='Contacts' />
            <div className={Transact.pricingWrapper} style={{backgroundImage:`url("/images/back-payment.svg")`}}>
                <div className={Transact.pricingCentered}>
                    <div className={Transact.pricingHeaderBox}>
                        <div className={Transact.pricingHeaderSubBox}>
                            <h2 className={Transact.pricingHeader}>Simple, Transparent Pricing</h2>
                            <div className={Transact.pricingUnitsBox}>
                                <span className={Transact.pricingUnits}>00.00</span>
                                <span className={Transact.pricingUnitsText}>Units Available</span>
                            </div>
                        </div>
                        <h4 className={Transact.pricingSubHeader}>No contracts, No surprise fees</h4>
                    </div>
                    <section className={Transact.pricingMain}>
                        <div className={Transact.pricingPlanWrapper}>
                            <PaymentPlan range='NGN 500 - 999' amount='2.50 NGN' boxColor={{background: "#4b36d7"}} style={{background:'rgba(23, 216, 192, 0.25)', color:'#fff'}} paint={{color:'#fff'}} />
                            <PaymentPlan range='NGN 1000 - 9,999' amount='2.00 NGN' boxColor={{background: "#fff"}} style={{background:'rgba(235, 161, 91, 0.274)', color: '#EBA05B'}} />
                            <PaymentPlan range='NGN 10,000 - 49,000' amount='1.90 NGN' boxColor={{background: "#fff"}} style={{background:'rgba(235, 161, 91, 0.274)', color: '#EBA05B'}} />
                            <PaymentPlan range='NGN 50,000 - 999,999' amount='1.50 NGN' boxColor={{background: "#fff"}} style={{background:'rgba(235, 161, 91, 0.274)', color: '#EBA05B'}} />
                            <div className={Transact.pricingPlanBtnBox}>
                                <button className={Transact.pricingPlanBtn}>Proceed</button>
                            </div>
                        </div>
                        <div className={Transact.pricingPaymentWrapper}>
                            <h3 className={Transact.paymentHeader}>Payment Methods</h3>
                            <p className={Transact.paymentText}>
                                <span className={Transact.paymentSpan}>
                                    Payments can be made securely online with your ATM cards by choosing the Pay<br/>
                                    with Credit card option when processing an order.
                                </span>
                                <span className={Transact.paymentSpan}>
                                    Also payment can be made offline by printing out your payment order and using<br/>
                                    any nearby bank branch or ATM machine.
                                </span>
                                <span className={Transact.paymentSpan}>
                                    Successful payments are credited instantly
                                </span>
                            </p>
                            {
                                isPendingPayment && (
                                    <div className={Transact.pendingPaymentBox}>
                                        <p className={Transact.pendingPaymentText}>
                                            You have a pending payment transaction, click the button to enter transaction I.D<br/>
                                            to confirm and complete your payment.
                                        </p>
                                        <button className={Transact.pendingPaymentBtn}>Confirm payment</button>
                                    </div>
                                )
                            }
                        </div>
                    </section>
                        <div className={Transact.planHistoryBtnBox}>
                            <button className={Transact.planHistoryBtn}>View History</button>
                        </div>
                </div>
            </div>
        </Layout>
     );
}
 
export default PaymentsPricing;