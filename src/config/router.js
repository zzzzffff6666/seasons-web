import { createRouter, createWebHashHistory } from 'vue-router';

const Login = ()=> import('@/components/connect/login.vue')
const Register = ()=> import('@/components/connect/register.vue')
const Home = () => import('@/components/plat/home.vue')

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/',
        redirect: '/home',
        component: Home
    }
]
export default createRouter({
    history: createWebHashHistory(),
    routes
});
