import Third from './cardBox3.module.css';

const CardBox3 = () => {
    return (
        <div className={Third.CardBox3}>
            <div className={Third.CardCon3}>
                <div className={Third.innerCon3}>
                    <div className={Third.imgCon3}>
                        <img src="/images/check-green.svg" alt="Check" className={Third.cardImg3} />
                        <img src="/images/check-green.svg" alt="Check" className={Third.cardImg32} />
                    </div>
                    <div className={Third.businessTextInnerBox3}>
                        <p className={Third.figure3}>200</p>
                        <p className={Third.text3}>Delivered</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CardBox3;