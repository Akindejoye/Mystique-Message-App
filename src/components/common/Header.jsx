import React from 'react';
import { NotificationsNone, Person  } from '@material-ui/icons';
import Head from '../../css/Headers.module.css';

const Header = () => {
    return (
        <>
            <div>
                <header className={Head.header}>
                    <div className={Head.logobtnBox}>
                        <img src="/images/logo-main.svg" alt="Logo" className={Head.logo} />
                        <button className={Head.btnHeader}>
                            <img src="/images/icon-btn-nav.svg" alt="Button" className={Head.btnImage} />
                        </button>
                    </div>
                    <div className={Head.headerIcon}>
                        <img src="/images/icon-notification.svg" alt="Icon Notification" className={Head.note} />
                        <span className={Head.icon1Span}>7</span>
                        <img src="/images/icon-avata.svg" alt="Icon Avater" className={Head.avater} />
                    </div>
                </header>
            </div>
        </>
    );
}
 
export default Header;