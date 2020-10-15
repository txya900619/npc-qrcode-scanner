<template>
  <div id="skip-dialog">
    <div class="title"></div>
    <div class="content">
      <p class="content-text">此學員已簽到過！</p>
      <button class="content-button" @click="confirmClick">確認</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "SkipDialog",
  setup(_props, { emit }) {
    function confirmClick() {
      emit("close");
    }
    return { confirmClick };
  }
});
</script>
