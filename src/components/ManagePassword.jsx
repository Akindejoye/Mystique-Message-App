import React, { Component } from 'react';
import ResetForm from '../css/ManagePasswords.module.css';

const AdminForm = () => {
    return (
        <>
            <div className={ResetForm.formContainer}>
                <div className={ResetForm.formCentered}>
                    <p className={ResetForm.formHeader}>Manage Password</p>
                    <p className={ResetForm.formSubHeader}>Create a strong password and always remember it</p>
                    <input type="text" placeholder='Old Password' className={ResetForm.oldPass} />
                    <input type="password" placeholder='New Password' className={ResetForm.newPass} />
                    <input type="password" placeholder='Confirm Password' className={ResetForm.confirmPass} />
                    <input type="submit" value='confirm' className={ResetForm.submitBtn} />
                </div>
            </div>
        </>
    );
}
 
export default AdminForm;