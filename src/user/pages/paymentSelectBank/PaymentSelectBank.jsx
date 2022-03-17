import OrderBank from '../../components/orderBank/OrderBank';
import PageHeader from '../../components/pageHeader/PageHeader';
import PaymentPlan from '../../components/paymentPlan/PaymentPlan';
import Layout from '../../layout/Layout';
import Deposit from './paymentSelectBank.module.css';
import { useState } from 'react';
import OrderTable from '../../components/orderTable/OrderTable';

const PaymentSelectBank = () => {

    const [orderBox, setOrderBox] = useState(false);
    const [payment, setPayment] = useState('offline');

    return ( 
        <Layout>
            <PageHeader header='Contacts' />
            <div className={Deposit.paymentSelectWrapper} style={{backgroundImage:`url("/images/back-payment-2.svg")`}}>
                <div className={Deposit.paymentSelectCentered}>
                    <div className={Deposit.paymentSelectHeaderBox}>
                        <div className={Deposit.paymentSelectHeaderSubBox}>
                            <h2 className={Deposit.paymentSelectHeader}>Payment Methods</h2>
                            <div className={Deposit.paymentSelectUnitBox}>
                                <span className={Deposit.paymentSelectUnit}>00.00</span>
                                <span className={Deposit.paymentSelectUnitsText}>Units Available</span>
                            </div>
                        </div>
                        <h4 className={Deposit.paymentSelectSubHeader}>Choose to pay securely</h4>
                    </div>
                    <div className={Deposit.changePlanBackBtnBox}>
                        <button className={Deposit.changePlanBackBtn}>
                            <img src="/images/arrow-left-black.svg" alt="Back Button" className={Deposit.changePlanBackBtnImg} />
                        </button>
                        <span className={Deposit.changePlanBackBtnText}>Change plan</span>
                    </div>
                        <div className={Deposit.transactDetails}>
                            <div className={Deposit.inputBox}>
                                <input 
                                    type="radio"
                                    checked={payment === 'offline'}
                                    value='offline' 
                                    onChange={(e) => setPayment(e.target.value)} 
                                    id='radio-1'
                                    className={Deposit.inputRadOne} 
                                />
                                <label htmlFor="radio-1" className={Deposit.labelOff}>Offline Payment</label>
                            </div>
                            <div className={Deposit.inputBox}>
                                <input 
                                    type="radio"
                                    checked={payment === 'card'} 
                                    value='card'
                                    onChange={(e) => setPayment(e.target.value)}
                                    id='radio-2'
                                    className={Deposit.inputRadTwo} 
                                />
                                <label htmlFor="radio-2" className={Deposit.labelCard}>Pay With Card</label>
                            </div>
                            <div className={Deposit.paymentBox}>
                                <PaymentPlan range='NGN 500 - 999' amount='2.50 NGN' boxColor={{background: "#4b36d7"}} style={{background:'rgba(23, 216, 192, 0.25)', color:'#fff'}} paint={{color:'#fff'}} />
                            </div>
                        </div>
                        {
                            payment === 'offline' ? (
                                <section className={Deposit.orderinfo}>
                                    <h3 className={Deposit.orderHeader}>Select your bank</h3>
                                    <div className={Deposit.orderBankBox}>
                                        <div className={Deposit.orderBankCentered}>
                                            <OrderBank
                                                image = "/images/logo_gtb.svg"
                                                name = 'GTBank' 
                                                text = 'Pay to GTBank account'
                                            />
                                            <OrderBank
                                                image = "/images/logo_eco.svg"
                                                name = 'EcoBank' 
                                                text = 'Pay to Ecobank account'
                                            />
                                            <OrderBank
                                                image = "/images/logo_uba.svg"
                                                name = 'UBA Bank' 
                                                text = 'Pay to UBA bank account'
                                            />
                                            <OrderBank
                                                image = "/images/logo_zenith.svg"
                                                name = 'Zenith Bank' 
                                                text = 'Pay to Zenith account'
                                            />
                                            <OrderBank
                                                image = "/images/logo_kuda.svg"
                                                name = 'Kuda Bank' 
                                                text = 'Pay to Kuda account'
                                            />
                                        </div>
                                        {/* <div className={Deposit.orderInfoBreakDown}>
                                            <h4 className={Deposit.orderSubHeader}>Order Break down</h4>
                                            {
                                                orderBox ? (
                                                <div className={Deposit.orderBox}>
                                                    <h4 className={Deposit.orderInsideHeader}>Order Break down</h4>
                                                    <div className={Deposit.orderImgBox}>
                                                        <img src="images/contacts.svg" alt="Empty Content" className={Deposit.orderImg} />
                                                    </div>
                                                </div>
                                                ) : (
                                                // <div className={Deposit.orderBox}>
                                                //     <h4 className={Deposit.orderInsideHeader}>Order Break down</h4>
                                                //     <OrderTable />
                                                //     <div className={Deposit.printBtnBox}>
                                                //         <button className={Deposit.printBtn}>Print</button>
                                                //     </div>
                                                // </div>
                                                )
                                            }
                                        </div> */}
                                        <div className={Deposit.confirmBox}>
                                            <h3 className={Deposit.paymentHeader}>Confirm payment</h3>
                                            <p className={Deposit.paymentText}>
                                                Enter your transaction I.D here after making payment to confirm after which your Account<br/>
                                                will be credited with equivalent units.
                                            </p>
                                            <input type="text" placeholder='Enter Transacton I.D' className={Deposit.paymentInput} />
                                            <div className={Deposit.paymentBtnBox}>
                                                <button type='submit' className={Deposit.paymentBtn}>Confirm</button>
                                            </div>
                                            <span className={Deposit.paymentTextAside}>
                                                N/B. You can close this page and get back to it to confirm payment at a later time.
                                            </span>
                                        </div>
                                    </div>
                                </section>
                            ):
                            (
                                <section className={Deposit.payCard}>
                                    <div className={Deposit.payCardLeft}>
                                        <h3 className={Deposit.leftHeader}>Pay conviniently and securely with your bank card</h3>
                                        <h2 className={Deposit.leftSubHeader}>Saved Cards</h2>
                                        <div className={Deposit.cardType}>
                                            <div className={Deposit.cardTypeCentered}>
                                                <img src="/images/mastercard.svg" alt="Mastercard" className={Deposit.cardLogoImg} />
                                                <div className={Deposit.cardInfo}>
                                                    <span className={Deposit.cardNumber}>**** **** **** 3214</span>
                                                    <span className={Deposit.cardExp}>Exp. 12/2023</span>
                                                    <span className={Deposit.cardOwner}>Francis Akindejoye</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Deposit.cardCheck}>
                                            <input type="checkbox" className={`${Deposit.optionInput} ${Deposit.checkbox}`}  />
                                        </div>
                                    </div>
                                    <div className={Deposit.payCardRight}>
                                        <div className={Deposit.newCardBtnBox}>
                                            <button className={Deposit.newCardBtn}>
                                                <img src="/images/cross-blue.svg" alt="Button" />
                                                <span className={Deposit.newCardBtnText}>Add New Card</span>
                                            </button>
                                        </div>
                                        <h2 className={Deposit.rightHeader}>Order Details</h2>
                                        <div className={Deposit.orderBox2}>
                                            <h4 className={Deposit.orderInsideHeader}>Order Break down</h4>
                                            <OrderTable />
                                        </div>
                                            <div className={Deposit.printBtnBox}>
                                                <button className={Deposit.printBtn}>Print</button>
                                            </div>
                                    </div>
                                </section>
                            )
                        }
                        <div className={Deposit.planHistoryBtnBox}>
                            <button className={Deposit.planHistoryBtn}>View History</button>
                        </div>
                </div>
            </div>
        </Layout>
     );
}
 
export default PaymentSelectBank;