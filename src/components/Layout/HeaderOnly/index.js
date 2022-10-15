import Header from '~/components/Layout/components/Header';

//vì content thay đổi nên sẽ truyền children từ ngoài vào.
function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
