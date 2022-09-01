<template>

    <main>
        <div class="container">
        <div class="row">
            <div
            v-for="card in  getConfigData?.flow?.pages[0].cards"
            :key="card.title"
            class="col-4 p-1">
            <div class="grid-card-wraper">

            <div class="p-3 grid-card d-flex justify-content-center align-items-center">
              <!-- <div class="grid-card-content"> -->

                <div class="d-flex flex-column justify-content-center align-items-center">
                <img :src="card.icon" alt="">
                <p>{{card.title}}</p>
                </div>
              <!-- </div> -->
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
  position: relative;
  overflow: hidden;
}

 ::v-deep .grid-card-wraper{
  border-radius: 10px !important;
  position: relative;
  width: 100%;
  height: 100%;
}

 ::v-deep .grid-card-wraper:hover::before{
  content: "";
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  left: 87%;
  bottom: 82%;
  z-index: 1;
}

 ::v-deep .grid-card:hover {
  border: 2px solid #C7A17A !important;
}

 ::v-deep .grid-card:hover::after {
  content: "";
  background-color: #C7A17A;
  width: 90px;
  height: 50px;
  position: absolute;
  left: 65%;
  bottom: 80%;
  transform: rotate(45deg);
}

 ::v-deep .grid-card:hover::before{
  content: "✓";
  font-size: 10px;
  opacity: .6;
  position: absolute;
  left: 90%;
  bottom: 85%;
  z-index: 1;
}

</style>
