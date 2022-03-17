import Delivered from './deliveredCard.module.css';
import checkGreen from './checkmark-green.svg';

const DeliveredCard = () => {
    return (
        <div className={Delivered.cardBox}>
            <button className={Delivered.cardCentered}>
                <img src={checkGreen} alt="Checkmark" className={Delivered.cardImg} />
                <div className={Delivered.cardTextBox}>
                    <p className={Delivered.cardFig}>200</p>
                    <p className={Delivered.cardText}>Delivered</p>
                </div>
            </button>
        </div>
    );
}
 
export default DeliveredCard;