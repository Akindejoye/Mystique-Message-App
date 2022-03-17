import FooterHome from '../common/footerHome/FooterHome';
import NavbarHome from '../common/navbarHome/NavbarHome';
import AboutImg from './about-us.svg';
import Us from './aboutUs.module.css';

const AboutUs = () => {
    return (
        <>
            <div className={Us.wrapper}>
                <div className={Us.container}>
                    <div className={Us.header}>
                        <NavbarHome />
                        <div className={Us.headerMainBox}>
                            <div className={Us.headerImgBox}>
                                <img src={AboutImg} alt="About Us" className={Us.headerImg} />
                            </div>
                            <div className={Us.headerTextBox}>
                                <div className={Us.headerText}>
                                    <h1 className={Us.textHeader}>Mystique is simple and unique</h1>
                                    <h3 className={Us.textSubHeader}>You deserve an easy life, don't you think you do?</h3>
                                    <p className={Us.text}>
                                        Join today, in very few steps, the most simple but even more so, <br />
                                        robust SMS platform that lets you send, organise and monitor your <br />
                                        messages 24/7 and know exactly when your messages gets <br />
                                        delivered or not, at the comfort of wherever you are,
                                    </p>
                                    <span className={Us.textRecommends}>Now you can grow and fly!</span>
                                    <div className={Us.btnContainer}>
                                        <button className={Us.headerTexBtn2}>Get started already</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className={Us.uniqueValue}>
                        <p className={Us.valueHeader}>What makes us standout</p>
                    </section>
                    <FooterHome />
                </div>
            </div>
        </>
    );
}
 
export default AboutUs;