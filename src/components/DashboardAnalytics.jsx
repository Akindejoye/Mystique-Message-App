import React, { Component } from 'react';
import Header from './common/Header';
import Analytics from '../css/DashboardAnalytic.module.css';
import Sidebar from './common/Sidebar';
import Time from './common/Time';
import UserInfographic from './common/UserInfographic';
import { SortingTable } from './common/SortingTable';

const DashboardAnalytics = () => {
    return (
        <>
            <div>
                <Header />
                <div className={Analytics.container}>
                    <Sidebar />
                    <section className={Analytics.main}>
                        <section className={Analytics.headerTime}>
                            <p className={Analytics.headerText}>Admin Dashboard</p>
                            <Time />
                        </section>
                        <section className={Analytics.userCentered}>
                            <section className={Analytics.userHeaderBox}>
                                <div className={Analytics.userActiveCentered}>
                                    <div className={Analytics.userCountBox}>
                                        <p className={Analytics.userCountText}>Users Count</p>
                                        <div className={Analytics.usersDataCentered}>
                                            <div className={Analytics.newUsersBox}>
                                                <p className={Analytics.newUserFig}>10,200</p>
                                                <p className={Analytics.newUserText}>New Users</p>
                                            </div>
                                            <div className={Analytics.allUsersBox}>
                                                <p className={Analytics.allUsersFig}>2.3M</p>
                                                <p className={Analytics.allUsersText}>All Users</p>
                                            </div>
                                            <div className={Analytics.notVevUsersBox}>
                                                <p className={Analytics.notVevUsersFig}>400</p>
                                                <p className={Analytics.notVevUsersText}>Not Verirfied</p>
                                            </div>
                                            <div className={Analytics.verifiedUsersBox}>
                                                <p className={Analytics.verifiedUsersFig}>2.3M</p>
                                                <p className={Analytics.verifiedUsersText}>Verified</p>
                                            </div>
                                    </div>
                                    </div>
                                    <div className={Analytics.activeUsersBox}>
                                        <p className={Analytics.activeUsersText}>Active Users</p>
                                        <div className={Analytics.daysActiveCentered}>
                                            <div className={Analytics.activeDays}>
                                                <div className={Analytics.activeDaysInner}>
                                                    <img src="/images/icon-gg.svg" alt="Icon" className={Analytics.activeDaysImg} />
                                                    <p className={Analytics.activeDaysFigure}>1.9M</p>
                                                </div>
                                                <p className={Analytics.activeDaysText}>Active for more than 60 days</p>
                                            </div>
                                            <div className={Analytics.InActiveDays}>
                                                <div className={Analytics.InActiveDaysInner}>
                                                    <img src="/images/icon-inag.svg" alt="Icon" className={Analytics.InActiveDaysImg} />
                                                    <p className={Analytics.InActiveDaysFigure}>0.4M</p>
                                                </div>
                                                <p className={Analytics.InActiveDaysText}>Inactive for more than 60 days</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section className={Analytics.infographic}>
                                    <UserInfographic />
                                    <div className={Analytics.messCon}>
                                        <h2 className={Analytics.messText}>Messages</h2>
                                        <select className={Analytics.messSelect}>
                                            <option className={Analytics.messOption}>Today</option>
                                            <option className={Analytics.messOption}>Others</option>
                                        </select>
                                    </div>
                                    <div className={Analytics.border}></div>
                                </section>
                                <SortingTable />
                            </section>
                            <section className={Analytics.performance}>
                                <div className={Analytics.profileInfo}>
                                    <img src="/images/profile-pics.svg" alt="Profile" className={Analytics.profileInfoImg} />
                                    <h2 className={Analytics.profileName}>Aminu Jasper</h2>
                                    <p className={Analytics.profileTitle}>Administrator</p>
                                    <button className={Analytics.updateProfile}>Update</button>
                                </div>

                                <div className={Analytics.performanceTimer}>
                                    <div className={Analytics.timerHeading}>
                                        <img src="/images/icon-smaltime.svg" alt="Time" className={Analytics.timerIcon} />
                                        <p className={Analytics.timerText}>Up Time</p>
                                    </div>
                                    <div className={Analytics.timerdisplay}>
                                        <span>14 :</span>
                                        <span>16 :</span>
                                        <span>34 :</span>
                                        <span>59</span>
                                    </div>
                                    <div className={Analytics.borderBottom}></div>
                                    <div className={Analytics.timerTrack}>
                                        <span>Days</span>
                                        <span>Hours</span>
                                        <span>Min</span>
                                        <span>Sec</span>
                                    </div>
                                </div>

                                <div className={Analytics.paymentsBox}>
                                    <div className={Analytics.paymentCentered}>
                                        <div className={Analytics.innerPaymentCentered}>
                                            <p className={Analytics.paymentText}>Total Payments</p>
                                            <p className={Analytics.paymentFig}>N924,250K</p>
                                        </div>
                                        <img src="/images/icon-paymen-chart.svg" alt="Chart" className={Analytics.paymentChart} />
                                    </div>
                                    <div className={Analytics.paymentBorder}></div>
                                    <div className={Analytics.paymentBottomCentered}>
                                        <p className={Analytics.paymentRecievText}>630 Payment Recieved</p>
                                        <p className={Analytics.paymentViewRepoText}>View Report</p>
                                    </div>
                                </div>

                                <div className={Analytics.userRatesBox}>
                                    <div className={Analytics.userRatesCentered}>
                                        <div className={Analytics.inneruserRatesCentered}>
                                            <p className={Analytics.userRatesText}>User Rates</p>
                                            <p className={Analytics.userRatesFig}>8.72%</p>
                                        </div>
                                        <img src="/images/icon-user-rate-chart.svg" alt="Chart" className={Analytics.userRatesChart} />
                                    </div>
                                    <div className={Analytics.userRatesBorder}></div>
                                    <div className={Analytics.userRatesBottomCentered}>
                                        <p className={Analytics.userTimeText}><img src="/images/icon-bullet-blue.svg" alt="Bullet" />First Time</p>
                                        <p className={Analytics.userReturnText}><img src="/images/icon-bullet-purple.svg" alt="Bullet" /> Returning</p>
                                    </div>
                                </div>

                                <div className={Analytics.timeAction}>
                                        <table className={Analytics.timeActionTable}>
                                            <tr>
                                                <th>Time</th>
                                                <th>Actions</th>
                                            </tr>
                                            <tr>
                                                <td>11:15</td>
                                                <td>
                                                    <p>New User sign up</p>
                                                    <p>Agba Fidelis</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>11:15</td>
                                                <td>
                                                    <p>New User sign up</p>
                                                    <p>James Cartone</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>11:15</td>
                                                <td>
                                                    <p>Payment received</p>
                                                    <p>N1500,230.00 Units</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>11:15</td>
                                                <td>
                                                    <p>Payment failed</p>
                                                    <p>Ibrahim Musa</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>11:15</td>
                                                <td>
                                                    <p>Returning User</p>
                                                    <p>Lastman Standin</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>11:15</td>
                                                <td>
                                                    <p>New User sign up</p>
                                                    <p>Olamide Olamilekan</p>
                                                </td>
                                            </tr>
                                        </table>
                                </div>
                            </section>
                        </section>
                    </section>
                </div>
            </div>
        </>
    );
}

 
export default DashboardAnalytics;