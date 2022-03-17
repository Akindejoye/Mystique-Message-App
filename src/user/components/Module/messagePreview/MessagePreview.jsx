import Layout from '../../../layout/Layout';
import PageHeader from '../../pageHeader/PageHeader';
import Shadow from './messagePreview.module.css';

const MessagePreview = () => {
    return ( 
        <Layout>
            <PageHeader />
            <div className={Shadow.previewWrapper}>
                <div className={Shadow.previewCentered}>
                    <div className={Shadow.previewHeaderBox}>
                        <div className={Shadow.headerTopBox}>
                            <h3 className={Shadow.headerTopText}>Preview Message</h3>
                            <button className={Shadow.headerCloseBtn}>
                                <img src="/images/close-x.svg" alt="Delete" className={Shadow.closeBtnImg} />
                            </button>
                        </div>
                        <p className={Shadow.headerBottomText}>View how your recipients will see this message</p>
                    </div>
                    <div className={Shadow.previewBodyBox}>
                        <div className={Shadow.senderBox}>
                            <span className={Shadow.senderText}>Sender I.D:</span>
                            <span className={Shadow.senderValue}>JAMB NG</span>
                        </div>
                        <div className={Shadow.timelineBox}>
                            <span className={Shadow.timelineText}>Timeline:</span>
                            <span className={Shadow.timelineValue}>
                                Wednesday, Sept.8,2021 02:00 PM
                            </span>
                        </div>
                        <div className={Shadow.messageBox}>
                            <span className={Shadow.messageText}>Message:</span>
                            <span className={Shadow.messageValue}>
                                This is to inform you that the date for the 2021/2022 JAMB<br/>
                                examination has been postponed till further notice. During<br/>
                                this time of delay we encourage you to read and prepare<br/>
                                yourself for the examination as we all know you like<br/>
                                pressing your phone instead of reading.
                            </span>
                            <span className={Shadow.messageSpan}>220/250 Pages:1</span>
                        </div>
                        <div className={Shadow.recipientsBox}>
                            <span className={Shadow.recipientsText}>Total Recipients:</span>
                            <span className={Shadow.recipientsValue}>244</span>
                        </div>
                        <div className={Shadow.requiredBox}>
                            <span className={Shadow.requiredText}>Required Credits:</span>
                            <span className={Shadow.requiredValue}>610 Units</span>
                        </div>
                        <div className={Shadow.creditsBox}>
                            <span className={Shadow.creditsText}>Available Credits:</span>
                            <span className={Shadow.creditsValue}>101 Units</span>
                            <span className={Shadow.creditsSpan}>Low on credit</span>
                        </div>
                        <div className={Shadow.previewBtnBox}>
                            <button className={Shadow.editBtn}>Edit Message</button>
                            <button className={Shadow.sendBtn}>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
     );
}
 
export default MessagePreview;