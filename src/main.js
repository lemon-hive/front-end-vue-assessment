import wrap from '@vue/web-component-wrapper';

import Vue from 'vue';

import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

const CustomElement = wrap(Vue, App);

window.customElements.define('test-webcomponent', CustomElement);
