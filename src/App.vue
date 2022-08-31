<template>
  <home-page />
</template>

<script>

import store from '@/store';
import HomePage from './pages/Home.vue';

export default {
  name: 'App',
  store,
  components: { HomePage },
};
</script>

<style>
  @import "./../node_modules/bootstrap/dist/css/bootstrap.css";
  @import "./../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  /* @import "./../node_modules/vue-slick-carousel/dist/vue-slick-carousel.css";
  @import "./../node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css"; */
</style>

<!-- <h1 class="welcome-message" id="welcome-message">Welcome Challenger!</h1> -->

<!-- .welcome-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffda30;
  font-size: 5rem;
  margin: 0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
} -->
