import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import PageHeader from '../../components/pageHeader/PageHeader';
import ProfileNavbar from '../../components/profileNavbar/ProfileNavbar';
import Layout from '../../layout/Layout';
import Change from './editProfile.module.css';

const EditProfile = () => {
    return (
        <Layout>
            <PageHeader header='Profile' />
            <div className={Change.editBox}>
                <div className={Change.editBoxCentered}>
                    <ProfileNavbar />
                    <div className={Change.editProfile}>
                        <div className={Change.editProfileCentered}>
                            <div className={Change.editRow}>
                                <div className={Change.editRow1}>
                                    <div className={Change.editRowUserBox}>
                                        <span className={Change.editUser}>Username:</span>
                                        <span className={Change.editUserName}>mistarfid</span>
                                    </div>
                                    <div className={Change.editStatusBox}>
                                        <span className={Change.editStatus}>Status:</span>
                                        <span className={Change.editActive}>Active</span>
                                    </div>
                                </div>
                                <div className={Change.editRow2}>
                                    <div className={Change.editImgBox}>
                                        <img src="/images/profile-pics.svg" alt="Profile" className={Change.editImg} />
                                    </div>
                                    <div className={Change.editImgBox2}>
                                        <label htmlFor="editImg" className={Change.editImgLabel}>
                                            <FontAwesomeIcon icon={faPencilAlt} className={Change.editImgIcon} />
                                        </label>
                                        <input type="file" id='editImg' className={Change.editImgInput} /> 
                                    </div>
                                </div>
                                <div className={Change.editRow3}>
                                    <span className={Change.editID}>I.D:1232344MYST3-2</span>
                                </div>
                            </div>
                            <div>
                                <div className={Change.editInputBox}>
                                    <form className={Change.editInputData}>
                                        <div className={Change.nameBox}>
                                            <div className={Change.lastNameBox}>
                                                <label htmlFor="lastName">Last Name</label>
                                                <input type="text" id='lastName' placeholder='Your Last Name' className={Change.inputLastName} />
                                            </div>
                                            <div className={Change.firstNameBox}>
                                                <label htmlFor="firstName">First Name</label>
                                                <input type="text" id='firstName' placeholder='Your First Name' className={Change.inputFirstName} />
                                            </div>
                                        </div>
                                        <div className={Change.emailBox}>
                                            <label htmlFor="email">Email</label>
                                            <input type="email" id='email' placeholder='Email Address' className={Change.inputEmailAddress} />
                                        </div>
                                        <div className={Change.phoneBox}>
                                            <label htmlFor="phone">Phone</label>
                                            <input type="text" id='phone' placeholder='Phone Number' className={Change.inputPhoneNumber} />
                                        </div>
                                        <div className={Change.addressBox}>
                                            <label htmlFor="address">Address</label>
                                            <input type="text" id='address' placeholder='Home Address' className={Change.inputAddressName} />
                                        </div>
                                        <div className={Change.residentBox}>
                                            <div className={Change.cityBox}>
                                                <label htmlFor="city">City</label>
                                                <input type="text" id='city' placeholder='City Name' className={Change.inputCityName} />
                                            </div>
                                            <div className={Change.stateNameBox}>
                                                <label htmlFor="state">State</label>
                                                <input type="text" id='state' placeholder='State Name' className={Change.inputStateName} />
                                            </div>
                                        </div>
                                        <div className={Change.countryZipBox}>
                                            <div className={Change.zipBox}>
                                                <label htmlFor="zip">zip Code</label>
                                                <input type="text" id='zip' placeholder='Zip Code' className={Change.inputZipCode} />
                                            </div>
                                            <div className={Change.countryBox}>
                                                <label htmlFor="country">Country</label>
                                                <input type="text" id='country' placeholder='Country Name' className={Change.inputCountryName} />
                                            </div>
                                        </div>
                                        <div className={Change.inputSubmitBox}>
                                            <input type="submit" value='Submit' className={Change.inputSubmit} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
 
export default EditProfile;