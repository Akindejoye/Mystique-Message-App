import Layout from '../../layout/Layout';
import PageHeaderBtn from '../pageheaderbtn/PageHeaderBtn';
import CCG from './contactsContactGroup.module.css';
import { useState } from 'react';

const ContactsContactGroup = () => {

    const [editName, setEditName] = useState(false);

    return ( 
        <Layout>
            <PageHeaderBtn header='Contacts/Contact Group' />
            <section className={CCG.mainWrapper}>
                <div className={CCG.wrapper}>
                    <div className={CCG.forumBox}>
                        <div className={CCG.forumNameBox}>
                            <span className={CCG.forumNameTag}>Name:</span>
                            {
                                editName ? (
                                    <div className={CCG.forumNameEditBox}>
                                    <input type="text" placeholder='Village People Forum' className={CCG.forumNameEdit} />
                                    <button className={CCG.forumNameEditBtn}>Save</button>
                                </div>
                                ): (
                                    <div>
                                        <span className={CCG.forumName}>Village People Forum</span>
                                        <button 
                                            className={CCG.forumPenBtn}
                                            onClick={() => setEditName(!editName)}
                                        >
                                            <img src="/images/sm-pen.svg" alt="Pen" className={CCG.forumImg} />
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                        <div className={CCG.borderBottom}></div>
                        <div className={CCG.descriptionBox}>
                            <span className={CCG.descriptionTag}>Description:</span>
                            <button className={CCG.descrpBtn}>
                                <img src="/images/sm-pen.svg" alt="Pen" className={CCG.descrpImg} />
                            </button>
                            <p className={CCG.description}>
                                This is the committee set up to assist a friend with his marriage<br/>
                                arrangements. The contacts are all friends and acquaintaces<br/>
                                of the groom and could possibly include some of the bride's.
                            </p>
                        </div>
                        <div className={CCG.timeBox}>
                            <span className={CCG.timeTag}>Created at:</span>
                            <span className={CCG.timeDate}>21/08/2021</span>
                            <span className={CCG.time}>11:43 PM</span>
                        </div>
                    </div>
                    <div className={CCG.contactsNumberBox}>
                        <div className={CCG.contactSearchBox}>
                            <div className={CCG.contactBox}>
                                <span className={CCG.contactTag}>Contact:</span>
                                <span className={CCG.contact}>102</span>
                            </div>
                            <div className={CCG.searchBox}>
                                <input type="text" placeholder='Search sender ID, Contacts' className={CCG.searchInput} />
                                <img src="/images/search-ash.svg" alt="Search" className={CCG.searchIcon} />
                            </div>
                        </div>
                        <div className={CCG.numbersBox}>
                            <span className={CCG.numbersTag}>All Numbers</span>
                            <textarea className={CCG.textSpace}></textarea>
                        </div>
                        {
                            editName && (
                                <div className={CCG.editNumbersBox}>
                                    <span className={CCG.clearFieldTag}>Clear Field</span>
                                    <label htmlFor="upload" className={CCG.labelTag}>Upload CSV File</label>
                                    <input type="file" id='upload' className={CCG.inputNumbers} />
                                    <button className={CCG.saveBtn}>Save</button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </Layout>
     );
}
 
export default ContactsContactGroup;