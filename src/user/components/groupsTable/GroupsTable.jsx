import SaveInfo from './groupsTable.module.css';

const GroupsTable = () => {
    return ( 
        <section className={SaveInfo.contactsTableBox}>
            <div className={SaveInfo.newContactBtn}>
                <button className={SaveInfo.contactBtn}>
                    <span className={SaveInfo.iconBox}>
                        <i className="headerIcon fas fa-plus"></i>
                    </span>
                    <span className={SaveInfo.headerBtnText}>New Group</span>
                </button> 
            </div>
            <table className={SaveInfo.constab}>
                <tr className={SaveInfo.consrow}>
                    <th className={SaveInfo.conshd}></th>
                    <th className={SaveInfo.conshd}>Name</th>
                    <th className={SaveInfo.conshd}>Description</th>
                    <th className={SaveInfo.conshd}>Date Created</th>
                    <th className={SaveInfo.conshd}>Contacts</th>
                    <th className={SaveInfo.conshd}></th>
                    <th className={SaveInfo.conshd}></th>
                    <th className={SaveInfo.conshd}></th>
                </tr>
                <tr className={SaveInfo.consrow}>
                    <td className={SaveInfo.conscol}>1.</td>
                    <td className={SaveInfo.conscol}>
                        Village Committee
                    </td>
                    <td className={SaveInfo.conscol}>
                        Committee of friends for the <br />
                        marriage of a dear friend...
                    </td>
                    <td className={SaveInfo.conscol}>21/08/2021</td>
                    <td className={SaveInfo.conscol}>102</td>
                    <td className={SaveInfo.conscol}>
                        <button className={SaveInfo.btnEdit}>Edit</button>
                    </td>
                    <td className={SaveInfo.conscol}>
                        <button className={SaveInfo.btnDelet}>Delete</button>
                    </td>
                    <td className={SaveInfo.conscol}>
                        <button className={SaveInfo.btnSend}>Send Message</button>
                    </td>
                </tr>
                <tr className={SaveInfo.consrow}>
                    <td className={SaveInfo.conscol}>2.</td>
                    <td className={SaveInfo.conscol}>
                        Successful People
                    </td>
                    <td className={SaveInfo.conscol}>
                        Committee of friends for the <br />
                        marriage of a dear friend...
                    </td>
                    <td className={SaveInfo.conscol}>21/08/2021</td>
                    <td className={SaveInfo.conscol}>102</td>
                    <td className={SaveInfo.conscol}>
                        <button className={SaveInfo.btnEdit}>Edit</button>
                    </td>
                    <td className={SaveInfo.conscol}>
                        <button className={SaveInfo.btnDelet}>Delete</button>
                    </td>
                    <td className={SaveInfo.conscol}>
                        <button className={SaveInfo.btnSend}>Send Message</button>
                    </td>
                </tr>
                <tr className={SaveInfo.consrow}>
                    <td className={SaveInfo.conscol}>3.</td>
                    <td className={SaveInfo.conscol}>
                        Omopekun Company
                    </td>
                    <td className={SaveInfo.conscol}>
                        Committee of friends for the <br />
                        marriage of a dear friend...
                    </td>
                    <td className={SaveInfo.conscol}>21/08/2021</td>
                    <td className={SaveInfo.conscol}>0</td>
                    <td className={SaveInfo.conscol}>
                        <button className={SaveInfo.btnEdit}>Edit</button>
                    </td>
                    <td className={SaveInfo.conscol}>
                        <button className={SaveInfo.btnDelet}>Delete</button>
                    </td>
                    <td className={SaveInfo.conscol}>
                        <button className={SaveInfo.btnSend}>Send Message</button>
                    </td>
                </tr>
            </table>
            <div className={SaveInfo.tablePaginationBox}>
                <span className={SaveInfo.tablePagination1}>1</span>
                <span className={SaveInfo.tablePagination2}>2</span>
            </div>
        </section>
     );
}
 
export default GroupsTable;