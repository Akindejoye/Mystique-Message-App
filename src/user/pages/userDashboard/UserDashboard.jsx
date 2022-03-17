import Layout from '../../layout/Layout';
import Plank from './userDashboard.module.css';
import Unit from '../../components/unit/Unit';
import SmsStatistics from '../../components/smsStatistics/SmsStatistics';
import PageHeader from '../../components/pageHeader/PageHeader';

const UserDashboard = () => {
    return (
        <>
            <Layout>
                <PageHeader header='Analytics' />
                <Unit />
                <SmsStatistics />
            </Layout>
        </>
    );
}
 
export default UserDashboard;