import { ref, inject } from "vue";
import RouterLink from "./RouterLink.vue";
import RouterView from "./RouterView.vue";
const ROUTER_KEY = '__router__'

function useRouter(){
    return inject(ROUTER_KEY)
}

function createWebHistory() {
    function binEvents(fn) {
        window.addEventListener('popstate', fn);
    }
    return {
        binEvents,
        type: 'History',
        url: ()=> window.history.state?window.history.state.url:'/',
    }
}
function createWebHashHistory(){
    function binEvents(fn){
        window.addEventListener('hashchange', fn);
    }
    return {
        binEvents,
        type: 'Hash',
        url: () => window.location.hash.slice(1) || '/404'
    }
}

function createRouter(options){
    return new Router(options)
}

class Router {
    constructor(options) {
        this.history = options.history;
        this.routes = options.routes;
        this.current = ref(this.history.url())
        this.history.binEvents(()=>{
            this.current.value = this.history.url();
        })
    }
    install(app) {
        app.provide(ROUTER_KEY, this)
        .component("router-link", RouterLink)
        .component("router-View", RouterView)
    }
}

export { useRouter, createRouter, createWebHistory, createWebHashHistory }
