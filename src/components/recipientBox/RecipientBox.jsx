import Number from './recipientBox.module.css';

const RecipientBox = () => {
    return (
        <div className={Number.boxInputNumber}>
           <div className={Number.boxWrapper}>
                <div className={Number.boxHeader}>
                    <div className={Number.boxHeader1}>
                        <span className={Number.headerEntry}>Manual Entry</span>
                        <select className={Number.headerSelect}>
                            <option className={Number.headerOption}>Select Contacts</option>
                        </select>
                    </div>
                    <div className={Number.boxHeader2}>
                        <input type="file" id='file' className={Number.inputBox} />
                        <label htmlFor="file" className={Number.uploadLabel}>
                            <img src="/images/group.svg" alt="Group Icon" className={Number.uploadIcon} />
                            <span className={Number.uploadText}>Upload CSV File</span>
                        </label>
                    </div>
                </div>
                <div className={Number.numberInputBox}>
                    <textarea
                        className={Number.numberInput} 
                        placeholder='Enter your recipient here.' />
                    <span className={Number.inputSpan}>
                        N/B: For bulk messaging, separate multiple numbers with comma, space or enter them on separate lines, duplicates will be sorted out automatically.
                    </span>
                </div>
           </div>
           <div className={Number.recipientMessageBox}>
            <h3 className={Number.recipientMessageText}>Message</h3>
                <div className={Number.messageBoxWrapper}>
                    <div className={Number.messageInputBox}>
                    <textarea
                        className={Number.messageInput} 
                        placeholder='Type your message here...' />
                        <span className={Number.messageInputSpan}>
                            0/250 Pages: 1
                        </span>
                    </div>
                </div>
           </div>
        </div>
    );
}
 
export default RecipientBox;