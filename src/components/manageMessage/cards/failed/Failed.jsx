import Fail from './failed.module.css';
import checkCross from './check-cross-pink.svg';

const Failed = () => {
    return (
        <div className={Fail.cardBox}>
            <button className={Fail.cardCentered}>
                <img src={checkCross} alt="Checkmark" className={Fail.cardImg} />
                <div className={Fail.cardTextBox}>
                    <p className={Fail.cardFig}>07</p>
                    <p className={Fail.cardText}>Failed</p>
                </div>
            </button>
        </div>
    );
}
 
export default Failed;