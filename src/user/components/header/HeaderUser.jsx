import Top from './headerUser.module.css';
import Question from './question.svg';
import Notificate from './notification.svg';
import Profile from './profile.svg';
import { Link } from 'react-router-dom';

const HeaderUser = () => {
    return (
        <div className={Top.headerBox}>
            <div className={Top.headerCentered}>
                <div className={Top.questionBox}>
                    <img src={Question} alt="Qusestion Icon" className={Top.questionIcon} />
                </div>
                <div className={Top.notificationBox}>
                    <img src={Notificate} alt="Notification Icon" className={Top.notificationIcon} />
                </div>
                <div className={Top.profileBox}>
                    <Link to='/userprofile'>
                        <img src={Profile} alt="Profile Icon" className={Top.profileIcon} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default HeaderUser;