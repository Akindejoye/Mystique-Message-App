import React from 'react';
import UserColumn from '../../css/AllUserColumn.module.css';

const AllUsersColumn = () => {
    return (
        <div className={UserColumn.container}>
            <div className={UserColumn.leftSection}>
                <p className={UserColumn.usersText}>All Users</p>
                <select className={UserColumn.select}>
                    <option className={UserColumn.option}>Individual</option>
                    <option className={UserColumn.option}>Company</option>
                    <option className={UserColumn.option}>All</option>
                </select>
            </div>
            <div className={UserColumn.rightSection}>
                    <div className={UserColumn.inputBox}>
                        <img src=" /images/filter-search.svg" alt="Searc-icon" className={UserColumn.inputIcon} />
                        <input type="text" placeholder = "Search name/ID" className={UserColumn.inputFilter} />
                    </div>
                <div className={UserColumn.filterBox}>
                    <img src="/images/filter-white.svg" alt="Filter-icon" className={UserColumn.filterIcon} />
                    <p className={UserColumn.filterText}>Filter</p>
                </div>
                <div className={UserColumn.shapeType}>
                    <button className={UserColumn.typeBtn}>
                        <img src="/images/block-type.svg" alt="Block Display" className={UserColumn.typeBtnImg} />
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default AllUsersColumn;