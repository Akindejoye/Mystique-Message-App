import Password from './editSecurityProfile.module.css';
import Layout from './../../layout/Layout';
import ProfileNavbar from './../../components/profileNavbar/ProfileNavbar';
import PageHeader from '../../components/pageHeader/PageHeader';

const EditSecurityProfile = () => {
    return (
        <Layout>
            <PageHeader header='Profile' /> 
            <div className={Password.securityBox}>
                <div className={Password.securityBoxCentered}>
                    <ProfileNavbar />
                    <div className={Password.changePasswordBox}>
                        <div className={Password.passwordCentered}>
                            <h2 className={Password.settingHeader}>Security Setting</h2>
                            <div className={Password.authBox}>
                                <span className={Password.authText}>Activate Two-Factor auth</span>
                                <input type="checkbox" className={Password.authInput} />
                            </div>
                            <h3 className={Password.updateText}>Update Password</h3>
                            <form className={Password.updateForm}>
                                <label htmlFor="password" className={Password.labelSecure}>Old password</label>
                                <input type="password" id='password' placeholder='Old password' className={Password.genInput} />
                                <label htmlFor="newPassword" className={Password.labelSecure}>New password</label>
                                <input type="password" id='newPassword' placeholder='New password' className={Password.genInput} />
                                <label htmlFor="confPass" className={Password.labelSecure}>Confirm New password</label>
                                <input type="password" id='confPass' placeholder='Confirm new password' className={Password.genInput} />
                                <div className={Password.inputSubmitBox}>
                                    <input type="submit" value='Save' className={Password.inputSubmit} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
 
export default EditSecurityProfile;