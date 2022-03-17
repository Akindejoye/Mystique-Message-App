import { Link } from 'react-router-dom';
import Forgotten from './forgottenPassword.module.css';

const ForgottenPassword = () => {
    return (
        <div className={Forgotten.wrapper}>
            <div className={Forgotten.contentWrapper}>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <div className={Forgotten.backtoMainBox}>
                        <img src="/images/icon-arrow-left.svg" alt="Arrow Left" className={Forgotten.backtoMainImg} />
                        <p className={Forgotten.backtoMainText}>Back to main</p>
                    </div>
                </Link>
                <div className={Forgotten.logoBox}>
                    <p className={Forgotten.logoText}>Logo</p>
                </div>
                <div className={Forgotten.formBoxCon}>
                    <div className={Forgotten.formBox}>
                        <div className={Forgotten.keyImgBox}>
                            <img src="/images/icon-key.svg" alt="Key" className={Forgotten.keyImg} />
                        </div>
                        <h2 className={Forgotten.formHeader}>
                            Forgotten Password?
                        </h2>
                        <p className={Forgotten.formText}>
                            Please provide your registered email. We'll send instructions <br />
                            to assist you reset your password.
                        </p>
                        <div className={Forgotten.inputBoxEmail}>
                            <img src="/images/icon-email-white.svg" alt="Icon"  className={Forgotten.inputEmailIcon} />
                            <input type="email" placeholder='Enter Email' className={Forgotten.inputEmail} />
                        </div>
                        <div className={Forgotten.submitBtnBox}>
                            <button type='submit' className={Forgotten.submitBtn}>Send Reset Instructions</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ForgottenPassword;