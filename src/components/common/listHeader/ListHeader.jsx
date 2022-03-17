import { Link } from 'react-router-dom';
import Items from './listHeader.module.css';

const ListHeader = ({ text }) => {
    return (
        <div className={Items.listHeaderBox}>
            <div className={Items.header1}>
                <p className={Items.headerText}>Message Type</p>
                <select className={Items.headerSelect}>
                    <option>Plain</option>
                    <option>Flash</option>
                </select>
                <Link to="/newmessagetemplate" class='link'>
                    <p className={Items.headerTemp}>SMS Templates</p>
                </Link>
            </div>
            <div className={Items.header2}>
                <Link to='/newmessagesendnow' class='link'>
                    <button className={Items.headerBtn}>
                        <img src="/images/cross-blue.svg" alt="Button" className={Items.headerBtnImg} />
                        <span className={Items.headerBtnText}>{text}</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ListHeader;