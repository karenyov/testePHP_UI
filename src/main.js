import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import NavBar from './components/NavBar.vue';
import SpinnerL from './components/SpinnerL.vue';

/**
 * Font Awesome Icons
 * 
 */
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"

/**
  * Bootstrap CSS, JS
  * 
*/
// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import "./styles.css"; // main css file

const app = createApp(App);
app.component('NavBar', NavBar);
app.component('SpinnerL', SpinnerL);
app.use(router);
app.mount('#app');
