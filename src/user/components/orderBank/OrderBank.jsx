import Command from './orderBank.module.css';

const OrderBank = ({ image, name, text }) => {
    return ( 
        <div className={Command.bankWrapper}>
            <div className={Command.bankCentered}>
                <div className={Command.bankLogoBox}>
                    <img src={image} alt="logo" className={Command.bankLogo} />
                </div>
                <div className={Command.bankNameBox}>
                    <span className={Command.bankName}>{name}</span>
                    <span className={Command.bankText}>{text}</span>
                </div>
            </div>
        </div>
     );
}
 
export default OrderBank;