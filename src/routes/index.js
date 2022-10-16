import {HeaderOnly} from '~/components/Layouts'

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import NoPage from '~/pages/NoPage';

//ko cần đăng nhập
const publicRoutes = [
    {path: '/', component : Home},
    {path: '/following', component : Following},
    {path: '/profile', component : Profile},
    {path: '/upload', component : Upload , layout : HeaderOnly},
    {path: '/search', component : Search , layout : null},
    {path: '/*', component : NoPage,layout : null },
]

const privateRoutes= [

]

export {publicRoutes,privateRoutes}