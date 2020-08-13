import loadable from '@loadable/component';
import React from 'react';
// import { Icon } from 'antd';
import { SmileOutlined,DownOutlined,FastBackwardOutlined,FastForwardOutlined} from '@ant-design/icons';
const Nav1 = loadable(()=>import('@/views/study/nav1'));
const Nav2 = loadable(()=>import('@/views/study/nav2'));
const Nav3 = loadable(()=>import('@/views/study/nav3'));
const Nav4 = loadable(()=>import('@/views/study/nav4'));
const Nav5 = loadable(()=>import('@/views/study/nav5'));
const Nav6 = loadable(()=>import('@/views/study/nav6'));
const Nav7 = loadable(()=>import('@/views/study/nav7'));
const Nav8 = loadable(()=>import('@/views/study/nav8'));
const Nav9 = loadable(()=>import('@/views/study/nav9'));
const Hook = loadable(()=>import('@/views/study/hook'));
const Status = loadable(()=>import('@/views/study/status'));
const Good = loadable(()=>import('@/views/good/goodList'));
const Detail = loadable(()=>import('@/views/good/goodDetail'));

const routes = [
    {
        id:1,
        icon:<SmileOutlined />,
        path:'/nav1',
        component: Nav1,
        name:"nav1",
        
    },
    {
        id:2,
        icon:<DownOutlined />,
        path:'/nav2',
        component: Nav2,
        name:"nav2"
    },
    {
        id:3,
        icon:<FastBackwardOutlined />,
        path:'/nav3',
        component: Nav3,
        name:"nav3"
    },
    {
        id:4,
        icon:<FastForwardOutlined />,
        path:'/nav4',
        component: Nav4,
        name:"nav4"
    },
    {
        id:5,
        icon:<FastForwardOutlined />,
        path:'/nav5',
        component: Nav5,
        name:"nav5"
    },
    {
        id:6,
        icon:<FastForwardOutlined />,
        path:'/nav6',
        component: Nav6,
        name:"nav6"
    },
    {
        id:7,
        icon:<FastForwardOutlined />,
        path:'/nav7',
        component: Nav7,
        name:"nav7"
    },
    {
        id:8,
        icon:<FastForwardOutlined />,
        path:'/nav8',
        component: Nav8,
        name:"nav8"
    },
    {
        id:9,
        icon:<FastForwardOutlined />,
        path:'/nav9',
        component: Nav9,
        name:"nav9"
    },
    {
        id:10,
        icon:<FastForwardOutlined />,
        path:'/good',
        component:Good,
        name:"商品列表",
        Children:[
            {
                id:1001,
                icon:'',
                path:'/good/detail/:id',
                component:Detail,
                name:"商品详情"
            }
        ]
    },
    {
        id:11,
        icon:<FastForwardOutlined />,
        path:'/hook',
        component: Hook,
        name:"Hook组件"
    },
    {
        id:12,
        icon:<FastForwardOutlined />,
        path:'/status',
        component: Status,
        name:"状态管理"
    },
];

export default routes;
