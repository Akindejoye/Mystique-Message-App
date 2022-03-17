import ResetPasswrd from './resetPassword.module.css';

const ResetPassword = () => {
    return (
        <div className={ResetPasswrd.wrapper}>
            <div className={ResetPasswrd.contentWrapper}>
                <div className={ResetPasswrd.backtoMainBox}>
                    <img src="/images/icon-arrow-left.svg" alt="Arrow Left" className={ResetPasswrd.backtoMainImg} />
                    <p className={ResetPasswrd.backtoMainText}>Back to main</p>
                </div>
                <div className={ResetPasswrd.logoBox}>
                    <p className={ResetPasswrd.logoText}>Logo</p>
                </div>
                <div className={ResetPasswrd.formBoxCon}>
                    <div className={ResetPasswrd.formBox}>
                        <div className={ResetPasswrd.keyImgBox}>
                            <img src="/images/icon-key-double.svg" alt="Key" className={ResetPasswrd.keyImg} />
                        </div>
                        <h2 className={ResetPasswrd.formHeader}>
                            Reset Password?
                        </h2>
                        <div className={ResetPasswrd.inputBoxPasswrd}>
                            <img src="/images/icon-password-white.svg" alt="Icon"  className={ResetPasswrd.inputPasswrdIcon} />
                            <input type="password" placeholder='New Password' className={ResetPasswrd.inputPasswrd} />
                        </div>
                        <div className={ResetPasswrd.inputBoxPasswrd}>
                            <img src="/images/icon-password-white.svg" alt="Icon"  className={ResetPasswrd.inputPasswrdIcon} />
                            <input type="password" placeholder='Confirm Password' className={ResetPasswrd.inputPasswrd} />
                        </div>
                        <p className={ResetPasswrd.formText}>
                            Minimum of 8 characters. Must contain upper and lower<br />
                            case letters, numbers and symbols
                        </p>
                        <div className={ResetPasswrd.submitBtnBox}>
                            <button type='submit' className={ResetPasswrd.submitBtn}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ResetPassword;