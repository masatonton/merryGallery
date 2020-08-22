import Vue from 'vue'
import VueRouter from "vue-router"
import Home from "./components/Home"
import Name1 from "./components/Name1"
import Recruit from "./components/Recruit"
import Reserve from "./components/Reserve"
import Price from "./components/Price"
import Guide from "./components/Guide"
import Qa from "./components/Qa"


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/price', component: Price},
        { path: '/guide', component: Guide},
        { path: '/q＆a', component: Qa},
        { path: '/reserve', component: Reserve},
        { path: '/recruit', component: Recruit},
        { path: '/name1', component: Name1 }]
  })

export default router