import React from 'react';
import { Link } from 'react-router-dom';
import Side from '../../css/Sidebars.module.css';

const Sidebar = () => {
    return (
        <>
            <div className={Side.sidebarContainer}>
                <ul className={Side.sidebarNav}>
                    <li className={Side.navList}>
                        <Link to="adlogin" className={Side.navA}
                        activeClassName='active'>
                            <div className={`${Side.navInnerDiv} ${Side.navMargin}`}>
                                <img src="/images/Dashboard.svg" alt="Dashboard" className={Side.navImg} />
                                <span className={`${Side.navText} ${Side.navTextDash}`}>Dashboard</span>
                            </div>
                        </Link>
                    </li>
                    <li className={Side.navList}>
                        <b className={Side.activeb}></b>
                        <Link exact={true} to="/user" activeClassName='active' className={Side.navA} >
                            <div className={Side.navInnerDiv}>
                                <img src="/images/users-ash.svg" alt="User" className={` ${Side.navImg} ${Side.navImgUser}`} />
                                <span className={Side.navText}>Users</span>
                            </div>
                        </Link>
                    </li>
                    <li className={Side.navList}>
                        <b className={Side.activeb}></b>
                        <Link exact={true} to="/managemessage" activeClassName='active' className={Side.navA} >
                            <div className={Side.navInnerDiv}>
                                <img src="/images/message-sidebar-blue.svg" alt="Message" className={` ${Side.navImg} ${Side.navImgUser}`} />
                                <span className={Side.navText}>Message</span>
                            </div>
                        </Link>
                    </li>
                    <li className={Side.navList}>
                        <Link to="/pricing" className={Side.navA} 
                        activeClassName="active">
                            <div className={Side.navInnerDiv}>
                                <img src="/images/pricing-ash.svg" alt="Pricing" className={` ${Side.navImg} ${Side.navImgUser}`} />
                                <span className={Side.navText} active>Pricing</span>
                            </div>
                        </Link>
                    </li>
                    <li className={Side.navList}>
                        <Link to="/adminsettings" activeClassName="active" className={Side.navA}>
                            <div className={Side.navInnerDiv}>
                                <img src="/images/settings-ash.svg" alt="Settings" className={` ${Side.navImg} ${Side.navImgUser}`} />
                                <span className={Side.navText}>Settings</span>
                            </div>
                        </Link>
                    </li>
                    <li className={Side.navList}>
                        <Link to="/settings" activeClassName="active" className={Side.navA}>
                            <div className={Side.navInnerDiv}>
                                <img src="/images/logout-sidebar.svg" alt="Logout" className={` ${Side.navImg} ${Side.navImgUser}`} />
                                <span className={Side.navText}>Logout</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
 
export default Sidebar;