import PageHeader from '../../components/pageHeader/PageHeader';
import ProfileNavbar from '../../components/profileNavbar/ProfileNavbar';
import Layout from '../../layout/Layout';
import Alert from './notificationProfile.module.css';

const NotificationProfile = () => {
    return (
        <Layout>
            <PageHeader header='Profile' />
            <div className={Alert.noticeBox}>
                <div className={Alert.noticeBoxCentered}>
                    <ProfileNavbar />
                    <div className={Alert.noticeProfile}>
                        <div className={Alert.noticeProfileCentered}>
                            <h2 className={Alert.noticeHeader}>
                                Get notification for
                            </h2>
                            <div className={Alert.noticeFeature}>
                                <span className={Alert.noticeText}>Message failure</span>
                                <span>
                                    <input type="checkbox" className={Alert.checkInput} />
                                </span>
                            </div>
                            <div className={Alert.noticeFeature}>
                                <span className={Alert.noticeText}>Message Delivery</span>
                                <span><input type="checkbox" className={Alert.checkInput} /></span>
                            </div>
                            <div className={Alert.noticeFeature}>
                                <span className={Alert.noticeText}>Payment Status</span>
                                <span><input type="checkbox" className={Alert.checkInput} /></span>
                            </div>
                            <div className={Alert.noticeFeature}>
                                <span className={Alert.noticeText}>Dark Mode</span>
                                <span><input type="checkbox" className={Alert.checkInput} /></span>
                            </div>
                            <div className={Alert.inputSubmitBox}>
                                <input type="submit" value='Save' className={Alert.inputSubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
 
export default NotificationProfile;