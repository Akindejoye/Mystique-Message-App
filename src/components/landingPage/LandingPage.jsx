import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CardBox1 from '../common/cardBox1/CardBox1';
import CardBox2 from '../common/cardBox2/CardBox2';
import CardBox3 from '../common/cardBox3/CardBox3';
import CardBox4 from '../common/cardBox4/CardBox4';
import CardPlatform from './CardPlatform';
import Landing from './landingPage.module.css';

const LandingPage = () => {
    return (
        <>
            <div className={Landing.wrapper}>
                <div className={Landing.container}>
                        <div className={Landing.header}>
                            <div className={Landing.navbar}>
                                <div className={Landing.logoBox}>
                                    <img src="/images/logo-main.svg" alt="Logo" className={Landing.logoImg} />
                                    <p className={Landing.logoText}>Mystique</p>
                                </div>
                                <div className={Landing.navLinks}>
                                    <NavLink to='/' activeclassName="active-link" style={{ textDecoration: 'none' }}>
                                        <span className={Landing.links}>Home</span>
                                    </NavLink>
                                    <span className={Landing.links}>About Us</span>
                                    <Link to="/landingprice" style={{ textDecoration: 'none' }}>
                                        <span className={Landing.links}>Pricing</span>
                                    </Link>
                                    <span className={Landing.links}>Testimonials</span>
                                    <span className={ `${Landing.links} ${Landing.spanLink}` }>Support</span>
                                </div>
                                    <Link to="/signin" style={{ textDecoration: 'none' }}>
                                        <div className={Landing.navBtns}>
                                            <button className={Landing.btnText}>Login</button>
                                         </div>
                                    </Link>
                            </div>
                            <div className={Landing.welcomeWrapper}>
                                <div className={Landing.welcomeCenter}>
                                    <h1 className={Landing.welcomeHeading}>Welcome to Mystiqu<span>e SMS</span></h1>
                                    <p className={Landing.welcomeText1}>
                                        The SMS platform where you have total control over<br />
                                        your messages.
                                    </p>
                                    <p className={Landing.welcomeText2}>
                                        Don't get frustrated, when you have to send a message that<br />
                                        you want delivered urgently, just create an account, add<br />
                                        contact or create groups and start sending your messages<br />
                                        immediately.
                                    </p>
                                    <p className={Landing.welcomeText3}>
                                        We've got your back !
                                    </p>
                                    <button className={Landing.welcomeBtn}>Know More</button>
                                </div>
                            </div>
                            <div className={Landing.backgroundBlue}>
                                <img src="/images/icon-bluebackground-1.svg" alt="Background" className={Landing.blueImg} />
                            </div>
                            <div className={Landing.backgroundNetwork}>
                                <img src="/images/icon-network.svg" alt="Network" className={Landing.network} />
                            </div>
                        </div>
                        <section className={Landing.simple}>
                            <div className={Landing.simpleImgBox}>
                                <img src="/images/icon-simple.svg" alt="Simple" className={Landing.simpleImg} />
                            </div>
                            <div className={Landing.simpleTextBox}>
                                <h1 className={Landing.simpleHeading}>Mystique is simple but robust</h1>
                                    <p className={Landing.simpleText1}>
                                        You deserve an easy life, don't you think you do?
                                    </p>
                                    <p className={Landing.simpleText2}>
                                        Join today, in very few steps, the most simple but even more so,<br />
                                        robust SMS platform that lets you send, organise and monitor your<br />
                                        messages 24/7 and know exactly when your messages gets<br />
                                        delivered or not, at the comfort of wherever you are.
                                    </p>
                                    <p className={Landing.simpleText3}>
                                        Now you can grow and fly !
                                    </p>
                                    <button className={Landing.simpleBtn}>Know More</button>
                            </div>
                        </section>
                        <section className={Landing.business}>
                            <div className={Landing.businessTextBox}>
                                <h1 className={Landing.businessHeading}>Real time, real business</h1>
                                    <p className={Landing.businessText1}>
                                        You deserve not to be left in the dark
                                    </p>
                                    <p className={Landing.businessText2}>
                                        Know your message statuses at every turn, never b<span className={Landing.businessText2White}> left</span><br />
                                        to assume your message was delivered because we <span className={Landing.businessText2White}>have</span><br />
                                        got you covered, just login and from your dashboard wa<span className={Landing.businessText2White}>tch</span><br />
                                        your every message sent and how they are being handed.
                                    </p>
                                    <p className={Landing.businessText3}>
                                        See? we have your interest at heart !
                                    </p>
                                    <button className={Landing.businessBtn}>Get Started</button>
                            </div>
                            <div className={Landing.businessCardBox}>
                                <CardBox1 />
                                <CardBox2 />
                                <CardBox3 />
                                <CardBox4 />
                                <img src="/images/icon-bluebackground-2.svg" alt="Background" className={Landing.businessBackground} />
                            </div>
                        </section>
                        <section className={Landing.priceless}>
                            <div className={Landing.pricelessImgBox}>
                                <img src="/images/icon-laptop.svg" alt="Laptop"  className={Landing.pricelessImg} />
                            </div>
                            <div className={Landing.pricelessTextBox}>
                                <h1 className={Landing.pricelessHeading}>Less Price for Priceless</h1>
                                <p className={Landing.pricelessText1}>
                                    "Better soup na money kill am"
                                </p>
                                <p className={Landing.pricelessText2}>
                                    Yes, it takes plenty of resources to create quality products hence<br />
                                    paying for such products also cost money but not with us, we<br />
                                    deliver quality for less, we want you to be able to reach as many<br />
                                    people as possible to also get whatever you have going for you<br/>
                                    going as far and fast as possible.
                                </p>
                                <p className={Landing.pricelessText3}>
                                    Why not, get going, you're on the right app
                                </p>
                                <button className={Landing.pricelessBtn}>Know More</button>
                            </div>
                        </section>
                        <section className={Landing.testimonial}>
                            <div className={Landing.testimonialBox}>
                                <div className={Landing.boxHeader}>
                                    <h1 className={Landing.testimonialHeader}>
                                        Don't Take Our Word For It
                                    </h1>
                                    <p className={Landing.testimonialText}>
                                        We can't blow our own trumpet right?
                                    </p>
                                </div>
                                <div className={Landing.testimonialSliderBox}>
                                    <div className={Landing.slide}>
                                        <div className={Landing.testimonial2}>
                                            <img src="/images/avata.svg" alt="Avater" className={Landing.testimonialImg} />
                                            <div className={Landing.testimonialDetailBox}>
                                                <span className={Landing.testimonialName}>Agba Fidelis</span>
                                                <span className={Landing.testimonialJob}>U1/UX Designer</span>
                                            </div>
                                        </div>
                                        <div className={Landing.textBox}>
                                            <p className={Landing.text}>
                                                "I have been using mystique for two years,<br />
                                                sending my SMSs and my experience has<br />
                                                been awesome highly recommended if you <br />
                                                <span className={Landing.textSpan}>want peace of mind while reaching out to<br/>
                                                people"</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={Landing.slide2}>
                                        <div className={Landing.testimonial2}>
                                            <img src="/images/avata.svg" alt="Avater" className={Landing.testimonialImg} />
                                            <div className={Landing.testimonialDetailBox}>
                                                <span className={Landing.testimonialName}>Mike Tyson</span>
                                                <span className={Landing.testimonialJob}>Boxer</span>
                                            </div>
                                        </div>
                                        <div className={Landing.textBox}>
                                            <p className={Landing.text}>
                                                "I have been using mystique for two years,<br />
                                                sending my SMSs and my experience has<br />
                                                been awesome highly recommended if you <br />
                                                <span className={Landing.textSpan}>want peace of mind while reaching out to<br/>
                                                people"</span>
                                            </p>
                                        </div>
                                    </div>
                                    <img src="/images/icon-slider-left.svg" alt="Left" className={Landing.left} />
                                    <img src="/images/icon-slider-right.svg" alt="Left" className={Landing.right} />
                                </div>
                            </div>
                        </section>
                        <section className={Landing.platform}>
                            <div className={Landing.platformHeadBox}>
                                <h1 className={Landing.platformHeadText}>Companies that use our Platform</h1>
                            </div>
                            <div className={Landing.cardCentered}>
                                <CardPlatform />
                                <CardPlatform />
                                <CardPlatform />
                                <CardPlatform />
                                <CardPlatform />
                                <CardPlatform />
                                <CardPlatform />
                                <CardPlatform />
                                <CardPlatform />
                            </div>
                        </section>
                </div>
                <section className={Landing.help}>
                    <div className={Landing.helpBox}>
                        <div className={Landing.helpTexBox}>
                            <h1 className={Landing.helpTexHeader}>We're here to help</h1>
                            <h3 className={Landing.helpTexMore}>But tell us how we can do that</h3>
                            <div className={Landing.helpInputBox}>
                            <img src="/images/icon-small-search.svg" alt="" className={Landing.helpInputIcon} />
                                <input type="text" placeholder='Search our help center' className={Landing.helpInput} />
                            </div>
                            <p className={Landing.helpQuestions}>See our FAQ, we might already have the answer to your questions</p>
                            <img src="/images/right-angle.svg" alt="Background" className={Landing.rightAngle} />
                            <img src="/images/circle-shape-ground.svg" alt="Background" className={Landing.circleShape} />
                            <img src="/images/circle-shape-dark.svg" alt="Background" className={Landing.circleShapeDark} />
                        </div>
                        <img src="/images/ecllipse-left.svg" alt="Color" className={Landing.ecllipseLeft} />
                        <img src="/images/ecllipse-right.svg" alt="Color" className={Landing.ecllipseRight} />
                    </div>
                </section>
                <div className={Landing.container}>
                    <section className={Landing.frequentQuest}>
                        <div className={Landing.questionsBox}>
                            <img src="/images/metaverse.svg" alt="metaverse" className={Landing.questionImg} />
                            <div className={Landing.questionList}>
                                <h2 className={Landing.questionHeader}>FAQ</h2>
                                <div className={Landing.listSmallCon}>
                                    <img src="/images/icon-dot-blue.svg" alt="Icon" className={Landing.questionIcon} />
                                    <p className={Landing.questionText}>What is Mystique?</p>
                                </div>
                                <div className={Landing.listSmallCon}>
                                    <img src="/images/icon-dot-blue.svg" alt="Icon" className={Landing.questionIcon} />
                                    <p className={Landing.questionText}>Why switch your SMS provider?</p>
                                </div>
                                <div className={Landing.listSmallCon}>
                                    <img src="/images/icon-dot-blue.svg" alt="Icon" className={Landing.questionIcon} />
                                    <p className={Landing.questionText}>How to get started using Mystique?</p>
                                </div>
                                <div className={Landing.listSmallCon}>
                                    <img src="/images/icon-dot-blue.svg" alt="Icon" className={Landing.questionIcon} />
                                    <p className={Landing.questionText}>How do I make payments?</p>
                                </div>
                                <div className={Landing.listSmallCon}>
                                    <img src="/images/icon-dot-blue.svg" alt="Icon" className={Landing.questionIcon} />
                                    <p className={Landing.questionText}>How to upload CSV files?</p>
                                </div>
                                <div className={Landing.listSmallCon}>
                                    <img src="/images/icon-dot-blue.svg" alt="Icon" className={Landing.questionIcon} />
                                    <p className={Landing.questionText}>Where to make offline payments?</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={Landing.message}>
                        <div className={Landing.messageCentered}>
                            <div className={Landing.messageBox}>
                                <p className={Landing.messageHeader}>
                                    Send us a message
                                </p>
                                <form>
                                    <label htmlFor="email" className={Landing.emailLabel}>Email</label><br />
                                    <input type="email" id='email' className={Landing.messageEmailInputs} /><br />
                                    <label htmlFor="phone" className={Landing.phoneLabel}>Phone Number</label><br />
                                    <input type="text" id='phone' className={Landing.phoneInput} /><br />
                                    <label htmlFor="message" className={Landing.textLabel}>Message</label><br />
                                    <textarea name="" id="message" cols="30" rows="10" placeholder='Enter your message' className={Landing.textInput}></textarea><br />
                                    <button type='submit' className={Landing.messageBtn}>Send Message</button>
                                </form>
                            </div>
                            <div className={Landing.messageSocial}>
                                <div className={Landing.socialCentered}>
                                    <h3 className={Landing.socialHeader}>Chat with us</h3>
                                    <div className={Landing.socialIcons}>
                                        <img src="/images/icon-insta-pink.svg" alt="Instagram" className={Landing.socialIconsInsta} />
                                        <img src="/images/icon-facebook.svg" alt="Facebook" className={Landing.socialIconsFacebook} />
                                        <img src="/images/icon-twitter.svg" alt="Twitter" className={Landing.socialIconsTwitter} />
                                        <img src="/images/icon-linkedin.svg" alt="LinkedIn" className={Landing.socialIconsLinkedIn} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={Landing.footer}>
                        <div className={Landing.footerCentered}>
                            <div className={Landing.firstColumn}>
                                <div className={Landing.footerLogoCon}>
                                    <img src="/images/logo-main.svg" alt="Logo" className={Landing.footerLogoImg} />
                                    <p className={Landing.footerLogoText}>Mystique</p>
                                </div>
                                <p className={Landing.fotterEmail}>admin@mystiquesmsng.com</p>
                                <p className={Landing.fotterContact}>+2340945323222</p>
                            </div>
                            <div className={Landing.secondColumn}>
                                <p className={Landing.secondColumnheader}>Company</p>
                                <p className={Landing.secondColumnText}>About Us</p>
                                <p className={Landing.secondColumnText}>Pricing</p>
                                <p className={Landing.secondColumnText}>Careers</p>
                                <p className={Landing.secondColumnText}>Privacy policy</p>
                                <p className={Landing.secondColumnText}>Terms & Conditions</p>
                            </div>
                            <div className={Landing.thirdColumn}>
                                <p className={Landing.thirdColumnheader}>Customer Service</p>
                                <p className={Landing.thirdColumnText}>Go to help Center</p>
                                <p className={Landing.thirdColumnText}>Share Feedback</p>
                            </div>
                            <div className={Landing.fourthColumn}>
                                <p className={Landing.fourthColumnheader}>Address</p>
                                <p className={Landing.fourthColumnText}>
                                    234 Somewhere avenue, Ikeja,<br /> Lagos
                                </p>
                                <p className={Landing.fourthdColumnTextG}>Nigeria</p>
                                <div className={Landing.fourthColumnIcons}>
                                    <img src="images/icon-insta-ash.svg" alt="Instagram" className={Landing.fourthColumnInsta} />
                                    <img src="images/icon-facebook-ash.svg" alt="Facebook" className={Landing.fourthColumnFacebook} />
                                    <img src="images/icon-twitter-ash.svg" alt="Twitter" className={Landing.fourthColumnTwitter} />
                                    <img src="images/icon-linkedin-ash.svg" alt="LinkedIn" className={Landing.fourthColumnLinkedIn} />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section className={Landing.reserved}>
                    <div className={Landing.reservedBox}>
                        <div className={Landing.reservedTextBox}>
                            <p className={Landing.reservedText}>&copy; 2021 Mystique SMS Nigeria All rights reserved</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
 
export default LandingPage;