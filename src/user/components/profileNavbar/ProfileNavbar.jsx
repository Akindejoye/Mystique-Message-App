import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock, faBell, faPencilAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import NavPro from './profileNavbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';

const ProfileNavbar = () => {

    const [isActive, setIsActive] = useState(true)

    return (
        <div className={NavPro.navProfileWrapper}>
            <div className={NavPro.navProfileCentered}>
                <ul className={NavPro.navProfile}>
                        <li className={`${NavPro.listProfile} ${NavPro.detailsHover}`}>
                        <FontAwesomeIcon icon={faUserAlt} className={NavPro.lock} />
                            <Link to='/userprofile' className='link'>
                                <span className={NavPro.profileItems}>Profile Details</span>
                            </Link>
                        </li>
                    <li className={`${NavPro.listProfile} ${NavPro.editHover}`}>
                    <FontAwesomeIcon icon={faPencilAlt} className={NavPro.lock} />
                        <Link to='/editprofile' className='link'>
                            <span className={NavPro.profileItems}>Edit Profile</span>
                        </Link>
                    </li>
                    <li className={`${NavPro.listProfile} ${NavPro.notificationHover}`}>
                    <FontAwesomeIcon icon={faBell} className={NavPro.lock} />
                    <Link to='/notificationprofile' className='link'>
                        <span className={NavPro.profileItems}>Notification</span>
                    </Link>
                    </li>
                    <li className={`${NavPro.listProfile} ${NavPro.securityHover}`}>
                        <FontAwesomeIcon icon={faLock} className={NavPro.lock} />
                        <Link to='/editsecurity' className='link'>
                            <span className={NavPro.profileItems}>Password & Security</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProfileNavbar;