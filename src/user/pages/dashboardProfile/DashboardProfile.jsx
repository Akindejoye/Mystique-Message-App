import PageHeader from '../../components/pageHeader/PageHeader';
import ProfileNavbar from '../../components/profileNavbar/ProfileNavbar';
import Layout from '../../layout/Layout';
import Profile from './dashboardProfile.module.css'

const DashboardProfile = () => {
    return (
        <>
            <Layout>
                <PageHeader header='Profile' />
                <div className={Profile.profileBox}>
                    <div className={Profile.profileBoxCentered}>
                        <ProfileNavbar />
                        <div className={Profile.dataProfile}>
                            <div className={Profile.dataProfileCentered}>
                                <div className={Profile.dataProfileC1}>
                                    <h1 className={Profile.dataProfileName}>Francis Akindejoye</h1>
                                    <div className={Profile.userBoxs}>
                                        <span className={Profile.userTexts}>Username:</span>
                                        <span className={Profile.userNames}>otunba</span>
                                    </div>
                                    <div className={Profile.emailBox}>
                                        <span className={Profile.emailText}>Email:</span>
                                        <span className={Profile.userEmail}>otunba@gmail.com</span>
                                    </div>
                                    <div className={Profile.phoneBox}>
                                        <span className={Profile.phoneText}>Phone:</span>
                                        <span className={Profile.phoneNumber}>2348085595226</span>
                                    </div>
                                    <span className={Profile.userId}>I.D: 1232344MYST3-2</span>
                                </div>
                                <div className={Profile.dataProfileC2}>
                                    <div className={Profile.imageBox}>
                                        <img src="/images/profile-pics.svg" alt="" className={Profile.userImg} />
                                    </div>
                                    <div className={Profile.statusBox}>
                                        <span className={Profile.statusText}>Status:</span>
                                        <span className={Profile.status}>Active</span>
                                    </div>
                                </div>
                                <div className={Profile.dataProfileC3}>
                                    <span className={Profile.unitFigure}>101.00</span>
                                    <span className={Profile.unitText}>Units Balance</span>
                                    <button className={Profile.btnUnit}>
                                        <span>+Top<br />Up</span>
                                    </button>
                                </div>
                            </div>
                            <div className={Profile.accountInfo}>
                            <div className={Profile.accountInfoCentered}>
                                <div className={Profile.accountBox}>
                                    <p className={Profile.typeText}>Account Type:</p>
                                    <p className={Profile.accountType}>Individual</p>
                                </div>
                                <div className={Profile.userBox}>
                                    <p className={Profile.userText}>User Type:</p>
                                    <p className={Profile.userType}>Personal</p>
                                </div>
                                <div className={Profile.createdBox}>
                                    <p className={Profile.createdText}>Account Created At:</p>
                                    <p className={Profile.createdDate}>16/08/2021</p>
                                </div>
                                <div className={Profile.companyBox}>
                                    <p className={Profile.companyName}>Company Name:</p>
                                    <p className={Profile.companyStatus}>n/a</p>
                                </div>
                                <div className={Profile.addressBox}>
                                    <p className={Profile.addressText}>Address:</p>
                                    <p className={Profile.address}>2343 Banana Island Ikoyi, Lagos, Nigeria</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </Layout>
        </>
    );
}
 
export default DashboardProfile;