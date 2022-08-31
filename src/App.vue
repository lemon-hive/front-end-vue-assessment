<template>
  <!-- <h1 class="welcome-message" id="welcome-message">Welcome Challenger!</h1> -->
  <!-- <home-page /> -->

  <div>

    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>

    <b-list-group >
      <b-list-group-item>Current Temparature: C</b-list-group-item>
      <b-list-group-item>High: C</b-list-group-item>
      <b-list-group-item>Low: C</b-list-group-item>
      <b-list-group-item>Pressure: </b-list-group-item>
      <b-list-group-item>Humidity: %</b-list-group-item>
    </b-list-group>

  </div>

</template>

<script>

import store from '@/store';
import { BListGroup, BListGroupItem } from 'bootstrap-vue';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// import HomePage from './pages/Home.vue';

export default {
  name: 'App',
  store,
  // components: { HomePage },
  components: {
    BListGroup,
    BListGroupItem
  },
};
</script>

<style>
@import "./../node_modules/bootstrap/dist/css/bootstrap.css";
@import "./../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
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
