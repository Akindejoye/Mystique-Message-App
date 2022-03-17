import First from './cardBox1.module.css';

const CardBox1 = () => {
    return (
        <div className={First.CardBox1}>
            <div className={First.CardCon}>
                <div className={First.innerCon}>
                    <div className={First.imgCon}>
                        <img src="/images/check-orange.svg" alt="Check" className={First.cardImg1} />
                    </div>
                    <div className={First.businessTextInnerBox}>
                        <p className={First.figure}>07</p>
                        <p className={First.text}>Pending</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CardBox1;