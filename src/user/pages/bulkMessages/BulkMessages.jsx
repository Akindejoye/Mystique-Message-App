import ListHeader from '../../../components/common/listHeader/ListHeader';
import PageHeader from '../../components/pageHeader/PageHeader';
import Layout from '../../layout/Layout';
import Parcel from './bulkMessages.module.css';
import AllCardBox4 from '../../../components/common/AllcardBox4/AllCardBox4';
import AllCardBox3 from '../../../components/common/allCardBox3/AllCardBox3';
import AllCardBox2 from '../../../components/common/allCardSent/AllCardSent';
import AllCardBox1 from '../../../components/common/allCardBox1/AllCardBox1';
import DataFilter from '../../../components/common/dataFilter/DataFilter';
import { MessageTable } from '../../../components/common/tableMessage/MessageTable';

const MessagesAllList = () => {
    return (
        <Layout>
            <PageHeader header = 'Messages' />
            <div className={Parcel.listMain}>
                <ListHeader text ='New Bulk Message' />
                <section className={Parcel.statusCard}>
                    <div className={Parcel.statusCardCentered}>
                        <AllCardBox2 />
                        <AllCardBox3 />
                        <AllCardBox1 />
                        <AllCardBox4 />
                    </div>
                </section>
                <section className={Parcel.filterData}>
                    <DataFilter />
                </section>
                <MessageTable />
            </div>
        </Layout>
    );
}
 
export default MessagesAllList;