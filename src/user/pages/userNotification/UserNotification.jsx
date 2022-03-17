import DataFilter from '../../../components/common/dataFilter/DataFilter';
import PageHeader from '../../components/pageHeader/PageHeader';
import Layout from '../../layout/Layout';
import Alert from './userNotification.module.css';

const UserNotification = () => {
    return ( 
        <Layout>
            <PageHeader header='Notifications' />
            <div className={Alert.notificationWrapper}>
                <div className={Alert.notificationCentered}>
                    <div className={Alert.subHeader}>
                        <DataFilter />
                        <div className={Alert.subHeaderRight}>
                            <button className={Alert.hederClearBtn}>Clear All</button>
                            <button className={Alert.hederSelectBtn}>Select</button>
                        </div>
                    </div>
                    <div className={Alert.notificationTableWrapper}>
                        <h3 className={Alert.todaysHeader}>Today</h3>
                        <table className={Alert.tbToday}>
                            <tr className={Alert.trDy}>
                                <td className={Alert.tdDy}>Your message was successfully delivered to 244 contacts</td>
                                <td className={Alert.tdDy}>Sender I.D - JAMB NG</td>
                                <td className={Alert.tdDy}>3:15 pm</td>
                                <td className={Alert.tdDy}>17-08-2021</td>
                            </tr>
                            <tr className={Alert.trDy}>
                                <td className={Alert.tdDy}>Your message was successfully delivered to 244 contacts</td>
                                <td className={Alert.tdDy}>Sender I.D - JAMB NG</td>
                                <td className={Alert.tdDy}>3:15 pm</td>
                                <td className={Alert.tdDy}>17-08-2021</td>
                            </tr>
                            <tr className={Alert.trDy}>
                                <td className={Alert.tdDy}>Your message was successfully delivered to 244 contacts</td>
                                <td className={Alert.tdDy}>Sender I.D - JAMB NG</td>
                                <td className={Alert.tdDy}>3:15 pm</td>
                                <td className={Alert.tdDy}>17-08-2021</td>
                            </tr>
                            <tr className={Alert.trDy}>
                                <td className={Alert.tdDy}>Your message was successfully delivered to 244 contacts is pending</td>
                                <td className={Alert.tdDy}>Sender I.D - JAMB NG</td>
                                <td className={Alert.tdDy}>3:15 pm</td>
                                <td className={Alert.tdDy}>17-08-2021</td>
                            </tr>
                            <tr className={Alert.trDy}>
                                <td className={Alert.tdDy}>Your message payment was initiated successfully, go to your...</td>
                                <td className={Alert.tdDy}>System message</td>
                                <td className={Alert.tdDy}>3:15 pm</td>
                                <td className={Alert.tdDy}>17-08-2021</td>
                            </tr>
                        <h3 className={Alert.yesterdayHeader}>Yesterday</h3>
                            <tr className={Alert.trDy}>
                                <td className={Alert.tdDy}>Your account has been credited with 800 Units</td>
                                <td className={Alert.tdDy}>System message</td>
                                <td className={Alert.tdDy}>3:15 pm</td>
                                <td className={Alert.tdDy}>16-08-2021</td>
                            </tr>
                            <tr className={Alert.trDy}>
                                <td className={Alert.tdDy}>Your account is temporarily suspended, contact supp...</td>
                                <td className={Alert.tdDy}>System message</td>
                                <td className={Alert.tdDy}>3:15 pm</td>
                                <td className={Alert.tdDy}>16-08-2021</td>
                            </tr>
                            <tr className={Alert.trDy}>
                                <td className={Alert.tdDy}>Notification of price change</td>
                                <td className={Alert.tdDy}>Mystique support</td>
                                <td className={Alert.tdDy}>3:15 pm</td>
                                <td className={Alert.tdDy}>16-08-2021</td>
                            </tr>
                            <h3 className={Alert.otherDaysHeader}>Last 7 days</h3>
                            <tr className={Alert.trDy}>
                                <td className={Alert.tdDy}>Your account has been credited with 800 Units</td>
                                <td className={Alert.tdDy}>System message</td>
                                <td className={Alert.tdDy}>3:15 pm</td>
                                <td className={Alert.tdDy}>09-08-2021</td>
                            </tr>
                            <tr className={Alert.trDy}>
                                <td className={Alert.tdDy}>Your account is temporarily suspended, contact supp...</td>
                                <td className={Alert.tdDy}>System message</td>
                                <td className={Alert.tdDy}>3:15 pm</td>
                                <td className={Alert.tdDy}>09-08-2021</td>
                            </tr>
                            <tr className={Alert.trDy}>
                                <td className={Alert.tdDy}>Notification of price change</td>
                                <td className={Alert.tdDy}>Mystique support</td>
                                <td className={Alert.tdDy}>3:15 pm</td>
                                <td className={Alert.tdDy}>07-08-2021</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
     );
}
 
export default UserNotification;