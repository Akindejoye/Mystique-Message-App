import Footer from './footerHome.module.css';

const FooterHome = () => {
    return (
        <>
            <section className={Footer.footer}>
                <div className={Footer.footerBox}>
                    <table className={Footer.footerTable}>
                        <tr className={Footer.footerRowx}>
                            <th className={Footer.footerHeaderx}>Company</th>
                            <th className={Footer.footerHeaderx}>Address</th>
                            <th className={Footer.footerHeaderx}>Customer Service</th>
                            <th className={Footer.footerHeaderx}>Chat</th>
                        </tr>
                        <tr className={Footer.footerRowx}>
                            <td className={Footer.footerColumnx}>About Us</td>
                            <td className={Footer.footerColumnx}>234 Allen avenue<br /> Lagos, Nigeria</td>
                            <td className={Footer.footerColumnx}>Visit Help Center</td>
                            <td className={Footer.footerColumnx}><img src="/images/footer-email.svg" alt="Icon" /></td>
                        </tr>
                        <tr className={Footer.footerRowx}>
                            <td className={Footer.footerColumnx}>Blog</td>
                            <td className={Footer.footerColumnx}>234 Adeola Odeku<br /> Lagos, Nigeria</td>
                            <td className={Footer.footerColumnx}>Share your feedbacks</td>
                            <td className={Footer.footerColumnx}><img src="/images/footer-telegram.svg" alt="Icon" /></td>
                        </tr>
                        <tr className={Footer.footerRowx}>
                            <td className={Footer.footerColumnx}>Careers</td>
                            <td className={Footer.footerColumnx}> </td>
                            <td className={Footer.footerColumnx}></td>
                            <td className={Footer.footerColumnx}><img src="/images/footer-instagram.svg" alt="Icon" /></td>
                        </tr>
                        <tr className={Footer.footerRowx}>
                            <td className={Footer.footerColumnx}>Privacy</td>
                            <td className={Footer.footerColumnx}>Terms and conditions</td>
                            <td className={Footer.footerColumnx}></td>
                            <td className={Footer.footerColumnx}><img src="/images/footer-facebook.svg" alt="Icon" /></td>
                        </tr>
                    </table>
                    <div className={Footer.footerBut}>
                            <div className={Footer.logoBox2}>
                                <img src="/images/logo-main-white.svg" alt="Logo" className={Footer.logoImg} />
                                <p className={Footer.logoText}>Mystique</p>
                            </div>
                            <div className={Footer.rightsReserv}>
                                <p className={Footer.rightsName}>&copy;2021 Mystique SMS Nigeria</p>
                                <p className={Footer.rightsReservText}>All rights reserved</p>
                            </div>
                            <div className={Footer.backUp}>
                                <img src="/images/footer-up.svg" alt="Up Arrow" className={Footer.backUpImg} />
                                <p className={Footer.backUpText}>Back to Top</p>
                            </div>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default FooterHome;