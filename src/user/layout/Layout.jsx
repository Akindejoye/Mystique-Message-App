import Time from '../../components/common/Time';
import HeaderUser from '../components/header/HeaderUser';
import UserSidebar from '../components/userSidebar/UserSidebar';
import Plank from './layout.module.css';
import CircleImg from './circle-background.svg';
import ShineMain from './i-ground-shine-main.svg';

const Layout = ({ children }) => {
    console.log(children);
    return (
        <>
            <div className={Plank.wrapper}>
                <UserSidebar />
                <div className={Plank.container}>
                   <HeaderUser />
                    <main>
                        <img src={CircleImg} alt="Background" className={Plank.circleBackground} />
                        <img src={ShineMain} alt="Background" className={Plank.shineBackground} />
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}
 
export default Layout;