<template>
  <div id="success-dialog">
    <div class="title"></div>
    <div class="content">
      <p class="content-text">簽到成功</p>
      <button class="content-button" @click="comfirmClick">確認</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "SuccessDialog",
  setup(_props, { emit }) {
    function confirmClick() {
      emit("close");
    }
    return { confirmClick };
  }
});
</script>
