import Cardez from './cardPlatform.module.css'

const CardPlatform = () => {
    return (
        <div className={Cardez.platformBox}>
            <div className={Cardez.platformCardBox}>
                <div className={Cardez.platformCardCentered}>
                    <div className={Cardez.platformCard}>
                        <div className={Cardez.platformInnerCent}>
                            <div className={Cardez.platformInnerbox}>
                                <img src="/images/gt-theme.gif" alt="Logo" className={Cardez.platformLogo} />
                                <p className={Cardez.platformText}>gtbank</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CardPlatform;