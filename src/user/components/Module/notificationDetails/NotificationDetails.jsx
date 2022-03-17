import More from './notificationDetails.module.css';

const NoficationDetails = () => {
    return ( 
        <div className={More.noteWrapper}>
            <div className={More.noteCentered}>
                <div className={More.noteHeader}>
                    <div className={More.noteHeaderLeftBox}>
                        <span className={More.noteTag}>Nofication</span>
                        <span className={More.noteTime}>3.15PM</span>
                    </div>
                    <div className={More.noteHeaderRightBox}>
                        <button className={More.headerDeletBtn}>
                            <img src="/images/trash-red.svg" alt="Delete Button" className={More.headerDeletBtnImg} />
                        </button>
                        <button className={More.headerCloseBtn}>
                            <img src="/images/close-x.svg" alt="Close Button" className={More.headerCloseBtnImg} />
                        </button>
                    </div>
                </div>
                    <p className={More.noteText}>
                        Your message was successfully sent to 244 contact
                    </p>
                    <h3 className={More.noteSubHeader}>Details</h3>
                    <div className={More.detailSenderBox}>
                        <span className={More.senderTag}>Sender I.D:</span>
                        <span className={More.sender}>Jamb Ng</span>
                    </div>
                    <div className={More.detailContactsBox}>
                        <span className={More.contactTag}>Contacts:</span>
                        <span className={More.contact}>244</span>
                    </div>
                    <div className={More.detailMessageBox}>
                        <span className={More.messageTag}>Message:</span>
                        <span className={More.message}>
                            This is to inform you that the date for the 2021/2022 JAMB<br/>
                            examination has been postponed till further notice. During<br />
                            this time of delay we encourage you to read and prepare<br/>
                            yourself for the examination as we all know you like<br/>
                            pressing your phone instead of reading.
                        </span>
                    </div>
                    <div className={More.detailDateBox}>
                        <span className={More.dateTag}>Date:</span>
                        <span className={More.date}>21/08/2021</span>
                    </div>
            </div>
        </div>
     );
}
 
export default NoficationDetails;