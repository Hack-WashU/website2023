import { createApp } from 'vue'
import './assets/reset.css'
import App from './App.vue'
import VueGtag from "vue-gtag";

createApp(App).use(VueGtag, {
    config: { id: 'G-SD3BFH9QTK' }
}).mount('#app')
