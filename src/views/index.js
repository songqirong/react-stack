import loadable from '@loadable/component';
import React from 'react';
import asyncRouter, { RouterHooks } from '@/utils/asyncRouter.js'; 
// import { Icon } from 'antd';
import { SmileOutlined,DownOutlined,FastBackwardOutlined,FastForwardOutlined} from '@ant-design/icons';
const Nav1 = asyncRouter(()=>import('@/views/study/nav1'));
const Nav2 = asyncRouter(()=>import('@/views/study/nav2'));
const Nav3 = asyncRouter(()=>import('@/views/study/nav3'));
const Nav4 = asyncRouter(()=>import('@/views/study/nav4'));
const Nav5 = asyncRouter(()=>import('@/views/study/nav5'));
const Nav6 = asyncRouter(()=>import('@/views/study/nav6'));
const Nav7 = asyncRouter(()=>import('@/views/study/nav7'));
const Nav8 = asyncRouter(()=>import('@/views/study/nav8'));
const Nav9 = asyncRouter(()=>import('@/views/study/nav9'));
const Hook = asyncRouter(()=>import('@/views/study/hook'));
const Status = asyncRouter(()=>import('@/views/study/status'));
const Good = asyncRouter(()=>import('@/views/good/goodList'));
const Detail = asyncRouter(()=>import('@/views/good/goodDetail'));
const MyRedux = asyncRouter(()=>import('@/views/study/myRedux'));

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
    {
        id:13,
        icon:<FastForwardOutlined />,
        path:'/my-redux',
        component: MyRedux,
        name:"学习redux"
    },
];

export default routes;
