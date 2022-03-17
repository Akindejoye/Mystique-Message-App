import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './common/Header';
import Admin from '../css/AdminLogIn.module.css';

const AdminLogin = () => {
    return (
        <>
            <div className={Admin.adminBox}>
                <div className={Admin.loginBox}>
                    <div className={Admin.containerCentered}>
                        <div className={Admin.logoCentered}>
                            <div className={Admin.logoBox}>
                                <img src="/images/logo-main.svg" alt="Logo" className={Admin.logo} />
                            </div>
                            <div className={Admin.logoTextBox}>
                                <p className={Admin.logoText1}>Mystique</p>
                                <p className={Admin.logoText2}>Sms</p>
                            </div>
                        </div>
                        <div className={Admin.adminCentered}>
                            <p className={Admin.adminText}>Admin Dashboard</p>
                            <div className={Admin.addAdminBox}>
                                <button className={Admin.adminBtnBox}>
                                    <img src="/images/btnPlus.svg" alt="" className={Admin.btnImg} />
                                </button>
                                <p className={Admin.textAdmin}>Add Admin</p>
                            </div>
                            <p className={Admin.textlogin}>Login</p>
                            <form>
                                <label htmlFor="email" className={Admin.emailLabel}>Email/Reference I.D</label><br />
                                <div className={Admin.emailBoxCentered}>
                                    <img src="/images/mail-black-icon.svg" alt="Email Box" className={Admin.emailIcon} />
                                    <input type="email" id='email' placeholder='Enter' className={Admin.emailInput} />
                                </div>
                                <label htmlFor="password" className={Admin.passwordLabel}>Password</label><br />
                                <div className={Admin.passBoxCentered}>
                                    <img src="/images/lock-icon.svg" alt="Password Box" className={Admin.passwordIcon} />
                                    <input type="email" id='password' placeholder='Enter' className={Admin.passwordInput} />
                                </div>
                                <div className={Admin.loginContainer}>
                                    <Link to='/adprofile'>
                                        <button className={Admin.loginBtn}>Login</button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default AdminLogin;