import PageHeader from '../../components/pageHeader/PageHeader';
import Layout from '../../layout/Layout';
import Stories from './paymentHistory.module.css';

const PaymentHistory = () => {
    return ( 
        <Layout>
            <PageHeader header='Contacts' />
            <div className={Stories.historyWrapper} style={{backgroundImage:`url("/images/back-payment.svg")`}}>
                <div className={Stories.historyCentered}>
                    <div className={Stories.historyHeaderBox}>
                        <div className={Stories.headerLeft}>
                            <h1 className={Stories.header}>Payment History</h1>
                            <h3 className={Stories.subHeader}>Here are details of your transactions over time</h3>
                        </div>
                        <div className={Stories.headerRight}>
                            <span className={Stories.balanceFig}>101.00</span>
                            <span className={Stories.balanceText}>Units Balance</span>
                            <button className={Stories.topUpBtn}>
                                <span className={Stories.top}>+ Top</span>
                                <span className={Stories.up}>Up</span>
                            </button>
                        </div>
                    </div>
                    <div className={Stories.historyTableBox}>
                        <table className={Stories.hisTb}>
                            <tr className={Stories.hisTr}>
                                <th className={Stories.hisTh}></th>
                                <th className={Stories.hisTh}>TRANSACTION</th>
                                <th className={Stories.hisTh}>Payment Method</th>
                                <th className={Stories.hisTh}>AMOUNT</th>
                                <th className={Stories.hisTh}>STATUS</th>
                                <th className={Stories.hisTh}>Transaction I.D</th>
                                <th className={Stories.hisTh}>Date</th>
                            </tr>
                            <tr className={Stories.hisTr}>
                                <td height='1.5rem' width='1.5rem' className={Stories.hisTd}><img src="/images/profile-avatar.svg" alt="Profile" className={Stories.cashImg} /></td>
                                <td className={Stories.hisTd}>Payment for 800 Units</td>
                                <td className={Stories.hisTd}>Offline payment</td>
                                <td className={Stories.hisTd}>2,000 NGN</td>
                                <td className={Stories.hisTd}>Success</td>
                                <td className={Stories.hisTd}>OF2334353555-2232</td>
                                <td className={Stories.hisTd}>Jun 24, 2021</td>
                            </tr>
                            <tr className={Stories.hisTr}>
                                <td className={Stories.hisTd}><img src="/images/profile-avatar.svg" alt="Profile" className={Stories.cashImg} /></td>
                                <td className={Stories.hisTd}>Payment for 2000 Units</td>
                                <td className={Stories.hisTd}>Offline payment</td>
                                <td className={Stories.hisTd}>4,000 NGN</td>
                                <td className={Stories.hisTd}>Failed</td>
                                <td className={Stories.hisTd}>OF2334353555-2345</td>
                                <td className={Stories.hisTd}>July 14, 2021</td>
                            </tr>
                            <tr className={Stories.hisTr}>
                                <td className={Stories.hisTd}><img src="/images/profile-avatar.svg" alt="Profile" className={Stories.cashImg} /></td>
                                <td className={Stories.hisTd}>Payment for 50,000 Units</td>
                                <td className={Stories.hisTd}>Card Payment</td>
                                <td className={Stories.hisTd}>75,000 NGN</td>
                                <td className={Stories.hisTd}>Processing</td>
                                <td className={Stories.hisTd}>carf2334353555-3421</td>
                                <td className={Stories.hisTd}>Aug 24, 2021</td>
                            </tr>
                            <tr className={Stories.hisTr}>
                                <td className={Stories.hisTd}><img src="/images/profile-avatar.svg" alt="Profile" className={Stories.cashImg} /></td>
                                <td className={Stories.hisTd}>Payment for 800 Units</td>
                                <td className={Stories.hisTd}>Offline payment</td>
                                <td className={Stories.hisTd}>2,000 NGN</td>
                                <td className={Stories.hisTd}>Success</td>
                                <td className={Stories.hisTd}>OF2334353555-2232</td>
                                <td className={Stories.hisTd}>Jun 24, 2021</td>
                            </tr>
                            <tr className={Stories.hisTr}>
                                <td className={Stories.hisTd}><img src="/images/profile-avatar.svg" alt="Profile" className={Stories.cashImg} /></td>
                                <td className={Stories.hisTd}>Payment for 2000 Units</td>
                                <td className={Stories.hisTd}>Offline payment</td>
                                <td className={Stories.hisTd}>4,000 NGN</td>
                                <td className={Stories.hisTd}>Failed</td>
                                <td className={Stories.hisTd}>OF2334353555-2345</td>
                                <td className={Stories.hisTd}>July 14, 2021</td>
                            </tr>
                            <tr className={Stories.hisTr}>
                                <td className={Stories.hisTd}><img src="/images/profile-avatar.svg" alt="Profile" className={Stories.cashImg} /></td>
                                <td className={Stories.hisTd}>Payment for 50,000 Units</td>
                                <td className={Stories.hisTd}>Card Payment</td>
                                <td className={Stories.hisTd}>75,000 NGN</td>
                                <td className={Stories.hisTd}>Processing</td>
                                <td className={Stories.hisTd}>carf2334353555-3421</td>
                                <td className={Stories.hisTd}>Aug 24, 2021</td>
                            </tr>
                            <tr className={Stories.hisTr}>
                                <td className={Stories.hisTd}><img src="/images/profile-avatar.svg" alt="Profile" className={Stories.cashImg} /></td>
                                <td className={Stories.hisTd}>Payment for 800 Units</td>
                                <td className={Stories.hisTd}>Offline payment</td>
                                <td className={Stories.hisTd}>2,000 NGN</td>
                                <td className={Stories.hisTd}>Success</td>
                                <td className={Stories.hisTd}>OF2334353555-2232</td>
                                <td className={Stories.hisTd}>Jun 24, 2021</td>
                            </tr>
                            <tr className={Stories.hisTr}>
                                <td className={Stories.hisTd}><img src="/images/profile-avatar.svg" alt="Profile" className={Stories.cashImg} /></td>
                                <td className={Stories.hisTd}>Payment for 2000 Units</td>
                                <td className={Stories.hisTd}>Offline payment</td>
                                <td className={Stories.hisTd}>4,000 NGN</td>
                                <td className={Stories.hisTd}>Failed</td>
                                <td className={Stories.hisTd}>OF2334353555-2345</td>
                                <td className={Stories.hisTd}>July 14, 2021</td>
                            </tr>
                            <tr className={Stories.hisTr}>
                                <td className={Stories.hisTd}><img src="/images/profile-avatar.svg" alt="Profile" className={Stories.cashImg} /></td>
                                <td className={Stories.hisTd}>Payment for 50,000 Units</td>
                                <td className={Stories.hisTd}>Card Payment</td>
                                <td className={Stories.hisTd}>75,000 NGN</td>
                                <td className={Stories.hisTd}>Processing</td>
                                <td className={Stories.hisTd}>carf2334353555-3421</td>
                                <td className={Stories.hisTd}>Aug 24, 2021</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
     );
}
 
export default PaymentHistory;