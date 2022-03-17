import Scores from './unit.module.css';
import Pie from './pie-chart.svg';
import RightArr from './right-arrow.svg'
import UnitChart from '../unitChart/UnitChart';
import { Link } from 'react-router-dom';

const Unit = () => {
    return (
        <div className={Scores.wrapper}>
            <div className={Scores.wrapperCentered}>
                <div className={Scores.profileUnit}>
                    <div className={Scores.unitCentered}>
                        <Link to='/userprofile'>
                            <img src="/images/profile-pics.svg" alt="Profile" className={Scores.profileImg} />
                        </Link>
                        <h3 className={Scores.profileName}>Francis Akindejoye</h3>
                        <span className={Scores.unitAvailable}>Unit 101.00</span>
                        <span className={Scores.unitText}>Units Available</span>
                        <button className={Scores.unitButton}>+Top<br/>Up</button>
                    </div>
                </div>
                <div className={Scores.unitBalance}>
                    <div className={Scores.unitChartBox}>
                        <div className={Scores.unitBalancePieBox}>
                            <UnitChart />
                        </div>
                        <div className={Scores.unitBalanceLegendBox}>
                            <div className={Scores.legendBalance}>
                                <span className={Scores.legendBalanceColor}></span>
                                <span className={Scores.legendBalanceText}>Unit Balance</span>
                            </div>
                            <div className={Scores.legendExpended}>
                                <span className={Scores.legendExpendedColor}></span>
                                <span className={Scores.legendExpendedText}>Unit Expended</span>
                            </div>
                        </div>
                    </div>
                    <div className={Scores.summaryContainer}>
                        <div className={Scores.summaryCentered}>
                            <div className={Scores.summaryHeaderWrapper}>
                                <p className={Scores.summaryHeaderText}>Messages Summary</p>
                                <button className={Scores.summaryFilterBtn}>
                                    <img src="/images/filter-white.svg" alt="Filter" className={Scores.summaryFilterImg} />
                                    <span className={Scores.filterBtnText}>Filter</span>
                                </button>
                            </div>
                                <div className={Scores.summaryCardsContainer}>
                                    <div className={Scores.summaryCardsCentered}>
                                        <div className={Scores.cardTop}>
                                            <div className={Scores.sentCard}>
                                                <div className={Scores.sentCardCentered}>
                                                    <h3 className={Scores.sentCardText}>Sent Messages</h3>
                                                    <span className={Scores.sentCardFigure}>211</span>
                                                    <button className={Scores.sentCardBtn}>
                                                        <span className={Scores.sentCardBtnText}>See More</span>
                                                        <img src={RightArr} alt="Right Arrow" className={Scores.sentCardBtnImg} />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={Scores.deliveredCard}>
                                                <div className={Scores.deliveredCardCentered}>
                                                    <h3 className={Scores.deliveredCardText}>Delivered Messages</h3>
                                                    <span className={Scores.deliveredCardFigure}>200</span>
                                                    <button className={Scores.deliveredCardBtn}>
                                                        <span className={Scores.deliveredCardBtnText}>See More</span>
                                                        <img src={RightArr} alt="Right Arrow" className={Scores.deliveredCardBtnImg} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Scores.cardBottom}>
                                            <div className={Scores.failedCard}>
                                                <div className={Scores.failedCardCentered}>
                                                    <h3 className={Scores.failedCardText}>Failed Messages</h3>
                                                    <span className={Scores.failedCardFigure}>004</span>
                                                    <button className={Scores.failedCardBtn}>
                                                        <span className={Scores.failedCardBtnText}>See More</span>
                                                        <img src={RightArr} alt="Right Arrow" className={Scores.failedCardBtnImg} />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={Scores.pendingCard}>
                                                <div className={Scores.pendingCardCentered}>
                                                    <h3 className={Scores.pendingCardText}>Pending Messages</h3>
                                                    <span className={Scores.pendingCardFigure}>007</span>
                                                    <button className={Scores.pendingCardBtn}>
                                                        <span className={Scores.pendingCardBtnText}>See More</span>
                                                        <img src={RightArr} alt="Right Arrow" className={Scores.pendingCardBtnImg} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Unit;