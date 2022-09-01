<template>

    <div :style="{
        'background-color': getCarouselStyle?.backgroundColor,
        'color': getCarouselStyle?.color,
        'font-family': getCarouselStyle?.fontFamily,
        'font-weight': '600',
        'text-transform': 'uppercase',
        'padding': '15px'
    }">
        <h2 :style="{
            'background-color': getCarouselStyle?.backgroundColor,
            'color': getCarouselStyle?.color,
            'font-family': 'Bebas Neue',
            'text-transform': 'uppercase',
        }">
            {{ getConfigData?.flow?.carousel?.defaultTitle }}
        </h2>
        <p>Total Item {{ getConfigData?.flow?.carousel?.defaultContent.length }}</p>

        <!-- carousel part -->
        <div>
            <vue-slick-carousel v-bind="settings">

                <div
                    v-for="card in  getConfigData?.flow?.carousel?.defaultContent"
                    :key="card.title"
                    class="px-1 img-wraper">
                    <img :src="card.imageUrl" alt="product" class="img-fluid" />
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
    VueSlickCarousel
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
  },
};
</script>

<style scoped>
@import "../../node_modules/vue-slick-carousel/dist/vue-slick-carousel.css";
@import "../../node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css";

::v-deep .slick-prev, ::v-deep .slick-next {
    width: 20px;
    height: 20px;
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

::v-deep .slick-prev:before, ::v-deep .slick-next:before {
    position: absolute;
    top: 50%;
    left: 50%;
    padding-bottom: 5px;
    transform: translate(-50%, -50%);
    color: rgb(199, 161, 122);
}

.img-wraper{
  border-radius: 10px;
  overflow: hidden;
}

</style>
