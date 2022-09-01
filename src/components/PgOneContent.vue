<template>

    <main>
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
        }"
          @click="hidePgOne"
        >
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

          @click="hidePgOne"
        >
            Next
        </b-button>

        </div>
    </main>

</template>

<script>

import {
  BButton,
} from 'bootstrap-vue';

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

 ::v-deep .grid-card {
  border: 1px solid rgba(0, 0, 0, .08) !important;
  border-radius: 10px !important;
}

</style>
