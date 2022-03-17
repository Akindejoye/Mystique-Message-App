import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Title from './pageheaderbtn.module.css';
import Time from '../../../components/common/Time';
import { Link } from "react-router-dom";

const PageHeaderBtn = ({ header }) => {
    return (
        <div className={Title.mainHeaderCentered}>
            <div className={Title.textBox}>
                <Link to='/messagesalllist' class='link'>
                    <button className={Title.btnBox}>
                        <img src="/images/arrow-left-black.svg" alt="Arrow Left" className={Title.arrowL} />
                    </button>
                </Link>
                <p className={Title.mainHeaderText}>{header}</p>
            </div>
            <Time />
        </div>
    );
}
 
export default PageHeaderBtn;