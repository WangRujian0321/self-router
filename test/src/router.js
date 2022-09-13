import {
    createRouter,
    createWebHistory,
} from "@/router-made";
import HelloPage from "@/components/HelloPage";
import AboutPage from "@/components/AboutPage";
import NotFound from "@/components/NotFound";

const routes = [{
    path: '/',
    name: 'Home',
    component: HelloPage,
}, {
    path: '/home',
    name: 'Home',
    component: HelloPage
}, {
    path: '/about',
    name: 'About',
    component: AboutPage,
}, {
    path: '*',
    name: 'NotFound',
    component: NotFound,
}]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
export default router
