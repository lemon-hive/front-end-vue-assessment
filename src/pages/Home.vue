<template>
  <div class="launcher-wrapper">
    <button
        :style="{
            'background-color': getLauncherStyle?.backgroundColor,
            'color' : getLauncherStyle?.color,
            'font-family' : getLauncherStyle?.fontFamily,
            'font-size' : getLauncherStyle?.fontSize,
            'font-weight' : '600',
            'text-transform' : 'uppercase',
            'padding' : '25px 57px'
            }"
      >
        {{getConfigData?.launcher?.ctaText}}
    </button>

    <VueSlickCarousel v-bind="settings">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>

    <b-list-group >
      <b-list-group-item>Current Temparature: C</b-list-group-item>
      <b-list-group-item>High: C</b-list-group-item>
      <b-list-group-item>Low: C</b-list-group-item>
      <b-list-group-item>Pressure: </b-list-group-item>
      <b-list-group-item>Humidity: %</b-list-group-item>
    </b-list-group>

    <!-- hero section of  right sidebar-->
    <div class="right-sidebarr">
        <div
          class="carousel-wrapper"
          :style="{
              'background-color': getCarouselStyle?.backgroundColor,
              'color' : getCarouselStyle?.color,
              'font-family' : getCarouselStyle?.fontFamily,
              'font-size' : getLauncherStyle?.fontSize,
              'font-weight' : '600',
              'text-transform' : 'uppercase',
              }"
        >
            <h1>{{getConfigData?.flow?.carousel.defaultTitle}}</h1>

            <!-- carousel -->
            <!-- <div class="carousel">
              <VueSlickCarousel v-bind="settings">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
              </VueSlickCarousel>
            </div> -->
        </div>
    </div>

  </div>
</template>

<script>
// import store from '@/store';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

import { BListGroup, BListGroupItem } from 'bootstrap-vue';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'HomePage',
  components: {
    VueSlickCarousel,
    BListGroup,
    BListGroupItem
  },
  //   store,
  data() {
    return {
      settings: {
        // dots: true,
        // dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: true,
        // speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        draggable: true,
      }
    };
  },
  computed: {
    getConfigData() {
      return this.$store.state.configData;
    },

    getLauncherStyle() {
      return this.$store?.state?.configData?.launcher;
    },

    getCarouselStyle() {
      return this.$store?.state?.configData?.flow?.carousel;
    }

  }
};
</script>

<style scoped>

.launcher-wrapper{
    height: 100vh;
    display: grid;
    place-items: center;
}
.launcher-wrapper button{
    border: none;
    outline: none;
}

.right-sidebar{

    /* position: relative; */
    /* right: 0; */
    background-color: red;
    width: 500px;
    height: 100vh;

}

/* .right-sidebar .carousel-wrapper{
    height:  50%;
} */

.right-sidebar .carousel-wrapper .carousel{
    /* height:  50%; */
    background-color: blue;
    /* width:100%; */
}

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
