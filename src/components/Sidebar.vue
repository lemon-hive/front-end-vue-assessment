<template>
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
        // 'color': getConfigData?.flow?.pages[0]?.footer?.nextButton?.color,
        // 'font-family': getConfigData?.flow?.pages[0]?.footer?.nextButton?.fontFamily,
        'color':'white',
        'font-size':  getConfigData?.flow?.pages[0]?.footer?.nextButton?.fontSize,
        'border' : 'none',
        'padding': '10px 35px',
        'padding-bottom': '20px',
        'position':'absolute',
        'top':'50%',
        'right':'93%',
        'transform':'rotate(-90deg)',
        'z-index':-1,

    }"
    @click="closeSidebar"
    >
        Close
    </b-button>

    <!-- carousel -->
    <Carousel/>
    <!-- Pg one -->
    <PgOneContent v-if="pgOne" :showPgOne="showPgOne" :hidePgOne="hidePgOne" />
    <!-- Pg two -->
    <PgTwoContent v-if="!pgOne" :showPgOne="showPgOne" :hidePgOne="hidePgOne"/>

    </b-sidebar>
</template>

<script>

import {
  BButton,
  BSidebar,
} from 'bootstrap-vue';

import store from '@/store';
import Carousel from './Carousel.vue';
import PgOneContent from './PgOneContent.vue';
import PgTwoContent from './PgTwoContent.vue';

export default {
  name: 'SidebarCom',
  store,
  props: ['isSidebar', 'closeSidebar'],
  components: {
    BButton,
    BSidebar,
    Carousel,
    PgOneContent,
    PgTwoContent
  },

  data() {
    return {
      pgOne: true
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

  methods: {
    showPgOne() {
      this.pgOne = true;
    },

    hidePgOne() {
      this.pgOne = false;
    }
  }
};
</script>

<style scoped>

:deep(.b-sidebar-body){
  background-color: white;
}

</style>
