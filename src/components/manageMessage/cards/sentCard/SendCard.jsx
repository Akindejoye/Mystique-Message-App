import Send from './sendCard.module.css';
import checkmark from './checkmark-grey.svg';

const SendCard = () => {
    return (
        <div className={Send.cardBox}>
            <button className={Send.cardCentered}>
                <img src={checkmark} alt="Checkmark" className={Send.cardImg} />
                <div className={Send.cardTextBox}>
                    <p className={Send.cardFig}>211</p>
                    <p className={Send.cardText}>Sent</p>
                </div>
            </button>
        </div>
    );
}
 
export default SendCard;