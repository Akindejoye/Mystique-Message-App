import Second from './allCardSent.module.css';

const AllCardSent = ({ handleClick }) => {
    return (
        <button className={Second.cardBox2} onClick={handleClick}>
            <div className={Second.CardCon2}>
                <div className={Second.innerCon2}>
                    <div className={Second.imgCon2}>
                        <img src="/images/check-grey.svg" alt="Check" className={Second.cardImg2} />
                    </div>
                    <div className={Second.businessTextInnerBox2}>
                        <p className={Second.figure2}>211</p>
                        <p className={Second.text2}>Sent</p>
                    </div>
                </div>
            </div>
        </button>
    );
}
 
export default AllCardSent;