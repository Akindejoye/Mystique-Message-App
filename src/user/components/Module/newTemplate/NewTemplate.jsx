import Chasis from './newTemplate.module.css';

const NewTemplate = ({ handleClose }) => {


    return ( 
            <div className={Chasis.templateWrapper}>
                <div className={Chasis.templateCentered}>
                    <div className={Chasis.templateHeaderBox}>
                        <h3 className={Chasis.templateHeaderText}>Create New Template</h3>
                        <button className={Chasis.templateCloseBtn} onClick={handleClose}>
                            <img src="/images/close-x.svg" alt="Delete" className={Chasis.closeBtnImg} />
                        </button>
                    </div>
                    <p className={Chasis.templateWords}>
                        Create templates to send messages in few clicks
                    </p>
                    <div className={Chasis.templateUploadBox}>
                        <label htmlFor="upload" className={Chasis.uploadLabel}> Upload CSV File</label>
                        <input type="file" id='upload' className={Chasis.templateUpload} />
                    </div>
                    <div className={Chasis.templateSenderBox}>
                        <input 
                            type="text" 
                            placeholder='Sender I.D'
                            className={Chasis.templateSender} 
                        />
                    </div>
                    <div className={Chasis.templateMessageBox}>
                        <input 
                            type="textarea" 
                            placeholder='Message'
                            className={Chasis.templateMessage} 
                        />
                    </div>
                    <div className={Chasis.templateCreateBtnBox}>
                        <button className={Chasis.templateCreateBtn}>Create</button>
                    </div>
                </div>
            </div>
     );
}
 
export default NewTemplate;