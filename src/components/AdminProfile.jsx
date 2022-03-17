import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../css/AdminProfiles.module.css';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import Time from './common/Time';

const AdminProfile = () => {
    return (
        <>
            <div>
                <Header />
                <div className={Profile.container}>
                    <Sidebar/>
                    <section className={Profile.main}>
                        <section className={Profile.headerTime}>
                            <p className={Profile.headerText}>Admin User</p>
                            <Time />
                        </section>
                        <section className={Profile.adminCentered}>
                            <section className={Profile.adminDetais}>
                                <p className={Profile.detailsText}>Admin Details</p>
                                <div className={Profile.headerInfoBox}>
                                    <img src="/images/profile-pics.svg" alt="Profile" className={Profile.imgProfile} />
                                    <img src="/images/gold.svg" alt="Background" className={Profile.backgroundImg} />
                                    <p className={Profile.profileName}>Aminu Jasper</p>
                                    <p className={Profile.profileTitle}>Administrator</p>
                                    <img src="/images/bluegrey.svg" alt="Background" className={Profile.backgroundImg2} />
                                </div>
                                <div className={Profile.accessLevelBox}>
                                    <div className={Profile.titleWords}>
                                        <p>Qualification:</p>
                                        <span>Chief Technical Officer</span>
                                    </div>
                                    <div className={Profile.permyWords}>
                                        <p>Permissions:</p>
                                        <span>Edit, Review, delete, deactivate, freeze</span>
                                    </div>
                                    <div className={Profile.refWords}>
                                        <p>Reference Number:</p>
                                        <span>23044455MySt-0023</span>
                                    </div>
                                    <div className={Profile.dateWords}>
                                        <p>Addes date:</p>
                                        <span>18/08/2021</span>
                                    </div>
                                </div>
                                <div>
                                    <button className={Profile.btnEdit}>Edit</button>
                                </div>
                            </section>
                            <section className={Profile.adminEvents}>
                                <div className={Profile.eventsCentered}>
                                        <Link to='/addadmin'>
                                            <button className={Profile.addAdminBtnBox}>
                                                <img src="/images/btnPlus.svg" alt="Button" className={Profile.addAdminBtnImg} />
                                                <p className={Profile.addAdminText}>Add Admin</p>
                                            </button>
                                        </Link>
                                        <Link to='/adduser'>
                                            <button className={Profile.addUserBtnBox}>
                                                <img src="/images/new-btn-plus.svg" alt="Button" className={Profile.addUserBtnImg} />
                                                <p className={Profile.addUserText}>Add User</p>
                                            </button>
                                        </Link>
                                        <Link to="/analytics">
                                            <button className={Profile.viewAnalBtn}>
                                                <img src="/images/icon-ana.svg" alt="Icon" className={Profile.analImg} />
                                                <p className={Profile.viewAnalText}>View Analytics</p>
                                            </button>
                                         </Link>
                                        <button className={Profile.viewUserBtn}>
                                            <img src="/images/icon-gg.svg" alt="icon" className={Profile.viewUserBtnImg} />
                                            <p className={Profile.viewUserText}>View All Users</p>
                                        </button>
                                    <button className={Profile.viewActiveBtn}>
                                        <img src="/images/icon-ag.svg" alt="icon" className={Profile.viewActiveBtnImg} />
                                        <p className={Profile.viewActiveText}>View Active Users</p>
                                    </button>
                                    <button className={Profile.viewInActiveBtn}>
                                        <img src="/images/icon-inag.svg" alt="icon" className={Profile.viewInActiveBtnImg} />
                                        <p className={Profile.viewInActiveText}>View Inactive Users</p>
                                    </button>
                                    <button className={Profile.viewSuspendBtn}>
                                        <img src="/images/icon-sp.svg" alt="icon" className={Profile.viewSuspendBtnImg} />
                                        <p className={Profile.viewSuspendText}>View Suspend Users</p>
                                    </button>
                                    <Link to='resetpassword'>
                                        <button className={Profile.managePasswordBtn}>
                                            <img src="/images/icon-mp.svg" alt="icon" className={Profile.managePasswordBtnImg} />
                                            <p className={Profile.managePasswordText}>Manage password</p>
                                        </button>
                                    </Link>
                                </div>
                                <div className={Profile.alertBox}>
                                    <p className={Profile.alertText}>Alerts</p>
                                        <button className={Profile.alertBtn}>
                                            <img src="/images/icon-vs.svg" alt="Icon" className={Profile.alertBtnImg} />
                                        </button>
                                </div>
                            </section>
                        </section>
                    </section>
                </div>
            </div>
        </>
    );
}
 
export default AdminProfile;