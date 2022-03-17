import Another from './newCard.module.css';

const NewCard = () => {
    return ( 
        <>
            <div className={Another.newCardWrapper}>
                <div className={Another.newCardCloseBox}>
                    <button className={Another.newCardCloseBtn}>
                        <img src="/images/close-x.svg" alt="Close" className={Another.newCardCloseBtnImg} />
                    </button>
                </div>
                <div className={Another.newCardHeaderBox}>
                    <h2 className={Another.newCardHeader}>Add New Card</h2>
                    <img src="/images/mastercard.svg" alt="Mastercard" className={Another.newCardMaster} />
                    <span className={Another.newVisaText}>Visa</span>
                    <img src="/images/visa.svg" alt="Visa Card" className={Another.newCardVisa} />
                </div>
                <form className={Another.newCardForm}>
                    <div className={Another.cardNumberBox}>
                        <label className={Another.cardNumberLabel}>Card Number</label>
                        <input 
                            type="text" 
                            placeholder='0000 - 0000 - 0000 - 0000' 
                            className={Another.inputCardNumber} 
                        />                                                                                                  
                    </div>
                    <div className={Another.expirationMainBox}>
                        <div className={Another.expirationMonthBox}>
                            <label className={Another.monthLabel}>Expiration</label>
                            <input 
                                type="text" 
                                placeholder='04' 
                                className={Another.expirationMonth} 
                            />
                        </div>  
                        <div className={Another.dividerBox}>
                            <span className={Another.divider}>/</span>
                        </div>
                        <div className={Another.expirationYearBox}>
                            <input 
                                type="text" 
                                placeholder='24' 
                                className={Another.expirationYear} 
                            />
                        </div>
                        <div className={Another.CVVBox}>
                            <label className={Another.cardCVVLabel}>CVV</label>
                            <input 
                                type="text" 
                                placeholder='777' 
                                className={Another.CVV} 
                            />
                            <img src="/images/info.svg" alt="More Information" className={Another.moreInfoIcon} />
                        </div>                                                                                                    
                    </div>
                    <div className={Another.cardTypeBox}>
                        <label className={Another.cardTypeLabel}>Card type</label>
                        <select className={Another.cardTypeSelect}>
                            <option className={Another.cardTypeOption} disabled selected>Debit</option>
                            <option className={Another.cardTypeOption}>Credit</option>
                            <option className={Another.cardTypeOption}>Others</option>
                        </select>
                    </div>
                    <div className={Another.nameOnCardBox}>
                        <label className={Another.nameOnCardLabel}>Name on Card</label>
                        <input 
                            type="text" 
                            placeholder='Francis Akindejoye' 
                            className={Another.nameOnCard} 
                        />                                                                                                  
                    </div>
                    <div className={Another.addCardBtnBox}>
                        <button className={Another.addCardBtn}>Add Card</button>
                    </div>
                </form>
            </div>
        </>
     );
}
 
export default NewCard;