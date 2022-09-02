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
  >
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
          <img class="px-1" :src="card.imageUrl" alt="product" />
          <p>{{card.title}}</p>
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

::v-deep .slick-prev,
::v-deep .slick-next {
  width: 25px;
  height: 25px;
  transform: translate(0, -50%);
  background: white;
  border-radius: 50%;
  font-weight: normal;
  z-index: 11;
}

::v-deep .slick-prev {
  margin-left: 18px;
}

::v-deep .slick-next {
  margin-right: 18px;
}

::v-deep .slick-prev:before {
  content: '￩';
  /* content: '￫'; */
}

::v-deep .slick-next:before {
  content: '￫';
}

::v-deep .slick-prev:before,
::v-deep .slick-next:before {
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
}

:deep(.img-wraper img) {
  object-fit: cover !important;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
  /* background: linear-gradient(black, white); */
}
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
