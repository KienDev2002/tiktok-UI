import Header from '~/components/Layouts/components/Header';

//vì content thay đổi nên sẽ truyền children từ ngoài vào.
function HeaderOnly({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
