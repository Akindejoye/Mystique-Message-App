import React, { Component } from 'react';
import UserForm from '../css/CreateNewUsers.module.css';

const AdminForm = () => {
    return (
        <>
            <div className={UserForm.formContainer}>
                <div className={UserForm.formCentered}>
                    <p className={UserForm.formHeader}>Create New User</p>
                    <p className={UserForm.formSubHeader}>Create new user: An email will be sent to the user to verify and <br /> complete this process</p>
                    <input type="text" placeholder='Full name' className={UserForm.fullName} />
                    <div className={UserForm.selectCenteredBox1}>
                    <img src="/images/icon-select.svg" alt="Select" className={UserForm.btnSelect2} />
                        <select className={UserForm.selectEntity}>
                            <option className={UserForm.optionEntity}>Individual</option>
                            <option className={UserForm.optionEntity}>Others</option>
                        </select>
                        <img src="/images/icon-select.svg" alt="Select" className={UserForm.btnSelect3} />
                        <select className={UserForm.selectAccess}>
                            <option className={UserForm.optionAccess}>Permissions</option>
                            <option className={UserForm.optionAccess}>Others</option>
                        </select>
                        <img src="/images/icon-select.svg" alt="Select" className={UserForm.btnSelect3} />
                    </div>
                    <div className={UserForm.selectCenteredBox2}>
                    <img src="/images/icon-select.svg" alt="Select" className={UserForm.btnSelect3} />
                        <select className={UserForm.selectCredent}>
                                <option className={UserForm.optionCredent}>Qualification</option>
                                <option className={UserForm.optionCredent}>Others</option>
                            </select>
                            <img src="/images/icon-select.svg" alt="Select" className={UserForm.btnSelect4} />
                            <select className={UserForm.selectDesig}>
                                <option className={UserForm.optionAccess}>Designation</option>
                                <option className={UserForm.optionAccess}>Others</option>
                            </select>                                                                                                   
                    </div>
                    <input type="text" placeholder='Phone Number' className={UserForm.phoneNumber} />
                    <input type="email" placeholder='Enter Email' className={UserForm.email} />
                    <input type="submit" value='Send Email' className={UserForm.submitBtn} />
                </div>
            </div>
        </>
    );
}
 
export default AdminForm;