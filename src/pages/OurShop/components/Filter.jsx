import { MdGridOn } from 'react-icons/md';
import { CiBoxList } from 'react-icons/ci';
import styles from '../styles.module.scss';

function Filter() {
    const { containerFilter, boxIcons, boxLeft, boxRight } = styles;
    return (
        <div className={containerFilter}>
            <div className={boxLeft}>
                <select>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                <div className={boxIcons}>
                    <MdGridOn style={{ fontSize: '20px' }} />
                    <div
                        style={{
                            height: '20px',
                            width: '1px',
                            backgroundColor: '#e1e1e1'
                        }}
                    />
                    <CiBoxList style={{ fontSize: '20px' }} />
                </div>
            </div>
            <div className={boxRight}>
                <select>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;
