import Fourth from './cardBox4.module.css';

const CardBox4 = () => {
    return (
        <div className={Fourth.CardBox4}>
            <div className={Fourth.CardCon4}>
                <div className={Fourth.innerCon4}>
                    <div className={Fourth.imgCon4}>
                        <img src="/images/check-cross.svg" alt="Check" className={Fourth.cardImg4} />
                    </div>
                    <div className={Fourth.businessTextInnerBox4}>
                        <p className={Fourth.figure4}>200</p>
                        <p className={Fourth.text4}>Delivered</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CardBox4;