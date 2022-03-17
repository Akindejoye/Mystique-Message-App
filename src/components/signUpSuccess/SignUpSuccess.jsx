import { Link } from 'react-router-dom';
import Success from './signUpSuccess.module.css';

const SignUpSuccess = () => {
    return (
        <div className={Success.wrapper}>
            <div className={Success.contentWrapper}>
                <div className={Success.left}>
                    <div className={Success.logoBox}>
                        <p className={Success.logoText}>Logo</p>
                    </div>
                    <div className={Success.leftImgbox}>
                        <img src="/images/icon-pc.svg" alt="Laptop" className={Success.img1} />
                        <img src="/images/icon-pc-attach.svg" alt="Laptop" className={Success.img2} />
                    </div>
                </div>
                <div className={Success.right}>
                    <div className={Success.messageContainer}>
                        <img src="/images/icon-checkmark-circle-2.svg" alt="Checkmark" className={Success.messageImg} />
                        <h2>
                            Account successfully created
                        </h2>
                        <h3>
                            An email has been sent to mistarfid@gamil.com <br />
                            verify this email to start using our services.
                        </h3>
                    </div>
                    <div className={Success.signBox}>
                        <Link to='/signin' style={{textDecoration: 'none'}}>
                            <img src="/images/icon-arrow-left.svg" alt="Arrow Left" />
                            <span>Sign In</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SignUpSuccess;