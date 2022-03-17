import React, { Component } from 'react';
import AdForm from '../css/AdminForms.module.css';

const AdminForm = () => {
    return (
        <>
            <div className={AdForm.formContainer}>
                <div className={AdForm.formCentered}>
                    <p className={AdForm.formHeader}>Admin Form</p>
                    <p className={AdForm.formSubHeader}>Add admin with permissions</p>
                    <input type="text" placeholder='Full name' className={AdForm.fullName} />
                    <div className={AdForm.selectDesigContainer}>
                        <img src="/images/icon-select.svg" alt="Select" className={AdForm.btnSelect} />
                        <select className={AdForm.selectDesig}>
                            <option className={AdForm.optionDesig}>Designation</option>
                            <option className={AdForm.optionDesig}>Others</option>
                        </select>
                    </div>
                    <div className={AdForm.selectCenteredBox}>
                    <img src="/images/icon-select.svg" alt="Select" className={AdForm.btnSelect2} />
                        <select className={AdForm.selectCredent}>
                            <option className={AdForm.optionCredent}>Qualification</option>
                            <option className={AdForm.optionCredent}>Others</option>
                        </select>
                        <img src="/images/icon-select.svg" alt="Select" className={AdForm.btnSelect3} />
                        <select className={AdForm.selectAccess}>
                            <option className={AdForm.optionAccess}>Designation</option>
                            <option className={AdForm.optionAccess}>Others</option>
                        </select>
                    </div>
                    <input type="text" placeholder='Ref.number' className={AdForm.refNumber} />
                    <input type="password" placeholder='Create password' className={AdForm.paswrd} />
                    <input type="password" placeholder='Confirm password' className={AdForm.conPaswrd} />
                    <input type="submit" value='confirm' className={AdForm.submitBtn} />
                </div>
            </div>
        </>
    );
}
 
export default AdminForm;