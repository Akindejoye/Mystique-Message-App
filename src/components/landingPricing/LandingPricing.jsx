import FooterHome from '../common/footerHome/FooterHome';
import NavbarHome from '../common/navbarHome/NavbarHome';
import LandPrice from './landingPricing.module.css';

const LandingPricing = () => {
    return (
        <>
            <div className={LandPrice.wrapper}>
                <div className={LandPrice.container}>
                    <div className={LandPrice.header}>
                        <NavbarHome />
                        <div className={LandPrice.headerTextBox}>
                            <div className={LandPrice.headerTextCentered}>
                                <h1 className={LandPrice.textHeader}>Less Price for Priceless</h1>
                                <h3 className={LandPrice.textSubHeader}>"Better soup na money kill am"</h3>
                                <p className={LandPrice.text}>
                                        Yes, it takes plenty of resources to create quality products hence<br />
                                    paying for such products also cost money but not with us, we<br />
                                    deliver quality for less, we want you to be able to reach as many<br />
                                    people as possible to also get whatever you have going for you<br />
                                    going as far and fast as possible.
                                </p>
                                <h2 className={LandPrice.textRecommends}>Why not, get going, you're on the right app</h2>
                                <button className={LandPrice.headerTexBtn2}>Get started already</button>
                            </div>
                        </div>
                        <div className={LandPrice.backgroundImageBox}>
                            <img src="images/triangle-background1.svg" alt="Background" className={LandPrice.backgroundImage1} />
                            <img src="images/triangle-background1.svg" alt="Background" className={LandPrice.backgroundImage2} />
                            <img src="images/triangle-background1.svg" alt="Background" className={LandPrice.backgroundImage4} />
                        </div>
                    </div>
                    <section className={LandPrice.priceRates}>
                        <div className={LandPrice.priceRatesCentered}>
                            <h2 className={LandPrice.priceRatesHeader}>Our current price rates</h2>
                            <div className={LandPrice.priceRatesItems}>
                                <div className={LandPrice.priceRatesUnitBox}>
                                    <div className={LandPrice.priceRatesUnitUR}>
                                        <h3 className={LandPrice.unitRate}>1000 - 9,999 Units</h3>
                                        <h2 className={LandPrice.unitPrice}>2.00 ngn</h2>
                                        <h4 className={LandPrice.unit}>Per SMS</h4>
                                    </div>
                                    <div className={LandPrice.priceRatesUnit}>
                                        <h3 className={LandPrice.unitRate}>500 - 999 Units</h3>
                                        <h2 className={LandPrice.unitPrice}>2.50 ngn</h2>
                                        <h4 className={LandPrice.unit}>Per SMS</h4>
                                    </div>
                                    <div className={LandPrice.priceRatesUnitImgBox}>
                                        <img src="/images/price-image.svg" alt="Price" className={LandPrice.priceRatesUnitImg} />
                                    </div>
                                    <div className={LandPrice.priceRatesUnitBL}>
                                        <h3 className={LandPrice.unitRate}>50,000 - 999,999 Units</h3>
                                        <h2 className={LandPrice.unitPrice}>1.50 ngn</h2>
                                        <h4 className={LandPrice.unit}>Per SMS</h4>
                                    </div>
                                    <div className={LandPrice.priceRatesUnitBR}>
                                        <h3 className={LandPrice.unitRate}>10,000 - 49,000 Units</h3>
                                        <h2 className={LandPrice.unitPrice}>1.90 ngn</h2>
                                        <h4 className={LandPrice.unit}>Per SMS</h4>
                                    </div>
                                </div>
                            </div>
                            <section className={LandPrice.tablePaymentPlan}>
                                <div className={LandPrice.tablePlanBox}>
                                    <table className={LandPrice.tableStyle}>
                                        <tr className={LandPrice.tableStyleRow}>
                                            <th className={LandPrice.tableStyleHeader}>Payment Plan</th>
                                            <th className={LandPrice.tableStyleHeader}>Discount</th>
                                            <th className={LandPrice.tableStyleHeader}>Percentage</th>
                                            <th className={LandPrice.tableStyleHeader}>Reach</th>
                                        </tr>
                                        <tr className={LandPrice.tableStyleRow}>
                                            <td className={LandPrice.tableStyleRowColumn}>500 - 999 units</td>
                                            <td className={LandPrice.tableStyleRowColumn}></td>
                                            <td className={LandPrice.tableStyleRowColumn}>0%</td>
                                            <td className={LandPrice.tableStyleRowColumn}>FAF</td>
                                        </tr>
                                        <tr className={LandPrice.tableStyleRow}>
                                            <td className={LandPrice.tableStyleRowColumn}>1000 - 9,999 units</td>
                                            <td className={LandPrice.tableStyleRowColumn}><img src="/images/table-checkmark.svg" alt="Mark" /></td>
                                            <td className={LandPrice.tableStyleRowColumn}>10%</td>
                                            <td className={LandPrice.tableStyleRowColumn}>Area</td>
                                        </tr>
                                        <tr className={LandPrice.tableStyleRow}>
                                            <td className={LandPrice.tableStyleRowColumn}>10,000 - 49,000 units</td>
                                            <td className={LandPrice.tableStyleRowColumn}><img src="/images/table-checkmark.svg" alt="Mark" /></td>
                                            <td className={LandPrice.tableStyleRowColumn}>15%</td>
                                            <td className={LandPrice.tableStyleRowColumn}>Region</td>
                                        </tr>
                                        <tr className={LandPrice.tableStyleRow}>
                                            <td className={LandPrice.tableStyleRowColumn}>50,000 - 999,999 units</td>
                                            <td className={LandPrice.tableStyleRowColumn}><img src="/images/table-checkmark.svg" alt="Mark" /></td>
                                            <td className={LandPrice.tableStyleRowColumn}>35%</td>
                                            <td className={LandPrice.tableStyleRowColumn}>Champaign</td>
                                        </tr>
                                    </table>
                                </div>
                            </section>
                            <section className={LandPrice.paymentMethod}>
                                <div className={LandPrice.paymentMethodCentered}>
                                    <div className={LandPrice.paymentTextBox}>
                                        <h2 className={LandPrice.paymentMethodHeader}>Payment Methods</h2>
                                        <p className={LandPrice.paymentMethodText1}>Payments can be made securely online with your ATM cards by choosing the Pay<br/>
                                            with Credit card option when processing an order. 
                                        </p>
                                        <p className={LandPrice.paymentMethodText2}>
                                            Also payment can be made offline by printing out your payment order and using<br />
                                            any nearby bank branch or ATM machine.
                                        </p>
                                        <p className={LandPrice.paymentMethodText3}>Successful payments are credited instantly.</p>
                                    </div>
                                    <div className={LandPrice.paymentImgBox}>
                                        <img src="/images/payment-image.svg" alt="Payment" className={LandPrice.paymentImg} />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                    <FooterHome />
                </div>
            </div>
        </>
    );
}
 
export default LandingPricing;