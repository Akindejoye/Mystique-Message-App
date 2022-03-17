import Layout from '../../../layout/Layout';
import PageHeader from '../../pageHeader/PageHeader';
import Circle from './newGroup.module.css';

const NewGroup = () => {
    return ( 
        <Layout>
            <PageHeader />
            <div className={Circle.templateWrapper}>
                <div className={Circle.templateCentered}>
                    <div className={Circle.templateHeaderBox}>
                        <div className={Circle.headerBtnBox}>
                            <button className={Circle.templateCloseBtn}>
                                <img src="/images/close-x.svg" alt="Delete" className={Circle.closeBtnImg} />
                            </button>
                        </div>
                        <h3 className={Circle.templateHeaderText}>Create New Contact</h3>
                    </div>
                    <div className={Circle.templateUploadBox}>
                        <label htmlFor="upload" className={Circle.uploadLabel}> Upload CSV File</label>
                        <input type="file" id='upload' className={Circle.templateUpload} />
                    </div>
                    <div className={Circle.templateNameBox}>
                        <input 
                            type="text" 
                            placeholder='Group name'
                            className={Circle.templateName} 
                        />
                    </div>
                    <div className={Circle.templateDescriptionBox}>
                        <textarea
                            type="textarea" 
                            placeholder='Group description'
                            className={Circle.templateDescription} 
                        />
                    </div>
                    <div className={Circle.templateCreateBtnBox}>
                        <button className={Circle.templateCreateBtn}>Create</button>
                    </div>
                </div>
            </div>
        </Layout>
     );
}
 
export default NewGroup;