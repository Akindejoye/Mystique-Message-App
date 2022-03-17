import Signal from './deleteWarningSent.module.css';

const DeleteWarningSent = () => {
    return ( 
        <>
            <div className={Signal.warningSentWrapper}>
                <div className={Signal.sentCloseBox}>
                    <img src="images/close-x.svg" alt="Close Butoon" className={Signal.sentCloseBtn} />
                </div>
                <div className={Signal.warningSentCentered}>
                    <img src="/images/succes-box.svg" alt="Success" className={Signal.warningSentImg} />
                    <p className={Signal.sentMessage}>
                        message successfully sent
                    </p>
                </div>
            </div>
        </>
     );
}
 
export default DeleteWarningSent;