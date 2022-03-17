import Sequence from './paymentPlan.module.css';

const PaymentPlan = ({ range, amount, style, boxColor, paint }) => {
    return ( 
        <div className={Sequence.planWrapper} style={boxColor}>
            <div className={Sequence.leftBox}>
                <input type="checkbox" className={`${Sequence.optionInput} ${Sequence.checkbox}`}  />
                <div className={Sequence.leftInnerBox}>
                    <span className={Sequence.planRange} style={paint}>{range}</span>
                    <span className={Sequence.rangeSave} style={style}>save 0%</span>
                </div>
            </div>
            <div className={Sequence.RightBox}>
                <span className={Sequence.planPrice} style={paint}>{amount}</span>
                <span className={Sequence.planType} style={paint}>/SMS</span>
            </div>
        </div>
     );
}
 
export default PaymentPlan;