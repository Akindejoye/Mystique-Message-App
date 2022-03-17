import AllUsersColumn from '../common/AllUsersColumnSub';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import Time from '../common/Time';
import Manage from './manageMessage.module.css';
import { SortingTable } from './../common/SortingTable';
import SendCard from './cards/sentCard/SendCard';
import DeliveredCard from './cards/deliveredCard/DeliveredCard';
import Pending from './cards/pending/Pending';
import Failed from './cards/failed/Failed';


const ManageMessage = () => {
    return (
        <>
            <div>
                <Header />
                <div className={Manage.container}>
                    <Sidebar />
                    <section className={Manage.main}>
                        <section className={Manage.header}>
                            <p className={Manage.mainHeader}>
                                Manage Messages
                            </p>
                            <Time />
                        </section>
                        <section className={Manage.messageCard}>
                            <SendCard />
                            <DeliveredCard />
                            <Pending />
                            <Failed />
                        </section>
                        <AllUsersColumn />
                        <section className= {Manage.table}>
                            <SortingTable />
                        </section>
                    </section>
                </div>
            </div>
        </>
    );
}
 
export default ManageMessage;