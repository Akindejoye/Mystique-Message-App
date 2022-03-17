import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignP from './signUp.module.css';
import { Person } from '@material-ui/icons';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [people, setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password && confirmPassword && agreement) {
            const person = {
                id: new Date().getTime().toString(),
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                agreement: agreement
            }
            const data= JSON.stringify(person);
            console.log(data);
            setPeople((people) => {
                return [...people, person]
            });
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setAgreement();
        } else {
            console.log('Empty Values to be filled')
        }
    }

    const handleMailChange = (e) => {
        return setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        return setPassword(e.target.value);
    }

    return (
        <div className={SignP.wrapper}>
            <div className={SignP.contentWrapper}>
                <div className={SignP.left}>
                    <div className={SignP.logoBox}>
                        <p className={SignP.logoText}>Logo</p>
                    </div>
                    <div className={SignP.leftImgbox}>
                        <img src="/images/icon-pc.svg" alt="Laptop" className={SignP.img1} />
                        <img src="/images/icon-pc-attach.svg" alt="Laptop" className={SignP.img2} />
                    </div>
                </div>
                <div className={SignP.right}>
                    <h2 className={SignP.rightTitle}>Sign Up</h2>
                    <p className={SignP.rightText}>There's no better time than now</p>

                    <form className={SignP.rightForm} onSubmit={handleSubmit}>
                        <div className={SignP.inputBoxEmail}>
                            <img src="/images/icon-email-white.svg" alt="Icon"  className={SignP.inputEmailIcon} />
                            <input 
                            type="email"
                            value= {email}
                            onChange= {handleMailChange} 
                            placeholder='Email' 
                            className={SignP.inputEmail} 
                            />
                        </div>
                        <div className={SignP.inputBoxPassword}>
                            <img src="/images/icon-password-white.svg" alt="Icon"  className={SignP.inputPasswordIcon} />
                            <input 
                            type="password" 
                            value= {password}
                            onChange = {handlePasswordChange}
                            placeholder='Password' 
                            className={SignP.inputPassword} />
                        </div>
                        <div className={SignP.inputBoxPassword}>
                            <img src="/images/icon-password-white.svg" alt="Icon"  className={SignP.inputPasswordIcon} />
                            <input 
                            type="password" 
                            value= {confirmPassword}
                            onChange = {(e) => setConfirmPassword(e.target.value)}
                            placeholder='Password' 
                            className={SignP.inputPassword} />
                        </div>
                        <div className={SignP.detectBotBox}>
                            <div className={SignP.detectBotText}>
                                <p>Drag image to position<br /> to verify</p>
                            </div>
                            <div className={SignP.detectBotImages}>
                                <img src="/images/icon-verify-one.svg" alt="Box" className={SignP.detectBotImg1} />
                                <img src="/images/icon-verify-two.svg" alt="Box" className={SignP.detectBotImg2} />
                            </div>
                        </div>
                        <div className={SignP.inputBoxCheck}>
                            <input 
                            type="checkbox"
                            value = {agreement}
                            onChange = {(e) => setAgreement(e.target.checked)} 
                            id='checkbox' 
                            className={SignP.inputCheckbox} 
                            />
                            <label htmlFor="checkbox" className={SignP.checkboxLabel}>Agree to <span>Terms</span>&<span>Conditions</span></label>
                        </div>
                        <div className={SignP.submitBtnBox}>
                            <Link to='/signupsuccess'>
                                <button type='submit' className={SignP.submitBtn}>Sign In</button>
                            </Link>
                        </div>
                    </form>
                    <div className={SignP.spanCon}>
                        <span className={SignP.span1}>Already using?</span>
                        <Link to="/signin" style={{textDecoration: 'none'}}>
                            <span className={SignP.span2}>Login</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SignUp;