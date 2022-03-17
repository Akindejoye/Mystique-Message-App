import PageHeader from '../../components/pageHeader/PageHeader';
import Layout from '../../layout/Layout';
import Assist from './support.module.css';

const Support = () => {

    return ( 
        <Layout>
            <PageHeader />
            <div className={Assist.supportWrapper}>
                <div className={Assist.supportCentered}>
                    <section className={Assist.message}>
                        <div className={Assist.messageCentered}>
                            <div className={Assist.messageBox}>
                                <p className={Assist.messageHeader}>
                                    Report an issue
                                </p>
                                <form>
                                    <label htmlFor="email" className={Assist.emailLabel}>Email</label><br />
                                    <input type="email" id='email' autoComplete='off' className={Assist.messageEmailInputs} /><br />
                                    <label htmlFor="phone" className={Assist.phoneLabel}>Phone Number</label><br />
                                    <input type="text" id='phone' className={Assist.phoneInput} /><br />
                                    <label htmlFor="message" className={Assist.textLabel}>Message</label><br />
                                    <textarea name="" id="message" cols="30" rows="10" placeholder='Enter your message' className={Assist.textInput}></textarea><br />
                                    <button type='submit' className={Assist.messageBtn}>Send Message</button>
                                </form>
                            </div>
                            <div className={Assist.messageSocial}>
                                <div className={Assist.socialCentered}>
                                    <h3 className={Assist.socialHeader}>Chat with us</h3>
                                    <div className={Assist.socialIcons}>
                                        <img src="/images/icon-insta-pink.svg" alt="Instagram" className={Assist.socialIconsInsta} />
                                        <img src="/images/icon-facebook.svg" alt="Facebook" className={Assist.socialIconsFacebook} />
                                        <img src="/images/icon-twitter.svg" alt="Twitter" className={Assist.socialIconsTwitter} />
                                        <img src="/images/icon-linkedin.svg" alt="LinkedIn" className={Assist.socialIconsLinkedIn} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={Assist.frequentQuest}>
                        <div className={Assist.questionsBox}>
                            <img src="/images/metaverse.svg" alt="metaverse" className={Assist.questionImg} />
                            <div className={Assist.questionList}>
                                <h2 className={Assist.questionHeader}>FAQ</h2>
                                <div className={Assist.listSmallCon}>
                                    <img src="/images/icon-dot-blue.svg" alt="Icon" className={Assist.questionIcon} />
                                    <p className={Assist.questionText}>What is Mystique?</p>
                                </div>
                                <div className={Assist.listSmallCon}>
                                    <img src="/images/icon-dot-blue.svg" alt="Icon" className={Assist.questionIcon} />
                                    <p className={Assist.questionText}>Why switch your SMS provider?</p>
                                </div>
                                <div className={Assist.listSmallCon}>
                                    <img src="/images/icon-dot-blue.svg" alt="Icon" className={Assist.questionIcon} />
                                    <p className={Assist.questionText}>How to get started using Mystique?</p>
                                </div>
                                <div className={Assist.listSmallCon}>
                                    <img src="/images/icon-dot-blue.svg" alt="Icon" className={Assist.questionIcon} />
                                    <p className={Assist.questionText}>How do I make payments?</p>
                                </div>
                                <div className={Assist.listSmallCon}>
                                    <img src="/images/icon-dot-blue.svg" alt="Icon" className={Assist.questionIcon} />
                                    <p className={Assist.questionText}>How to upload CSV files?</p>
                                </div>
                                <div className={Assist.listSmallCon}>
                                    <img src="/images/icon-dot-blue.svg" alt="Icon" className={Assist.questionIcon} />
                                    <p className={Assist.questionText}>Where to make offline payments?</p>
                                </div>
                            </div>
                        </div>
                        </section>                                                                                                                                  
                </div>
            </div>
        </Layout>
     );
}
 
export default Support;