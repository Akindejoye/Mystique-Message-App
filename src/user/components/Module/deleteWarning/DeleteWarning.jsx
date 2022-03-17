import Signal from './deleteWarning.module.css';

const DeleteWarning = () => {
    return ( 
        <>
            <div className={Signal.warningWrapper}>
                <div className={Signal.warningCentered}>
                    <span className={Signal.warningMainText}>
                        Are you sure you want to delete this record?
                    </span>
                    <span className={Signal.warningSupportText}>
                        There's no backup anywhere.
                    </span>
                    <div className={Signal.warningBtnBox}>
                        <button className={Signal.warningDeleteBtn}>Delete</button>
                        <button className={Signal.warningCancelBtn}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default DeleteWarning;