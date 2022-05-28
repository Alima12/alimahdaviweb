import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import axios  from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';

axios.defaults.baseURL = 'https://api.alimahdavimehr.ir/';


createApp(App).use(store).use(VueSweetalert2).mount('#app')
