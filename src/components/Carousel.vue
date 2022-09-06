<template>
  <div
    :style="{
      'background-color': getCarouselStyle?.backgroundColor,
      color: getCarouselStyle?.color,
      'font-family': getCarouselStyle?.fontFamily,
      'font-weight': '600',
      'text-transform': 'uppercase',
      padding: '15px',
    }"
    class="carousel-wraper"
  >
    <div class="scroll-top"><p>↑</p></div>
    <!-- <div class="scroll-top"><p>￪</p></div> -->
    <h3
      :style="{
        'background-color': getCarouselStyle?.backgroundColor,
        color: getCarouselStyle?.color,
        'font-family': 'Bebas Neue',
        'text-transform': 'uppercase',
        margin: 0,
      }"
    >
      {{ getConfigData?.flow?.carousel?.defaultTitle }}
    </h3>
    <p style="font-family: Jost; font-size: 10px; font-weight: 500; margin-bottom: 10px">
      Total Item {{ getConfigData?.flow?.carousel?.defaultContent.length }}
    </p>

    <!-- carousel part -->
    <div>
      <vue-slick-carousel v-bind="settings">
        <div
          v-for="card in getConfigData?.flow?.carousel?.defaultContent"
          :key="card.title"
          class="img-wraper"
        >
          <!-- hello -->
          <div
            class="img-inner-wraper"
            :style="{
              'background-image': `linear-gradient(to bottom,rgba(0,0,0, 0),
                rgba(0,0,0, .7)), url(${card.imageUrl})`,
              'background-size': 'cover',
              'background-repeat': 'no-repeat',
              'background-position': 'center',
              // 'margin': '0 20px'
            }"
          >
            <!-- <img :src="card.imageUrl" alt="product" /> -->
            <p>{{ card.title }}</p>
          </div>
        </div>
      </vue-slick-carousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

import store from '@/store';

export default {
  name: 'CarouselCom',
  store,
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      isSidebar: false,
      settings: {
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 500,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        draggable: true,
      },
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
    },
  },
};
</script>

<style scoped>
@import '../../node_modules/vue-slick-carousel/dist/vue-slick-carousel.css';
@import '../../node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css';

.carousel-wraper {
  position: relative;
}

:deep(.scroll-top) {
  position: absolute;
  height: 25px;
  width: 30px;
  /* top: 10%; */
  bottom: -26px;
  right: 10px;
  background-color: rgb(199, 161, 122);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  display: grid;
  place-items: center;
  /* z-index: 111111; */
}

:deep(.sroll-top p) {
  margin: 0;
  font-family: 'Jost';
  font-size: 8px;
  font-weight: 700;
}

:deep(.slick-prev),
:deep(.slick-next) {
  width: 25px;
  height: 25px;
  transform: translate(0, -50%);
  background: white;
  border-radius: 50%;
  font-weight: normal;
  z-index: 11;
}

:deep(.slick-prev){
  margin-left: 18px;
}

:deep(.slick-next) {
  margin-right: 18px;
}

:deep(.slick-prev:before){
  content: '￩';
  /* content: '￫'; */
}

:deep(.slick-next:before){
  content: '￫';
}

:deep(.slick-prev:before),
:deep(.slick-next:before){
  position: absolute;
  top: 53%;
  left: 50%;
  padding-bottom: 5px;
  transform: translate(-50%, -50%);
  color: rgb(199, 161, 122);
}

:deep(.img-wraper) {
  position: relative;
  overflow: hidden;
  padding: 0 5px;
}

:deep(.img-wraper .img-inner-wraper) {
  border-radius: 10px;
  width: 100%;
  height: 150px;
}

/* :deep(.img-wraper img) {
  object-fit: cover !important;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
} */

:deep(.img-wraper p) {
  position: absolute;
  bottom: 0;
  padding: 0 10px;
  font-family: Jost;
  font-size: 12px;
  font-weight: 400;
  text-transform: capitalize;
}
</style>
