import First from './allCardBox1.module.css';

const AllCardBox1 = () => {
    return (
        <button className={First.cardBox1}>
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
        </button>
    );
}
 
export default AllCardBox1;