<template>
  <div class="wraper">
    <CirCularProgress/>
    <home-page />
  </div>
</template>

<script>
import store from '@/store';
import HomePage from './pages/Home.vue';
import CirCularProgress from './components/CirCularProgress.vue';

export default {
  name: 'App',
  store,
  created() {
    const linkNode = document.createElement('link');
    linkNode.type = 'text/css';
    linkNode.rel = 'stylesheet';
    linkNode.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
    document.head.appendChild(linkNode);
  },
  components: { HomePage, CirCularProgress },
};
</script>

<style>
@import './../node_modules/bootstrap/dist/css/bootstrap.css';
@import './../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

.wraper {
  font-family: 'Jost';
}
</style>
