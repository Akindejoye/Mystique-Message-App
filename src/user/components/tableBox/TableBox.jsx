import Packet from './tableBox.module.css';

const TableBox = () => {
    return (
        <section className={Packet.tableBox}>
            <div className={Packet.tableBoxCentered}>
                <div className={Packet.headBox}>
                    <div className={Packet.headTxBox}>
                        <p className={Packet.headId}>Sender I.D:</p>
                        <p className={Packet.headStatus}>Jamb Ng</p>
                    </div>
                    <img src="/images/check-double.svg" alt="Check" className={Packet.headBoxImg} />
                </div>
                <div className={Packet.tableContBox}>
                    <p className={Packet.contTag}>Contacts:</p>
                    <p className={Packet.tableCont}>
                        23480855952266...<br />
                        (344 contacts)
                    </p>
                </div>
                <div className={Packet.messBodyBox}>
                    <div className={Packet.messBodyTag}>
                        Message:
                    </div>
                    <div className={Packet.messBodyText}>
                        This is to inform you that your<br />examination
                        is scheduled for  24th ...
                    </div>
                </div>
                <div className={Packet.dateTimeBox}>
                    <span className={Packet.messTime}>3:15 pm</span>
                    <span className={Packet.messDate}> 17-08-2021</span>
                </div>
            </div>
        </section>
    );
}
 
export default TableBox;