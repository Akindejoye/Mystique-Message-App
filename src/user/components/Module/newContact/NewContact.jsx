import Layout from '../../../layout/Layout';
import PageHeader from '../../pageHeader/PageHeader';
import Contact from './newContact.module.css';

const NewContact = () => {
    return ( 
        <Layout>
            <PageHeader />
            <div className={Contact.templateWrapper}>
                <div className={Contact.templateCentered}>
                    <div className={Contact.templateHeaderBox}>
                        <div className={Contact.headerBtnBox}>
                            <button className={Contact.templateCloseBtn}>
                                <img src="/images/close-x.svg" alt="Delete" className={Contact.closeBtnImg} />
                            </button>
                        </div>
                        <h3 className={Contact.templateHeaderText}>Create New Contact</h3>
                    </div>
                    <div className={Contact.templateUploadBox}>
                        <label htmlFor="upload" className={Contact.uploadLabel}> Upload CSV File</label>
                        <input type="file" id='upload' className={Contact.templateUpload} />
                    </div>
                    <div className={Contact.templateNameBox}>
                        <input 
                            type="text" 
                            placeholder='Name'
                            className={Contact.templateName} 
                        />
                    </div>
                    <div className={Contact.templateNumberBox}>
                        <input 
                            type="text" 
                            placeholder='Phone Number'
                            className={Contact.templateNumber} 
                        />
                    </div>
                    <div className={Contact.templateCreateBtnBox}>
                        <button className={Contact.templateCreateBtn}>Create</button>
                    </div>
                </div>
            </div>
        </Layout>
     );
}
 
export default NewContact;