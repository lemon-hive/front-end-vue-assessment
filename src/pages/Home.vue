<template>
  <div class="launcher-wrapper">
    <!-- launcher button -->
    <button
      :style="{
        'background-color': getLauncherStyle?.backgroundColor,
        color: getLauncherStyle?.color,
        'font-family': getLauncherStyle?.fontFamily,
        'font-size': getLauncherStyle?.fontSize,
        'font-weight': '600',
        'text-transform': 'uppercase',
        padding: '25px 57px',
        border: 'none',
        outline: 'none',
      }"
      v-if="!isSidebar"
      @click="isSidebar = !isSidebar"
    >
      {{ getConfigData?.launcher?.ctaText }}
    </button>

    <!-- Sidebar -->
    <Sidebar :isSidebar="isSidebar" :closeSidebar="closeSidebar" />
  </div>
</template>

<script>
// import SidebarVue from '@/components/Sidebar.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'HomePage',

  components: {
    // SidebarVue,
    Sidebar,
  },

  data() {
    return {
      isSidebar: false,
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
  methods: {
    closeSidebar() {
      this.isSidebar = false;
    },
  },
};
</script>

<style scoped>
.launcher-wrapper {
  height: 100vh;
  display: grid;
  place-items: center;
}

/* .launcher-wrapper button {
  border: none;
  outline: none;
} */
</style>
