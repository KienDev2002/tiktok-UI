import classNames from 'classnames/bind';
import styles from './Header.module.scss'

const cx = classNames.bind(styles) // trả  về 1 fun và giúp có thể viết tên class có dấu "-"

function Header() {
    return  (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo, search */}
            </div>
        </header>
    )
}

export default Header;