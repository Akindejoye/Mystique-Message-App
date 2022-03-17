import VerifyPaswr from './verifyPassword.module.css';

const VerifyPassword = () => {
    return (
        <>
            <div className={VerifyPaswr.wrapper}>
                <div className={VerifyPaswr.VerifyCentered}>
                    <h1 className={VerifyPaswr.verifyLogo}>LOGO</h1>
                    <div className={VerifyPaswr.verifyEmailBox}>
                        <div className={VerifyPaswr.verifyEmailCentered}>
                            <h2 className={VerifyPaswr.userName}>
                                Hi Fidelis,
                            </h2>
                            <p className={VerifyPaswr.emailBody}>
                                You requested joining to change your password.<br />
                                If this was you, click on the button below to set up a new password and make sure to remember it this time.
                            </p>
                            <p className={VerifyPaswr.verifyLinkSolid}>Reset Password</p>
                            <p className={VerifyPaswr.verifyNote}>
                                If you did not remember making this request, contact our support center now at <span className={VerifyPaswr.emailAdmin}>admin@mystiquesms.ng</span>
                            </p>
                        </div>
                    </div>
                    <div className={VerifyPaswr.closeBox}>
                        <p className={VerifyPaswr.verifyClose}>
                            Thanks and regards
                        </p>
                        <p className={VerifyPaswr.verifyCompany}>
                            Mystique SMS Int.
                        </p>
                        <p className={VerifyPaswr.companyDomain}>
                            www.mystiquesms.ng
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default VerifyPassword;