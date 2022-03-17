import React, { useState } from 'react';
import Encrypt from './sendID.module.css';

const SendID = () => {

    const [time, setTime] = useState(false);

    const handleChange = (e) => {
        setTime(e.target.checked);
        console.log('button checked');
    }

    return (
        <div className={Encrypt.senderBox}>
            <h3 className={Encrypt.headerText}>Sender I.D</h3>
            <div className={Encrypt.headerDisplayBox}>
                <div className={Encrypt.displayTextBox}>
                    <p className={Encrypt.displayText}>Jamb Ng</p>
                </div>
                <div className={Encrypt.selectInputBox}>
                    <select className={Encrypt.displaySelect}>
                        <option>Select Template</option>
                        <option>JAMP NG</option>
                        <option>NPF Recruitment</option>
                    </select>
                    <div className={Encrypt.radioBox}>
                        <input 
                            type="radio" 
                            id="radio"
                            value = {time}
                            checked={time}
                            onChange = {handleChange}
                            className={Encrypt.radioInput} 
                        />
                        <label 
                            htmlFor="radio" 
                            className={Encrypt.radioLabel}>
                            Send Later
                        </label>
                    </div>
                </div>
            </div>
            {
                time && (
                    <div className={Encrypt.dateTimeBox}>
                        <span className={Encrypt.dateTimeText}>Set Date/Time</span>
                        <input type="date" className={Encrypt.dateInput} />
                        <input type="time" className={Encrypt.timeInput} />
                    </div>  
                )
            }
        </div>
    );
}
 
export default SendID;