<template>

    <main>
        <div class="container">
            <div class="row">
                <div
                v-for="card in  getConfigData?.flow?.pages[1].cards"
                :key="card.title"
                class="col-12 p-1">

            <div class="grid-card-wraper">
                <div class="p-3 grid-card border">
                    <div>
                        <h3>{{card.title}}</h3>
                        <p>{{card.description}}</p>
                    </div>
                </div>
                </div>
              </div>
            </div>
        </div>

        <div
            variant="danger"
            class="border text-danger border-1 d-flex align-items-center"
        >

        <b-button :style="{
            'background-color':getConfigData?.flow?.pages[1]?.footer
            ?.restartButton?.backgroundColor,
            'color': getConfigData?.flow?.pages[1]?.footer
            ?.restartButton?.color,
            'font-family': getConfigData?.flow?.pages[1]?.footer?.restartButton?.fontFamily,
            'font-size':  getConfigData?.flow?.pages[1]?.footer?.restartButton?.fontSize,
            'border' : 'none'
        }"

          @click="showPgOne"
        >
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
          @click="showPgOne"
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

</template>

<script>

import store from '@/store';
import {
  BButton,
} from 'bootstrap-vue';

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
  left: 96%;
  bottom: 83%;
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
  left: 90%;
  bottom: 80%;
  transform: rotate(45deg);
}

 ::v-deep .grid-card:hover::before{
  content: "✓";
  font-size: 10px;
  opacity: .6;
  position: absolute;
  left: 97%;
  bottom: 85%;
  z-index: 1;
}

</style>
