import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Increment from '../components/increment'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/increment',
            name: 'increment',
            component: Increment
        }
    ]
})