import Header from '../common/Header';
import Settings from './adminSettings.module.css';
import Sidebar from './../common/Sidebar';
import Time from '../common/Time';

const AdminSettings = () => {
    return (
        <>
            <div>
                <Header />
                <div className={Settings.container}>
                    <Sidebar />
                    <section className={Settings.main}>
                        <section className={Settings.header}>
                            <p className={Settings.mainHeader}>Settings</p>
                            <Time />
                        </section>
                        <section className={Settings.userContainer}>
                            <div className={Settings.userCentered}>
                                <div className={Settings.userBox}>
                                    <h3 className={Settings.userHeader}>User</h3>
                                </div>
                                <div className={Settings.others}></div>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </>
    );
}
 
export default AdminSettings;