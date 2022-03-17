import { BsListTask } from 'react-icons/bs';
import { MdOutlineGridView } from 'react-icons/md';
import ListHeader from '../../../components/common/listHeader/ListHeader';
import PageHeader from '../../components/pageHeader/PageHeader';
import Layout from '../../layout/Layout';
import Parcel from './messagesAllList.module.css';
import AllCardBox4 from './../../../components/common/AllcardBox4/AllCardBox4';
import AllCardBox3 from '../../../components/common/allCardBox3/AllCardBox3';
import AllCardBox1 from './../../../components/common/allCardBox1/AllCardBox1';
import DataFilter from '../../../components/common/dataFilter/DataFilter';
import { MessageTable } from '../../../components/common/tableMessage/MessageTable';
import TableBox from '../../components/tableBox/TableBox';
import { useState } from 'react';
import AllCardSent from '../../../components/common/allCardSent/AllCardSent';

const MessagesAllList = () => {

    const [isInfo, setIsInfo] = useState(false);
    const [isSentCard, setSentCard] = useState(false);

    const handleClick = () => {
        setSentCard(true);
        console.log('Sent btn is click');
    }

    return (
        <Layout>
            <PageHeader header = 'Messages' />
            <div className={Parcel.listMain}>
                <ListHeader text='New Message' />
                <section className={Parcel.statusCard}>
                    <div className={Parcel.statusCardCentered}>
                        <AllCardSent handleClick={handleClick} />
                        <AllCardBox3 />
                        <AllCardBox1 />
                        <AllCardBox4 />
                    </div>
                </section>
                <section className={Parcel.filterData}>
                    <DataFilter />
                </section>
                <div className={Parcel.btnBox}>
                    <button 
                        className={Parcel.btnData}
                        onClick={() => setIsInfo(!isInfo)}>
                        {isInfo ?<BsListTask className={Parcel.btnList} />:
                        <MdOutlineGridView className={Parcel.btnList} />}
                    </button>
                </div>
                {
                    !isInfo ?(<MessageTable />):
                    (
                        <div className={Parcel.tableBoxPositioned}>
                            <TableBox />
                            <TableBox />
                            <TableBox />
                            <TableBox />
                            <TableBox />
                            <TableBox />
                            <TableBox />
                            <TableBox />
                        </div>
                    )
                }
               
            </div>
        </Layout>
    );
}
 
export default MessagesAllList;