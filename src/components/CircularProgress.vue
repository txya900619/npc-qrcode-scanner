<template>
  <div class="circular-progress-warp">
    <div class="gray-div"></div>
    <div class="circular-progress">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="22.857142857142858 22.857142857142858 45.714285714285715 45.714285714285715"
        style="transform: rotate(0deg);"
      >
        <circle
          fill="transparent"
          cx="45.714285714285715"
          cy="45.714285714285715"
          r="20"
          stroke-width="5.714285714285714"
          stroke-dasharray="125.664"
          stroke-dashoffset="125.66370614359172px"
          class="v-progress-circular__overlay"
        ></circle>
      </svg>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "CircularProgress"
});
</script>
