import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import CourseType from './views/nav4/CourseType'
import Systemdictionary from './views/nav4/Systemdictionary'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page5 from './views/nav2/Page5.vue'
import Echarts from './views/charts/echarts'
import TenantRegister from './views/nav4/TenantRegister'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-bar-chart',
        leaf:true,
        children: [
            { path: '/echarts', component: Echarts, name: '主页' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '系统管理',
        iconCls: 'fa fa-superpowers',
        children: [
            { path: '/systemdictionary', component: Systemdictionary, name: '数据字典' },
            { path: '/role', component: Form, name: '角色管理' },
            { path: '/permission', component: user, name: '权限管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '课程管理',
        iconCls: 'fa fa-id-card-o',
        leaf: false,//只有一个节点
        children: [
            { path: '/coursetype', component: CourseType, name: '课程类型' },
            { path: '/course', component: Page5, name: '课程管理' }
        ]
    },
   {
        path: '/',
        component: Home,
        name: '租客管理',
        iconCls: 'fa fa-id-card-o',
        leaf: false,//只有一个节点
        children: [
            { path: '/tenantRegister', component: TenantRegister, name: '租客注册' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;