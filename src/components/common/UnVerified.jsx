import React from 'react';
import UnVerify from '../../css/UnVerifieds.module.css';

const Unverified = () => {
    return (
        <div className={UnVerify.profileBox}>
            <p className={UnVerify.statusTag}>Not verified</p>
            <div className={UnVerify.infoBox}>
                <img src="/images/profile-avatar-lady.svg" alt="Profile" className={UnVerify.profileImg} />
                <div className={UnVerify.nameBox}>
                    <p className={UnVerify.profileName}>Lynda Ikeji</p>
                    <p className={UnVerify.profileId}>09454533MYST33</p>
                </div>
            </div>
            <div className={UnVerify.personalBox}>
                <p className={UnVerify.profileEmail}>mistarfid@gmail.com</p>
                <p className={UnVerify.profileMobile}>2348085952266</p>
                <p className={UnVerify.date}>18/08/2021</p>
            </div>
        </div>
    );
}
 
export default Unverified;