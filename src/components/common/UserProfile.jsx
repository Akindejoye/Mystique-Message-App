import React from 'react';
import Profile from '../../css/UserProfiles.module.css';
import { SortingTable } from './SortingTable';

const UserProfile = () => {
    return (
        <div className={Profile.section}>
            <div className={Profile.sectionHeader}>
                <button className={Profile.btnHeader}>
                    <img src="/images/arrow-left-black.svg" alt="Arrow Left" />
                </button>
                <select className={Profile.select}>
                    <option className={Profile.option}>Action</option>
                    <option className={Profile.option}>Others</option>
                </select>
            </div>
            <section className={Profile.userDetails}>
                <div className={Profile.detailsBox}>
                    <div className={Profile.userBox}>
                        <img src="/images/profile-avatar.svg" alt="Avatar" />
                        <p className={Profile.userId}>I.D:1232344MYST3-2</p>
                    </div>
                    <div className={Profile.userBoxTwo}>
                        <p className={Profile.userName}>Agba Fidelis</p>
                        <p className={Profile.userSocail}>@mistarfid</p>
                        <p className={Profile.userEmail}>mistarfid@gmail.com</p>
                        <p className={Profile.userMobile}>2438085952266</p>
                    </div>
                </div>
                <div className={Profile.statusBox}>
                    <p className={Profile.statusGreen}>Verified</p>
                    <p className={Profile.statusRed}>Not Verified</p>
                </div>
            </section>
            <section className={Profile.accountInformation}>
                <div className={Profile.accountPlan}>
                    <div className={Profile.currentPlan}>
                        <p className={Profile.planNum}>500 - 999</p>
                        <p className={Profile.planText}>Current Plan</p>
                    </div>
                    <div className={Profile.planBalance}>
                        <p className={Profile.balanceNum}>101.00</p>
                        <p className={Profile.balanceText}>Units Balance</p>
                    </div>
                </div>
                <div className={Profile.planInfoBox}>
                    <p className={Profile.planTextBox}>
                        <span className={Profile.textParent}>Account Type:</span>
                        <span className={Profile.textChild}>Individual</span>
                    </p>
                    <p className={Profile.planTextBox}>
                        <span className={Profile.textParent}>User Type:</span>
                        <span className={Profile.textChild}>Personal</span>
                    </p>
                    <p className={Profile.planTextBox}>
                        <span className={Profile.textParent}>Status:</span>
                        <span className={Profile.textChild}>Active</span>
                    </p>
                    <p className={Profile.planTextBox}>
                        <span className={Profile.textParent}>Account Created At:</span>
                        <span className={Profile.textChild}>16/08/2021</span>
                    </p>
                    <p className={Profile.planTextBox}>
                        <span className={Profile.textParent}>Company Name:</span>
                        <span className={Profile.textChild}>N/A</span>
                    </p>
                    <p className={Profile.planTextBox}>
                        <span className={Profile.textParent}>Address:</span>
                        <span className={Profile.textChild}>
                            2343 Adeola Odeku, Victorial Island Lagos Nigeria
                        </span>
                    </p>
                </div>
            </section>
            <section className={Profile.messageHistory}>
                <p className={Profile.messageHistoryText}>Messages History</p>
                
                <div className={Profile.cardContainer}>
                    <div className={Profile.card1}>
                        <div className={Profile.cardImg}>
                            <img src="/images/single-check.svg" alt="All User" className={Profile.img}/>
                        </div>
                        <div className={Profile.cardText}>
                            <span className={Profile.text1}>1.9M</span>
                            <span className={Profile.text2}>SMS Sent</span>
                        </div>
                    </div>
                    <div className={Profile.card}>
                        <div className={Profile.cardImgs}>
                            <img src="/images/check-green.svg" alt="All User" className={Profile.img}/>
                            <img src="/images/check-green.svg" alt="All User" className={Profile.imgs}/>
                        </div>
                        <div className={Profile.cardText}>
                            <span className={Profile.text1}>1.1M</span>
                            <span className={Profile.text2}>Delivered</span>
                        </div>
                    </div>
                    <div className={Profile.card}>
                        <div className={Profile.cardImg3}>
                            <img src="/images/check-orange.svg" alt="All User" className={Profile.img}/>
                        </div>
                        <div className={Profile.cardText}>
                            <span className={Profile.text1}>1.6M</span>
                            <span className={Profile.text2}>Pending</span>
                        </div>
                    </div>
                    <div className={Profile.card}>
                        <div className={Profile.cardImg4}>
                            <img src="/images/check-cross.svg" alt="All User" className={Profile.img}/>
                        </div>
                        <div className={Profile.cardText}>
                            <span className={Profile.text1}>0.2M</span>
                            <span className={Profile.text2}>Failed</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className={Profile.paymentHistory}>
                <p className={Profile.paymentHistoryText}>Payment History</p>
                <SortingTable />
            </section>
        </div>
    );
}
 
export default UserProfile;