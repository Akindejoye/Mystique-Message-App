import React from 'react';
import Verify from '../../css/Verifieds.module.css';

const Verified = () => {
    return (
        <div className={Verify.profileBox}>
            <p className={Verify.statusTag}>verified</p>
            <div className={Verify.infoBox}>
                <img src="/images/small-profile-avatar.svg" alt="Profile" className={Verify.profileImg} />
                <div className={Verify.nameBox}>
                    <p className={Verify.profileName}>Agba Fidelis</p>
                    <p className={Verify.profileId}>09454533MYST33</p>
                </div>
            </div>
            <div className={Verify.personalBox}>
                <p className={Verify.profileEmail}>mistarfid@gmail.com</p>
                <p className={Verify.profileMobile}>2348085952266</p>
                <p className={Verify.date}>18/08/2021</p>
            </div>
        </div>
    );
}
 
export default Verified;