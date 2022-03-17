import Layout from '../../../layout/Layout';
import PageHeader from '../../pageHeader/PageHeader';
import Sheet from './templateDetails.module.css';

const TemplateDetails = () => {
    return ( 
        <Layout>
            <PageHeader />
            <div className={Sheet.templateWrapper}>
                <div className={Sheet.templateCentered}>
                    <div className={Sheet.templateHeader}>
                        <p className={Sheet.templateText}>
                            Templates Details
                        </p>
                        <div className={Sheet.templateImgBox}>
                            <button className={Sheet.templateDeleteBtn}>
                                <img src="/images/trash-red.svg" alt="Delete" className={Sheet.templateDeleteBtnImg} />
                            </button>
                            <button className={Sheet.templateCloseBtn}>
                                <img src="/images/close-x.svg" alt="Close" className={Sheet.templateCloseBtnImg} />
                            </button>
                        </div>
                    </div>
                    <div className={Sheet.templateTextBody}>
                        <div className={Sheet.createBox}>
                            <span className={Sheet.createText}>Created at:</span>
                            <span className={Sheet.createValue}>21/08/2021</span>
                        </div>
                        <div className={Sheet.senderBox}>
                            <span className={Sheet.senderText}>Sender I.D:</span>
                            <span className={Sheet.senderValue}>JAMB NG</span>
                            <img src="/images/sm-pen.svg" alt="Pen" className={Sheet.textPen} />
                        </div>
                        <div className={Sheet.contactsBox}>
                            <span className={Sheet.contactsText}>Contacts:</span>
                            <span className={Sheet.contactsValue}>N/A</span>
                            <img src="/images/sm-pen.svg" alt="Pen" className={Sheet.contactPen} />
                        </div>
                        <div className={Sheet.messageBox}>
                            <span className={Sheet.messageText}>Message:</span>
                            <span className={Sheet.messageValue}>
                                This is to inform you that the date for the 2021/2022 JAMB<br/>
                                examination has been postponed till further notice. During<br/>
                                this time of delay we encourage you to read and prepare<br/>
                                yourself for the examinatior as we all know you like<br/>
                                pressing your phone instead of reading.
                            </span>
                            <img src="/images/sm-pen.svg" alt="Pen" className={Sheet.messagePen} />
                        </div>
                        <div className={Sheet.templateButtonBox}>
                            <button className={Sheet.templateButton}>Send as message</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
     );
}
 
export default TemplateDetails;