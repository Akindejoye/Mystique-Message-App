import { Link } from 'react-router-dom';
import Sideba from './userSidebar.module.css';
import Logo from './icon/i-logo-blue.svg';
import BtnClose from './icon/i-btn-close.svg';
import Board from './icon/i-dashboard-blue.svg';
import Message from './icon/i-message-grey.svg';
import BulkMessage from './icon/i-message-grey.svg';
import Contact from './icon/i-contacts-grey.svg';
import Payment from './icon/i-payments-grey.svg';
import Support from './icon/i-support-grey.svg';
import Logout from './icon/i-logout-grey.svg';
import Floor from './icon/i-ground-shine.svg';

const UserSidebar = () => {

    return (
        <div className={Sideba.sidebar}>
            <div className={Sideba.sidebarTop}>
                <img src={Logo} alt="Logo" className={Sideba.logo} />
                <img src={BtnClose} alt="Button" className={Sideba.btnClose} />
                <img src={Floor} alt="Background" className={Sideba.shine} />
            </div>
            <div className={Sideba.sidebarCenter}>
                <ul className={Sideba.list}>
                    <li className={ `${Sideba.listItem} ${Sideba.active}` }>
                        <img src={Board} alt="Dashboard" className={ `${Sideba.dashboard} ${Sideba.listItemIcon}` } />
                        <Link to="/userDashboard" className= "link">
                            <span className={Sideba.listItemText}>Dashboard</span>
                        </Link>
                    </li>
                    <li className={Sideba.listItem}>
                        <img src={Message} alt="Dashboard" className={ `${Sideba.message} ${Sideba.listItemIcon}` } />
                        <Link to="/messagesalllist" className= "link">
                            <span className={Sideba.listItemText}>Messages</span>
                        </Link>
                    </li>
                    <li className={Sideba.listItem}>
                        <img src={BulkMessage} alt="Dashboard" className={ `${Sideba.message} ${Sideba.listItemIcon}` } />
                        <Link to="/bulkmessages" className= "link">
                            <span className={Sideba.listItemText}>Bulk Messages</span>
                        </Link>
                    </li>
                    <li className={Sideba.listItem}>
                        <img src={Contact} alt="Dashboard" className={ `${Sideba.contact} ${Sideba.listItemIcon}` } />
                        <Link to="/contactempty" className= "link">
                            <span className={Sideba.listItemText}>Contacts</span>
                        </Link>
                    </li>
                    <li className={Sideba.listItem}>
                        <img src={Payment} alt="Dashboard" className={ `${Sideba.payment} ${Sideba.listItemIcon}` } />
                        <Link to='/paymentpricing' className= "link">
                            <span className={Sideba.listItemText}>Payments</span>
                        </Link>
                    </li>
                    <li className={Sideba.listItem}>
                        <img src={Support} alt="Dashboard" className={ `${Sideba.support} ${Sideba.listItemIcon}` } />
                        <Link to='/support' className= "link">
                            <span className={Sideba.listItemText}>Support</span>
                        </Link>
                    </li>
                    <li className={Sideba.listItem}>
                        <img src={Logout} alt="Dashboard" className={ `${Sideba.logout} ${Sideba.listItemIcon}` } />
                        <span className={Sideba.listItemText}>Logout</span>
                    </li>
                </ul>
            </div>
            {/* <div className={Sideba.sidebarBottom}>
                <div className={ `${Sideba.colorBox} ${Sideba.dark}` }></div>
                <div className={ `${Sideba.colorBox} ${Sideba.night}` }></div>
                <div className={ `${Sideba.colorBox} ${Sideba.light}` }></div>
            </div> */}
        </div>
    );
}
 
export default UserSidebar;