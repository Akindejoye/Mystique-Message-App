import Items from './listHeaderPlain.module.css';

const ListHeaderPlain = () => {
    return (
        <div className={Items.listHeaderBox}>
            <div className={Items.header1}>
                <p className={Items.headerText}>Message Type</p>
                <select className={Items.headerSelect}>
                    <option>Plain</option>
                    <option>Bulk</option>
                </select>
            </div>
            <div className={Items.header2}>
                <span className={Items.headerValue}>101.00</span>
                <span className={Items.headerUnit}>Units Available</span>
            </div>
        </div>                                                                                  
    );
}
 
export default ListHeaderPlain;