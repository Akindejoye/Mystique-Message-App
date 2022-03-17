import DataFilter from '../../../components/common/dataFilter/DataFilter';
import PageHeader from '../../components/pageHeader/PageHeader';
import Layout from '../../layout/Layout';
import Vacant from './contactEmpty.module.css';
import { useState } from 'react';
import ContactsTable from '../../components/contactsTable/ContactsTable';
import GroupsTable from '../../components/groupsTable/GroupsTable';

const ContactEmpty = () => {

    const [contacts, setContacts] = useState(false);
    // const [groups, setGroups] = useState(false);

    return ( 
        <Layout>
            <PageHeader header='Contacts' />
            <div className={Vacant.contactWrapper}>
                <DataFilter />
                <section className={Vacant.sectionContacts}>
                    <ul className={Vacant.contactsList}>
                        <li className={Vacant.contactsListItem}>
                        <button 
                            className={`${Vacant.contactsListItemBtn} ${Vacant.active}`}
                            onClick={() => setContacts(!contacts)}
                        >
                                My Contacts
                        </button>
                        </li>
                        <li className={Vacant.contactsListItem}>
                            <button 
                                className={`${Vacant.contactsListItemBtn} ${Vacant.litstItem2}`}
                                onClick={() => setContacts(!contacts)}
                            >
                            Contact Groups
                            </button>
                        </li>
                    </ul>
                    {/* <ContactsTable /> */}
                    <GroupsTable />
                    {/* <span className={Vacant.border}></span>
                    <div className={Vacant.contactsBody}>
                            <div className={Vacant.contactsBodyTop}>
                                <h3 className={Vacant.contactsBodyHeader}>You do not have any contact added</h3>
                                <button className={Vacant.headerBtn}>
                                    <span className={Vacant.iconBox}>
                                        <i className="headerIcon fas fa-plus"></i>
                                    </span>
                                    <span className={Vacant.headerBtnText}>Add Contact</span>
                                </button>
                            </div>
                                <div className={Vacant.contactsBodyTop}>
                                    <h3 className={Vacant.contactsBodyHeader}>You do not have any group created</h3>
                                    <button className={Vacant.headerBtn}>
                                        <span className={Vacant.iconBox}>
                                            <i className="headerIcon fas fa-plus"></i>
                                        </span>
                                        <span className={Vacant.headerBtnText}>Create Group</span>
                                    </button>
                                </div>
                            <div className={Vacant.contactImgBox}>
                                <img src="images/contacts.svg" alt="Contact" className={Vacant.contactImg} />
                            </div>
                        </div> */}
                </section>
            </div>
        </Layout>
     );
}
 
export default ContactEmpty;