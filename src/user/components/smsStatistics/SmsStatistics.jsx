import BarCharts from '../barChart/BarCharts';
import Stats from './smsStatistics.module.css';

const SmsStatistics = () => {
    return (
        <div className={Stats.smsWrapper}>
            <div className={Stats.smsCentered}>
                <div className={Stats.smsChartSection}>
                    <h2 className={Stats.chartHeader}>SMS Statistics</h2>
                    <p className={Stats.chartInstruction}>All sms services are shown graphically here</p>
                    <div className={Stats.chart}>
                        <BarCharts />
                    </div>
                    <select name="year" className={Stats.selectYear}>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                    </select>
                    <select name="year" className={Stats.selectMonth}>
                        <option>Jan</option>
                        <option>Feb</option>
                        <option>Mar</option>
                        <option>Apr</option>
                        <option>May</option>
                        <option>Jun</option>
                        <option>Jul</option>
                        <option>Aug</option>
                        <option>Sep</option>
                        <option>Oct</option>
                        <option>Nov</option>
                        <option>Dec</option>
                    </select>
                </div>
                <section className={Stats.payment}>
                    <div className={Stats.paymentCentered}>
                        <h2 className={Stats.paymentHeader}>Payments Details</h2>
                        <div className={Stats.paymentHeaderBorder}></div>
                        <div className={Stats.paymentDetailsBox}>

                            <div className={Stats.paymentDetail1}>
                                <span className={Stats.paymentDetail1A}>Last payment amount</span>
                                <span className={Stats.paymentDetailB}>#2,000</span>
                            </div>
                            <div className={Stats.paymentDetail2}>
                                <span className={Stats.paymentDetail2A}>Payment Method</span>
                                <span className={Stats.paymentDetail2B}>Card payment</span>
                            </div>
                            <div className={Stats.paymentDetail3}>
                                <span className={Stats.paymentDetail3A}>Payment Status</span>
                                <span className={Stats.paymentDetail3B}>Success</span>
                            </div>
                            <div className={Stats.paymentDetail4}>
                                <span className={Stats.paymentDetail4A}>Payment Date</span>
                                <span className={Stats.paymentDetail4B}>12-08-2021</span>
                            </div>
                            <div className={Stats.paymentDetail5}>
                                <span className={Stats.paymentDetail5A}>Card Details</span>
                                <span className={Stats.paymentDetail5B}>*************4242</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
 
export default SmsStatistics;