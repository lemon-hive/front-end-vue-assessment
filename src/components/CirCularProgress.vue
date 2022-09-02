<template>
  <div class="skill" :style="cssProps">
    <div class="outer">
      <div class="inner">
        <div id="number" ref="numb">{{ getPgCardItems }}/{{ getPgItems }}</div>
      </div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
      <!-- <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="10px" height="10px"> -->
      <defs>
        <linearGradient id="GradientColor">
          <!-- <stop offset="0%" stop-color="#DA22FF" />
          <stop offset="100%" stop-color="#9733EE" /> -->

          <stop offset="0%" stop-color="#C7A17A" />
          <stop offset="100%" stop-color="#C7A17A" />
        </linearGradient>
      </defs>
      <!-- <circle cx="80" cy="80" r="70" stroke-linecap="round" /> -->
      <circle cx="30" cy="30" r="27" stroke-linecap="round" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SidebarCom',
  props: ['cartPercentige', 'getPgCardItems', 'getPgItems'],
  components: {},
  mounted() {
    // const numb = document.querySelector('.numb');
    // const { numb } = this.$refs;
    // console.log(this.cartPercentige);
    // let counter = 0;
    // setInterval(() => {
    //   if (counter === this.cartPercentige) {
    //     clearInterval();
    //   } else {
    //     counter += 1;
    //     numb.textContent = `${counter}%`;
    //   }
    // }, 2000 / 66);
  },

  computed: {
    cssProps() {
      return {
        '--animation-per': `${Math.floor((this.cartPercentige / 100) * 165)}`,
      };
    },
  },
};
</script>

<style scoped>
.skill {
  /* width: 160px;
  height: 160px; */

  width: 60px;
  height: 60px;
  /* background-color: cornflowerblue; */
  position: relative;
}

.outer {
  /* height: 160px;
  width: 160px; */

  height: 60px;
  width: 60px;

  border-radius: 50%;
  /* border: 2px solid orangered; */
  padding: 5px;

  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15), -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
  box-shadow: 3px 3px 5px -1px rgba(0, 0, 0, 0.15), -3px -3px 1px -1px rgba(255, 255, 255, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;
}

.inner {
  /* height: 120px;
  width: 120px; */

  height: 50px;
  width: 50px;

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  /*  border: 2px solid orangered*/
  box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7), -0.5px -0.5px 0px rgba(255, 255, 255, 1),
    0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0, 0, 0, 0.05);
}

#number {
  font-family: 'Jost';
  font-weight: 600;
  font-size: 10px;
  color: #555;
}

circle {
  fill: none;
  stroke: url(#GradientColor);
  stroke-width: 5px;
  stroke-dasharray: 450;
  stroke-dashoffset: 450;
  /* stroke-dashoffset: 50; */
  animation: anim 2s linear forwards;
}

@keyframes anim {
  100% {
    /* stroke-dashoffset: var(--animation-per); */
    /* stroke-dashoffset: calc (450 - var(--animation-per)); */
    /* stroke-dashoffset: 295px; */
    stroke-dashoffset: calc(450 - var(--animation-per));
  }
}

/*Put it on the top of our circle*/
svg {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
