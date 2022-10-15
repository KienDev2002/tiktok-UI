import {Fragment} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './components/Layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {

                        let Layout = DefaultLayout;

                        if(route.layout){
                            Layout = route.layout
                        }else if (route.layout===null){
                            Layout = Fragment
                        }

                        //element là cần 1 react element nên cần chuyển qua react element bằng chữ hoa
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page></Page>
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
