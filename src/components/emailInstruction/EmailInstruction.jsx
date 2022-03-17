import Instruct from './emailInstruction.module.css';

const EmailInstruction = () => {
    return (
        <div className={Instruct.wrapper}>
            <div className={Instruct.contentWrapper}>
                <div className={Instruct.backtoMainBox}>
                    <img src="/images/icon-arrow-left.svg" alt="Arrow Left" className={Instruct.backtoMainImg} />
                    <p className={Instruct.backtoMainText}>Back to main</p>
                </div>
                <div className={Instruct.logoBox}>
                        <p className={Instruct.logoText}>Logo</p>
                    </div>
                <div className={Instruct.messageCon}>
                    <div className={Instruct.messageBox}>
                        <div className={Instruct.messageImgBox}>
                            <img src="/images/icon-email-instruction.svg" alt="E-mail" className={Instruct.messageImg} />
                        </div>
                        <h2 className={Instruct.messageHeader}>
                            Email Instruction <br />
                            Sent
                        </h2>
                        <p className={Instruct.messageText}>
                            Please follow the instruction we sent to your Email<br />
                            to reset your password
                        </p>
                        <span className={Instruct.spanEmail}>mistarfid@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EmailInstruction;