import Title from './pageHeader.module.css';
import Time from './../../../components/common/Time';

const PageHeader = ({ header }) => {
    return (
        <div className={Title.mainHeaderCentered}>
                        <p className={Title.mainHeaderText}>{header}</p>
                        <Time />
                    </div>
    );
}
 
export default PageHeader;