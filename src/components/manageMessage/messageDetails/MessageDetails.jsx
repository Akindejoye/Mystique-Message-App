import Details from './messageDetails.module.css';
import Delete from './delete-pink.svg';
import Close from './icon-close.svg';

const MessageDetails = () => {
    return (
        <div className={Details.container}>
            <div className={Details.messageBox}>
                <div className={Details.messageCentered}>
                    <div className={Details.btnTopBox}>
                        <button className={Details.btnDelete}>
                            <img src={Delete} alt="Delete" className={Details.btnDeleteImg} />
                        </button>
                        <button className={Details.btnClose}>
                            <img src={Close} alt="Close" className={Details.btnCloseImg} />
                        </button>
                    </div>
                    <h3 className={Details.messageHeader}>Sent message Details</h3>
                    <div className={Details.messageDataBox}>
                        <div className={Details.dataTop}>
                            <img src="/images/profile-pics.svg" alt="Profile" className={Details.profilePics} />
                            <p className={Details.profileName}>Agba Fidelis</p>
                            <span className={Details.profileIdTag}>I.D:</span>
                            <span className={Details.profileId}>12322434934</span>
                        </div>
                        <div className={Details.dataMiddle}>
                            <span className={Details.dateTag}>Date</span>
                            <span className={Details.dateNum}>21/08/2021</span>
                            <span className={Details.dateTimeTag}>Time</span>
                            <span className={Details.dateTime}>12:30pm</span>
                        </div>
                        <div className={Details.dataBottom}>
                            <span className={Details.unitTag}>Units</span>
                            <span className={Details.unitNum}>2000</span>
                            <span className={Details.recip}>Recipients</span>
                            <span className={Details.recipDate}>2021</span>
                        </div>
                    </div>
                    <div className={Details.messageReportBox}>
                        <span className={Details.reportTag}>Report:</span>
                        <p className={Details.reportText}>
                            Some message were not delivered due to either of the<br />
                            following reasons: Phone numbers were not reachable<br />
                            or they were in DND modes. See details below.
                        </p>
                    </div>
                    <div className={Details.detailTableBox}>
                        <table className={Details.detailTable}>
                            <tr className={Details.detailTableRow}>
                                <th className={Details.detailTableHeader}>Delivered</th>
                                <th className={Details.detailTableHeader}>Not delivered</th>
                            </tr>
                            <tr className={Details.detailTableRow}>
                                <td className={Details.detailTableColumn}>2000</td>
                                <td className={Details.detailTableColumn}>21</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default MessageDetails;