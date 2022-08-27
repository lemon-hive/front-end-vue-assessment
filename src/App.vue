<template>
  <!-- <h1 class="welcome-message" id="welcome-message">Welcome Challenger!</h1> -->
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

<style scoped>
/* .welcome-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffda30;
  font-size: 5rem;
  margin: 0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
} */
</style>
