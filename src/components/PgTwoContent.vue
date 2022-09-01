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
          {{ getConfigData?.flow?.pages[1].title.text }}
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
          Total Item {{ getConfigData?.flow?.pages[1].description.text }}
        </p>
      </div>
      <div class="row">
        <div
          v-for="card in getPgTwoItems"
          :key="card.title"
          class="col-12 p-1"
          @click="$store.commit('toggleCartPgTwo', card)"
        >
          <div
            class="grid-card-wraper"
            :class="existsIncard(card) ? 'grid-card-wraper-style' : null"
          >
            <div
              class="p-4 grid-card border"
              :class="existsIncard(card) ? 'grid-card-style' : null"
            >
              <div class="pe-5">
                <h4 style="font-family: 'Bebas Neue'; font-size: 22px; font-weight: 500">
                  {{ card.title }}
                </h4>
                <p style="font-size: 14px; margin: 0">{{ card.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="d-flex align-items-center"
      style="padding: 15px; border-top: 1px solid rgba(0, 0, 0, 0.08)"
    >
      <b-button
        :style="{
          'background-color': getConfigData?.flow?.pages[1]?.footer?.restartButton?.backgroundColor,
          color: getConfigData?.flow?.pages[1]?.footer?.restartButton?.color,
          // 'font-family': getConfigData?.flow?.pages[1]?.footer?.restartButton?.fontFamily,
          // 'font-size': getConfigData?.flow?.pages[1]?.footer?.restartButton?.fontSize,
          'font-family': 'Jost',
          'font-size': '14px',
          'font-weight': '600',
          padding: '5px 30px',
          border: `1px solid ${getConfigData?.flow?.pages[1]?.footer?.restartButton?.borderColor}`,
          // border: 'none',
        }"
        @click="showPgOne"
      >
        Restart
      </b-button>

      <b-button
        :style="{
          color: getConfigData?.flow?.pages[1]?.footer?.backButton?.backgroundColor,
          'background-color': getConfigData?.flow?.pages[1]?.footer?.backButton?.color,
          // 'font-family': getConfigData?.flow?.pages[1]?.footer?.backButton?.fontFamily,
          // 'font-size': getConfigData?.flow?.pages[1]?.footer?.backButton?.fontSize,
          'font-family': 'Jost',
          'font-size': '14px',
          'font-weight': '600',
          padding: '5px 30px',
          border: 'none',
          'margin-left': 'auto',
        }"
        @click="showPgOne"
      >
        Back
      </b-button>

      <b-button
        :style="{
          'background-color': getConfigData?.flow?.pages[1]?.footer?.nextButton?.backgroundColor,
          color: getConfigData?.flow?.pages[1]?.footer?.nextButton?.color,
          // 'font-family': getConfigData?.flow?.pages[1]?.footer?.nextButton?.fontFamily,
          // 'font-size': getConfigData?.flow?.pages[1]?.footer?.nextButton?.fontSize,

          'font-family': 'Jost',
          'font-size': '14px',
          'font-weight': '500',
          'margin-left': '10px',
          padding: '5px 30px',
          border: 'none',
        }"
      >
        Submit
      </b-button>
    </div>
  </main>
</template>

<script>
import store from '@/store';
import { BButton } from 'bootstrap-vue';

export default {
  name: 'PgTwoContent',
  store,
  props: ['showPgOne'],
  components: {
    BButton,
  },

  computed: {
    getConfigData() {
      return this.$store.state.configData;
    },

    getPgTwoItems() {
      // return this.$store.state.configData;
      const data = this.$store.getters.getPgTwoItems;
      // console.log(data);
      return data;
    },

    getPgTwoCardItems() {
      // return this.$store.state.configData;
      const data = this.$store.getters.getPgTwoCardItems;
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
      const index = this.getPgTwoCardItems.findIndex((object) => object.id === product.id);
      return index > -1;
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

::v-deep .grid-card-wraper-style {
  border-radius: 10px !important;
  position: relative;
  width: 100%;
  height: 100%;
}

::v-deep .grid-card-wraper-style::before {
  content: '';
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  left: 96%;
  bottom: 83%;
  z-index: 1;
}

::v-deep .grid-card-style {
  border: 2px solid #c7a17a !important;
}

::v-deep .grid-card-style::after {
  content: '';
  background-color: #c7a17a;
  width: 90px;
  height: 50px;
  position: absolute;
  left: 90%;
  bottom: 80%;
  transform: rotate(45deg);
}

::v-deep .grid-card-style::before {
  content: '✓';
  font-size: 10px;
  opacity: 0.6;
  position: absolute;
  left: 97%;
  bottom: 85%;
  z-index: 1;
}
</style>
