import Vue from 'vue'
import App from './App'
import router from './router'

import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/styles.css';
import './assets/css/checked.css';


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})