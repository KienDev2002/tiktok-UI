import Header from '~/components/Layouts/components/Header';
import Sidebar from './Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss'


const cx = classNames.bind(styles) // trả  về 1 fun và giúp có thể viết tên class có dấu "-"


//vì content thay đổi nên sẽ truyền children từ ngoài vào.
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <Sidebar></Sidebar>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
