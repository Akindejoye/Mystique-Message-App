import Layout from '../../layout/Layout';
import PageHeaderBtn from '../../components/pageheaderbtn/PageHeaderBtn';
import Modals from './newMessageTemplate.module.css';
import Modal from 'react-modal';
import NewTemplate from '../../components/Module/newTemplate/NewTemplate';
import React, { useState } from 'react';

Modal.setAppElement('#root');

const NewMessageTemplate = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleClose = () => {
        setModalIsOpen(false);
    }

    return ( 
       <Layout>
           <PageHeaderBtn header="Message / Templates" />
           <div className={Modals.wrapper}>
               <div className={Modals.wrapperCentered}>
                   <div className={Modals.templateHeader}>
                       <p className={Modals.headerText}>Templates to quickly send message</p>
                       <button className={Modals.headerbtnBox} onClick={() => setModalIsOpen(true)}>
                           <img src="/images/cross-blue.svg" alt="Button" className={Modals.headerBtnImg} />
                           <span className={Modals.headerBtnText}>New Template</span>
                       </button>
                       <Modal 
                        isOpen={modalIsOpen} 
                        onRequestClose={() => setModalIsOpen(false)}
                        style={
                            {
                                overlay: {
                                    backgroundColor: 'grey'
                                }
                            }
                        }
                        >
                           <NewTemplate handleClose={handleClose} onRequest={() => setModalIsOpen(false)} />
                       </Modal>
                   </div>
                    <section className={Modals.templateTableSec}>
                        <div className={Modals.templateTableBox}>
                            <table className={Modals.templateTable}>
                                <tr className={Modals.templateTableRow}>
                                    <th className={Modals.templateTableHeader}>Sender I.D</th>
                                    <th className={Modals.templateTableHeader}>Message</th>
                                    <th className={Modals.templateTableHeader}>Date created</th>
                                </tr>
                                <tr className={Modals.templateTableRow}>
                                    <td className={Modals.templateTableCol}>JAMB NG</td>
                                    <td className={Modals.templateTableCol}>This is to inform you that...</td>
                                    <td className={Modals.templateTableCol}>21/08/2021</td>
                                    <td className={Modals.templateTableCol}>
                                        <button className={Modals.btnEdit}>Edit</button>
                                    </td>
                                    <td className={Modals.templateTableCol}>
                                        <button className={Modals.btnDelete}>Delete</button>
                                    </td>
                                    <td className={Modals.templateTableCol}>
                                        <button className={Modals.btnSend}>
                                            Send as message
                                        </button>
                                    </td>
                                </tr>
                                <tr className={Modals.templateTableRow}>
                                    <td className={Modals.templateTableCol}>NPF Recruitment</td>
                                    <td className={Modals.templateTableCol}>Aptitude test is schedule for...</td>
                                    <td className={Modals.templateTableCol}>21/08/2021</td>
                                    <td className={Modals.templateTableCol}>
                                        <button className={Modals.btnEdit}>Edit</button>
                                    </td>
                                    <td className={Modals.templateTableCol}>
                                        <button className={Modals.btnDelete}>Delete</button>
                                    </td>
                                    <td className={Modals.templateTableCol}>
                                        <button className={Modals.btnSend}>
                                            Send as message
                                        </button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className={Modals.num}>1</div>
                    </section>
               </div>
           </div>
       </Layout>
     );
}
 
export default NewMessageTemplate;