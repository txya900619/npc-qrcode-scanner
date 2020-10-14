<template>
  <div id="fail-dialog">
    <div class="title"></div>
    <div class="content">
      <p class="content-text">此學員非社員</p>
      <div>
        <input class="content-checkbox" type="checkbox" v-model="checked" />
        <label class="content-checkbox-label">已繳錢或加入社團</label>
      </div>
      <div class="content-button-warp">
        <button
          class="content-button"
          :disabled="!checked"
          @click="confirmClick"
        >
          確認
        </button>
        <button class="content-button orange" @click="cancelClick">取消</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "FailDialog",
  setup(_props, { emit }) {
    const checked = ref(false);
    function confirmClick() {
      emit("close");
    }
    function cancelClick() {
      emit("close");
    }
    return { checked, confirmClick, cancelClick };
  }
});
</script>
