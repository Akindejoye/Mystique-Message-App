import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sign from './signIn.module.css';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password && login) {
            const person = {
                id: new Date().getTime().toString(),
                email: email,
                password: password,
                login: login
            }
            const data= JSON.stringify(person);
            console.log(data);
            setUser((people) => {
                return [...people, person]
            });
            setEmail('');
            setPassword('');
            setLogin(false);
        } else {
            console.log('Empty Values to be filled')
        }
    }

    return (
        <div className={Sign.wrapper}>
            <div className={Sign.contentWrapper}>
                <div className={Sign.left}>
                    <div className={Sign.logoBox}>
                        <p className={Sign.logoText}>Logo</p>
                    </div>
                    <div className={Sign.leftImgbox}>
                        <img src="/images/icon-pc.svg" alt="Laptop" className={Sign.img1} />
                        <img src="/images/icon-checkmark.svg" alt="Icon" className={Sign.img2} />
                    </div>
                </div>
                <div className={Sign.right}>
                    <h2 className={Sign.rightTitle}>Sign In</h2>
                    <p className={Sign.rightText}>Never too late to send those messages</p>
                    <form className={Sign.rightForm} onSubmit={handleSubmit}>
                        <div className={Sign.inputBoxEmail}>
                            <img src="/images/icon-email-white.svg" alt="Icon"  className={Sign.inputEmailIcon} />
                            <input 
                            type="email"
                            value= {email} 
                            name='email'
                            onChange = {(e) => setEmail(e.target.value)} 
                            placeholder='Email' 
                            className={Sign.inputEmail} 
                            />
                        </div>
                        <div className={Sign.inputBoxPassword}>
                            <img src="/images/icon-password-white.svg" alt="Icon"  className={Sign.inputPasswordIcon} />
                            <input 
                            type="password" 
                            value= {password}
                            name='password'
                            onChange = {(e) => setPassword(e.target.value)} 
                            placeholder='Password' 
                            className={Sign.inputPassword} 
                            />
                        </div>
                        <div className={Sign.inputBoxCheck}>
                            <input 
                            type="checkbox" 
                            value= {login}
                            name='checkbox' 
                            id='checkbox'
                            onChange = {(e) => setLogin(e.target.checked)} 
                            className={Sign.inputCheckbox} 
                            />
                            <label htmlFor="checkbox" className={Sign.checkboxLabel}>Always signed in</label>
                        </div>
                        <div className={Sign.submitBtnBox}>
                                <button type='submit' className={Sign.submitBtn}>Sign In</button>
                            {/* <Link to='/adprofile'>
                            </Link> */}
                        </div>
                    </form>
                    <div className={Sign.spanCon}>
                        <span className={Sign.span1}>New here?</span>
                        <Link to='/signup' style={{textDecoration:'none'}}>
                            <span className={Sign.span2}>Create account</span>
                        </Link>
                    </div>
                    <Link to='/forgottenpassword' style={{textDecorationLine: 'none'}}>
                        <span className={Sign.span3}>Forgotten password?</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default SignIn;