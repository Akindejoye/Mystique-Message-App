import Pend from './pending.module.css';
import checkYellow from './checkmark-yellow.svg';

const Pending = () => {
    return (
        <div className={Pend.cardBox}>
            <button className={Pend.cardCentered}>
                <img src={checkYellow} alt="Checkmark" className={Pend.cardImg} />
                <div className={Pend.cardTextBox}>
                    <p className={Pend.cardFig}>07</p>
                    <p className={Pend.cardText}>Pending</p>
                </div>
            </button>
        </div>
    );
}
 
export default Pending;