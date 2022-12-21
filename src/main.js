import {
    createApp
} from 'vue'
import './style.css'
import 'flowbite'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'



createApp(App).use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
}).mount('#app')