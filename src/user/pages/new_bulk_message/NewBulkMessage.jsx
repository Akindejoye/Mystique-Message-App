import ListHeaderPlain from '../../../components/common/listHeaderPlain/ListHeaderPlain';
import RecipientBox from '../../../components/recipientBox/RecipientBox';
import SendID from '../../../components/sendID/SendID';
import PageHeaderBtn from '../../components/pageheaderbtn/PageHeaderBtn';
import Layout from '../../layout/Layout';
import Ping from './newBulkMessage.module.css';

const NewMessageSN = () => {
    return (
        <Layout>
            <PageHeaderBtn header="New Message" />
            <div className={Ping.wrapper}>
                <ListHeaderPlain />
                <SendID />
                <RecipientBox />
                <div className={Ping.btnBox}>
                    <button className={Ping.btnReset}>
                        Reset All Fields
                    </button>
                    <button className={Ping.btnPreview}>
                        Preview Message
                    </button>
                </div>
            </div>
        </Layout>
    );
}
 
export default NewMessageSN;