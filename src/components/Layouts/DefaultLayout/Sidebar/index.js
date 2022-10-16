import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'


const cx = classNames.bind(styles) // trả  về 1 fun và giúp có thể viết tên class có dấu "-"
function Sidebar() {
    return  (
        <aside className={cx('wrapper')}>
            <h2>Sidebar</h2>
        </aside>
    )
}

export default Sidebar;