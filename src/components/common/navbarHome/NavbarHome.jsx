import NavHome from './navbarHome.module.css';

const NavbarHome = () => {
    return (
        <>
            <div className={NavHome.navbarCentered}>
                <div className={NavHome.navbar}>
                    <div className={NavHome.logoBox}>
                        <img src="/images/logo-main-white.svg" alt="Logo" className={NavHome.logoImg} />
                        <p className={NavHome.logoText}>Mystique</p>
                    </div>
                    <div className={NavHome.navLinks}>
                        <span className={NavHome.links}>Home</span>
                        <span className={NavHome.links}>About Us</span>
                        <span className={NavHome.links}>Pricing</span>
                        <span className={NavHome.links}>Testimonials</span>
                        <span className={NavHome.links}>Support</span>
                    </div>
                    <div className={NavHome.navBtns}>
                        <button className={NavHome.btnText}>Login</button>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default NavbarHome;