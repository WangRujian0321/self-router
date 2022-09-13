import { createApp } from 'vue'
// import App from './App.vue'
import HistoryApp from './HistoryApp.vue'
import router from "@/router";

// createApp(App).mount('#app')
createApp(HistoryApp).use(router).mount('#app')
