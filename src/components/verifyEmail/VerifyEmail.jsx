import Verify from './verifyEmail.module.css';

const VerifyEmail = () => {
    return (
        <>
            <div className={Verify.wrapper}>
                <div className={Verify.VerifyCentered}>
                    <h1 className={Verify.verifyLogo}>LOGO</h1>
                    <div className={Verify.verifyEmailBox}>
                        <div className={Verify.verifyEmailCentered}>
                            <h2 className={Verify.userName}>
                                Hi Fidelis,
                            </h2>
                            <p className={Verify.emailBody}>
                                You requested joining our platform, to verify your email, click on the button below to verify or copy<br />
                                the links and paste into a browser tab to verify.
                            </p>
                            <p className={Verify.verifyLinkSolid}>Verify Email</p>
                            <p className={Verify.verifyLink}></p>
                            <p className={Verify.verifyNote}>
                                If you did not remember trying to create this account, not a big deal, just ignore this email.
                            </p>
                        </div>
                    </div>
                    <div className={Verify.closeBox}>
                        <p className={Verify.verifyClose}>
                            Thanks and regards
                        </p>
                        <p className={Verify.verifyCompany}>
                            Mystique SMS Int.
                        </p>
                        <p className={Verify.companyDomain}>
                            www.mystiquesms.ng
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default VerifyEmail;