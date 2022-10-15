import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';


//vì content thay đổi nên sẽ truyền children từ ngoài vào.
function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <Sidebar></Sidebar>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
