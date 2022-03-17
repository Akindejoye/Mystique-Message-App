import Sieve from './dataFilter.module.css';

const DataFilter = () => {
    return (
        <div className={Sieve.filterContainer}>
            <img src="/images/filter-ash.svg" alt="Filter" className={Sieve.filterImg} />
            <select className={Sieve.filterMonth}>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
            </select>
            <input
             type="date"
             min = '2020-12-31'
             className={Sieve.filterCalender}
            />
             <div className={Sieve.inputBox}>
                <img src=" /images/filter-search.svg" alt="Searc-icon" className={Sieve.inputIcon} />
                <input type="text" placeholder = "Search sender ID, Contacts" className={Sieve.inputFilter} />
            </div>
        </div>
    );
}
 
export default DataFilter;