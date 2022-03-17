import Fourth from './allCardBox4.module.css';

const AllCardBox4 = () => {
    return (
        <button className={Fourth.cardBox4}>
            <div className={Fourth.CardCon4}>
                <div className={Fourth.innerCon4}>
                    <div className={Fourth.imgCon4}>
                        <img src="/images/check-cross.svg" alt="Check" className={Fourth.cardImg4} />
                    </div>
                    <div className={Fourth.businessTextInnerBox4}>
                        <p className={Fourth.figure4}>200</p>
                        <p className={Fourth.text4}>Failed</p>
                    </div>
                </div>
            </div>
        </button>
    );
}
 
export default AllCardBox4;