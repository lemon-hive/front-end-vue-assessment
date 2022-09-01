<template>
  <div>
    <button :style="{
      'background-color': getLauncherStyle?.backgroundColor,
      'color': getLauncherStyle?.color,
      'font-family': getLauncherStyle?.fontFamily,
      'font-size': getLauncherStyle?.fontSize,
      'font-weight': '600',
      'text-transform': 'uppercase',
      'padding': '25px 57px'
    }">
      {{ getConfigData?.launcher?.ctaText }}
    </button>

    <div>
      <b-button @click="isSidebar = !isSidebar">Toggle Sidebar</b-button>

      <b-sidebar
        :visible="isSidebar"
        bg-variant="light"
        width="500px"
        right
        no-header
        class="sidebar"
      >
        <!-- close button -->

        <b-button :style="{
          'background-color':getConfigData?.flow?.pages[0]?.footer?.nextButton?.backgroundColor,
          'color': getConfigData?.flow?.pages[0]?.footer?.nextButton?.color,
          'font-family': getConfigData?.flow?.pages[0]?.footer?.nextButton?.fontFamily,
          'font-size':  getConfigData?.flow?.pages[0]?.footer?.nextButton?.fontSize,
          'border' : 'none',
          'padding': '10px 30px',
          'position':'absolute',
          'top':'50%',
          'right':'93%',
          'transform':'rotate(90deg)',
          'z-index':-1,

        }"
        @click="isSidebar=false"
        >
          Close
        </b-button>

        <!-- header -->
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
            // 'font-family': getCarouselStyle?.fontFamily,
            'font-family': 'Bebas Neue',
            // 'font-weight': '600',
            'text-transform': 'uppercase',
            // 'padding': '25px 57px'
          }">
            {{ getConfigData?.flow?.carousel?.defaultTitle }}
          </h2>
          <p>Total Item {{getConfigData?.flow?.carousel?.defaultContent.length}}</p>
          <!-- carousel part -->
          <div>
            <vue-slick-carousel v-bind="settings">

            <div
              v-for="card in  getConfigData?.flow?.carousel?.defaultContent"
              :key="card.title"
              class="px-1 img-wraper"
            >
              <img
                :src="card.imageUrl"
                alt="product"
                class="img-fluid"
              />
            </div>

            </vue-slick-carousel>
          </div>
        </div>

        <!-- body part -->

        <main>
          <div class="container">
            <div class="row">
              <div
                v-for="card in  getConfigData?.flow?.pages[1].cards"
                :key="card.title"
                class="col-12 p-1">
                <div class="p-3 grid-card">
                  <div>
                    <h3>{{card.title}}</h3>
                    <p>{{card.description}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div
                v-for="card in  getConfigData?.flow?.pages[1].cards"
                :key="card.title"
                class="col-12 p-1">
                <div class="p-3 grid-card">
                  <div>
                    <h3>{{card.title}}</h3>
                    <p>{{card.description}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div variant="danger"
          class="border text-danger border-1 d-flex align-items-center">

            <b-button :style="{
              'background-color':getConfigData?.flow?.pages[1]?.footer
              ?.restartButton?.backgroundColor,
              'color': getConfigData?.flow?.pages[1]?.footer
              ?.restartButton?.color,
              'font-family': getConfigData?.flow?.pages[1]?.footer?.restartButton?.fontFamily,
              'font-size':  getConfigData?.flow?.pages[1]?.footer?.restartButton?.fontSize,
              'border' : 'none'
            }">
              Restart
            </b-button>

            <b-button :style="{
              'color':getConfigData?.flow?.pages[1]?.footer?.backButton?.backgroundColor,
              'background-color': getConfigData?.flow?.pages[1]?.footer?.backButton?.color,
              'font-family': getConfigData?.flow?.pages[1]?.footer?.backButton?.fontFamily,
              'font-size':  getConfigData?.flow?.pages[1]?.footer?.backButton?.fontSize,
              'border' : 'none',
              'padding': '10px 30px',
              'margin-left': 'auto'
            }"
            >
              Back
            </b-button>

            <b-button :style="{
              'background-color':getConfigData?.flow?.pages[1]?.footer?.nextButton?.backgroundColor,
              'color': getConfigData?.flow?.pages[1]?.footer?.nextButton?.color,
              'font-family': getConfigData?.flow?.pages[1]?.footer?.nextButton?.fontFamily,
              'font-size':  getConfigData?.flow?.pages[1]?.footer?.nextButton?.fontSize,
              'border' : 'none',
              'padding': '10px 30px'
            }"
            >
              Submit
            </b-button>

          </div>
        </main>

        <!-- <main>
          <div class="container">
            <div class="row">
              <div
                v-for="card in  getConfigData?.flow?.pages[0].cards"
                :key="card.title"
                class="col-4 p-1">
                <div class="p-3 grid-card d-flex justify-content-center align-items-center">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <img :src="card.icon" alt="">
                    <p>{{card.title}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div variant="danger"
          class="border text-danger border-1 d-flex justify-content-between align-items-center">

            <b-button :style="{
              'background-color':getConfigData?.flow?.pages[0]?.footer?.skipButton?.backgroundColor,
              'color': getConfigData?.flow?.pages[0]?.footer?.skipButton?.color,
              'font-family': getConfigData?.flow?.pages[0]?.footer?.skipButton?.fontFamily,
              'font-size':  getConfigData?.flow?.pages[0]?.footer?.skipButton?.fontSize,
              'border' : 'none'
            }">
              Skip
            </b-button>

            <b-button :style="{
              'background-color':getConfigData?.flow?.pages[0]?.footer?.nextButton?.backgroundColor,
              'color': getConfigData?.flow?.pages[0]?.footer?.nextButton?.color,
              'font-family': getConfigData?.flow?.pages[0]?.footer?.nextButton?.fontFamily,
              'font-size':  getConfigData?.flow?.pages[0]?.footer?.nextButton?.fontSize,
              'border' : 'none',
              'padding': '10px 30px'
            }"
            >
              Next
            </b-button>

          </div>
        </main> -->

      </b-sidebar>
    </div>

  </div>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel';

import {
  BButton, BSidebar,
  // BImg,
  VBToggle,
} from 'bootstrap-vue';

export default {
  name: 'HomePage',
  components: {
    BButton,
    BSidebar,
    // BImg,
    // BCard,
    VueSlickCarousel
  },
  directives: { 'b-toggle': VBToggle },
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

  }
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

.launcher-wrapper {
  height: 100vh;
  display: grid;
  place-items: center;
}

.launcher-wrapper button {
  border: none;
  outline: none;
}

::v-deep .sidebar .b-sidebar-body {
  background-color: white;
  /* border-left:1px solid rgba(0, 0, 0, .5) ; */
}

.img-wraper{
  border-radius: 10px;
  overflow: hidden;
}

 ::v-deep .grid-card {
  border: 1px solid rgba(0, 0, 0, .08) !important;
  border-radius: 10px !important;
}
</style>
