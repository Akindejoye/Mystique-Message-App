import React, { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import PriceEdit from './components/PriceEdit';
import Pricing from './components/Pricing';
import PricingPlan from './components/PricingPlan';
import UserAllTitles from './components/UserAllTiles';
import UsersAllList from './components/UsersAllList';
import UsersDetails from './components/UsersDetails';
import AdminProfile from './components/AdminProfile';
import DashboardAnalytics from './components/DashboardAnalytics';
import AdminForm from './components/AdminForm';
import CreateNewUser from './components/CreateNewUser';
import ManagePassword from './components/ManagePassword';
import MaterialTable from './components/common/MaterialTable';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signUp/SignUp';
import SignUpSuccess from './components/signUpSuccess/SignUpSuccess';
import './App.css';
import ForgottenPassword from './components/forgottenPassword/ForgottenPassword';
import EmailInstruction from './components/emailInstruction/EmailInstruction';
import ResetPassword from './components/resetPassword/ResetPassword';
import LandingPage from './components/landingPage/LandingPage';
import VerifyEmail from './components/verifyEmail/VerifyEmail';
import VerifyPassword from './components/verifyPassword/VerifyPassword';
import LandingPricing from './components/landingPricing/LandingPricing';
import ManageMessage from './components/manageMessage/ManageMessage';
import MessageDetails from './components/manageMessage/messageDetails/MessageDetails';
import AboutUs from './components/aboutUs/AboutUs';
import AdminSettings from './components/adminSettings/AdminSettings';
import UserDashboard from './user/pages/userDashboard/UserDashboard';
import DashboardProfile from './user/pages/dashboardProfile/DashboardProfile';
import EditProfile from './user/pages/editProfile/EditProfile';
import NotificationProfile from './user/pages/notificationProfile/NotificationProfile';
import EditSecurityProfile from './user/pages/editSecurityProfile/EditSecurityProfile';
import MessagesAllList from './user/pages/messagesAllList/MessagesAllList';
import NewMessageSN from './user/pages/new_message_send-now/NewMessageSN';
import NewMessageTemplate from './user/pages/newMessageTemplates/NewMessageTemplate';
import TemplateDetails from './user/components/Module/templateDetails/TemplateDetails';
import MessagePreview from './user/components/Module/messagePreview/MessagePreview';
import NewTemplate from './user/components/Module/newTemplate/NewTemplate';
import BulkMessages from './user/pages/bulkMessages/BulkMessages';
import NewBulkMessage from './user/pages/new_bulk_message/NewBulkMessage';
import ContactEmpty from './user/pages/contactEmpty/ContactEmpty';
import ContactsContactGroup from './user/components/contactsContactGroup/ContactsContactGroup';
import NewContact from './user/components/Module/newContact/NewContact';
import NewGroup from './user/components/Module/newGroup/NewGroup';
import PaymentsPricing from './user/pages/paymentsPricing/PaymentsPricing';
import PaymentSelectBank from './user/pages/paymentSelectBank/PaymentSelectBank';
import PaymentHistory from './user/pages/paymentHistory/PaymentHistory';
import NewCard from './user/components/Module/newCard/NewCard';
import DeleteWarning from './user/components/Module/deleteWarning/DeleteWarning';
import DeleteWarningSent from './user/components/Module/deleteWarningSent/DeleteWarningSent';
import Support from './user/pages/support/Support';
import UserNotification from './user/pages/userNotification/UserNotification';
import NoficationDetails from './user/components/Module/notificationDetails/NotificationDetails';
import NavbarElement from './components/navbar/NavbarElement';
import Navbar from './components/navbar/Navbar';
import SignUpNav from './components/navbar/SignUp';

const App = () => {


  return (
    <React.Fragment>
      <div className='App'>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/landingprice" component={LandingPricing} />
          <Route path="/about" component={AboutUs} />
          <Route path="/user" component={UsersAllList} />
          <Route path="/userdetails" component={UsersDetails} />
          <Route path="/usertitles" component={UserAllTitles} />
          <Route path="/adminsettings" component={AdminSettings} />
          <Route path="/managemessage" component={ManageMessage} />
          <Route path="/messagedetails" component={MessageDetails} />
          <Route path="/adlogin" component={AdminLogin} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/modifyprice" component={PriceEdit} />
          <Route path="/pricingplan" component={PricingPlan} />
          <Route path="/adprofile" component={AdminProfile} />
          <Route path="/analytics" component={DashboardAnalytics} />
          <Route path="/addadmin" component={AdminForm} />
          <Route path="/adduser" component={CreateNewUser} />
          <Route path="/resetpassword" component={ManagePassword} />
          <Route path="/materialtable" component={MaterialTable} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signupsuccess" component={SignUpSuccess} />
          <Route path="/forgottenpassword" component={ForgottenPassword} />
          <Route path="/emailinstruction" component={EmailInstruction} />
          <Route path="/resetpass" component={ResetPassword} />
          <Route path="/verifyemail" component={VerifyEmail} />
          <Route path="/verifypassword" component={VerifyPassword} />
          <Route path="/userDashboard" component={UserDashboard} />
          <Route path="/userprofile" component={DashboardProfile} />
          <Route path="/editprofile" component={EditProfile} />
          <Route path="/notificationprofile" component={NotificationProfile} />
          <Route path="/editsecurity" component={EditSecurityProfile} />
          <Route path="/messagesalllist" component={MessagesAllList} />
          <Route path="/newmessagesendnow" component={NewMessageSN} />
          <Route path="/newmessagetemplate" component={NewMessageTemplate} />
          <Route path="/templatedetails" component={TemplateDetails} />
          <Route path="/messagepreview" component={MessagePreview} />
          <Route path="/newtemplate" component={NewTemplate} />
          <Route path="/bulkmessages" component={BulkMessages} />
          <Route path="/newbulkmessage" component={NewBulkMessage} />
          <Route path="/contactempty" component={ContactEmpty} />
          <Route path="/contactgroup" component={ContactsContactGroup} />
          <Route path="/newcontact" component={NewContact} />
          <Route path="/newgroup" component={NewGroup} />
          <Route path="/paymentpricing" component={PaymentsPricing} />
          <Route path="/paymentselectbank" component={PaymentSelectBank} />
          <Route path="/paymenthistory" component={PaymentHistory} />
          <Route path="/newcard" component={NewCard} />
          <Route path="/deletewarning" component={DeleteWarning} />
          <Route path="/deletewarningsent" component={DeleteWarningSent} />
          <Route path="/support" component={Support} />
          <Route path="/usernotification" component={UserNotification} />
          <Route path="/notificationdetails" component={NoficationDetails} />
          <Route path="/navbar" component={Navbar} />
          <Route path="/signupnav" component={SignUpNav} />
        </Switch>
      </div>
    </React.Fragment>
  );
}
 
export default App;