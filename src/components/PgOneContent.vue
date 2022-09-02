<template>
  <main>
    <div class="container" style="padding: 15px">
      <div class="my-4">
        <h2
          :style="{
            // 'background-color': getConfigData?.flow?.pages[0]?.backgroundColor,
            // color: getCarouselStyle?.color,
            'font-family': 'Bebas Neue',
            'text-transform': 'uppercase',
            margin: 0,
          }"
        >
          {{ getConfigData?.flow?.pages[0].title.text }}
        </h2>
        <p
          style="
            font-family: Jost;
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 10px;
            color: #c7a17a;
          "
        >
          Total Item {{ getConfigData?.flow?.pages[0].description.text }}
        </p>
      </div>

      <div class="row">
        <div
          v-for="card in getPgOneItems"
          :key="card.title"
          class="col-4 p-1"
          @click="$store.commit('toggleCartPgOne', card)"
        >
          <div :class="existsIncard(card) ? 'grid-card-wraper' : null">
            <div :class="existsIncard(card) ? 'card-hover' : 'd-none'">
              <p>✓</p>
            </div>
            <div class="p-3 grid-card d-flex justify-content-center align-items-center">
              <div class="d-flex flex-column justify-content-center align-items-center">
                <img :src="card.icon" alt="" />
                <p
                  style="font-size: 14px; font-weight: 500; text-align: center; white-space: nowrap"
                >
                  {{ card.title }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      style="padding: 15px; border-top: 1px solid rgba(0, 0, 0, 0.08)"
      class="d-flex justify-content-between align-items-center"
    >
      <b-button
        :style="{
          'background-color': getConfigData?.flow?.pages[0]?.footer?.skipButton?.backgroundColor,
          color: getConfigData?.flow?.pages[0]?.footer?.skipButton?.color,
          // 'font-family': getConfigData?.flow?.pages[0]?.footer?.skipButton?.fontFamily,
          // 'font-size': getConfigData?.flow?.pages[0]?.footer?.skipButton?.fontSize,
          'font-family': 'Jost',
          'font-size': '14px',
          'font-weight': '600',
          border: 'none',
        }"
        @click="hidePgOne"
      >
        Skip
      </b-button>

      <b-button
        :style="{
          'background-color': getConfigData?.flow?.pages[0]?.footer?.nextButton?.backgroundColor,
          color: getConfigData?.flow?.pages[0]?.footer?.nextButton?.color,
          // 'font-family': getConfigData?.flow?.pages[0]?.footer?.nextButton?.fontFamily,
          // 'font-size': getConfigData?.flow?.pages[0]?.footer?.nextButton?.fontSize,
          'font-family': 'Jost',
          'font-size': '14px',
          'font-weight': '500',
          border: 'none',
          padding: '5px 30px',
        }"
        @click="handleNext"
      >
        Next
      </b-button>
    </div>
  </main>
</template>

<script>
import { BButton } from 'bootstrap-vue';

import store from '@/store';

export default {
  name: 'PgOneContent',
  store,
  props: ['hidePgOne'],
  components: {
    BButton,
  },
  computed: {
    getConfigData() {
      return this.$store.state.configData;
    },

    getPgOneItems() {
      // return this.$store.state.configData;
      const data = this.$store.getters.getPgOneItems;
      // console.log(data);
      return data;
    },

    getPgOneCardItems() {
      // return this.$store.state.configData;
      const data = this.$store.getters.getPgOneCardItems;
      // console.log(data);
      return data;
    },

    getLauncherStyle() {
      return this.$store?.state?.configData?.launcher;
    },

    getCarouselStyle() {
      return this.$store?.state?.configData?.flow?.carousel;
    },
  },
  methods: {
    existsIncard(product) {
      const index = this.getPgOneCardItems.findIndex((object) => object.id === product.id);
      return index > -1;
    },

    handleNext() {
      if (this.getPgOneCardItems.length) {
        this.hidePgOne();
      } else {
        // eslint-disable-next-line no-alert
        window.alert('please select some items');
      }
    },
  },
};
</script>

<style scoped>
::v-deep .grid-card {
  border: 1px solid rgba(0, 0, 0, 0.08) !important;
  border-radius: 10px !important;
  position: relative;
  overflow: hidden;
}

::v-deep .grid-card-wraper {
  position: relative;
  border-radius: 10px !important;
  overflow: hidden;
  border: 2px solid #c7a17a !important;
}

:deep(.grid-card-wraper .card-hover) {
  position: absolute;
  background-color: #c7a17a;
  width: 90px;
  position: absolute;
  right: -35px;
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 111;
  padding: 5px 0;
}

:deep(.grid-card-wraper .card-hover p) {
  margin: 0;
  transform: translateY(3px);
  transform: translateX(-2px);
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 50%;
  text-align: center;
  font-size: 10px;
}

/* ::v-deep .grid-card-wraper-style {
  border-radius: 10px !important;
  position: relative;
  width: 100%;
  height: 100%;
} */

/* ::v-deep .grid-card-wraper-style::before {
  content: '';
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  left: 87%;
  bottom: 82%;
  z-index: 1;
} */

/* ::v-deep .grid-card-style {
  border: 2px solid #c7a17a !important;
}

::v-deep .grid-card-style::after {
  content: '';
  background-color: #c7a17a;
  width: 90px;
  height: 50px;
  position: absolute;
  left: 65%;
  bottom: 80%;
  transform: rotate(45deg);
}

::v-deep .grid-card-style::before {
  content: '✓';
  font-size: 10px;
  opacity: 0.6;
  position: absolute;
  left: 90%;
  bottom: 85%;
  z-index: 1;
} */
</style>
