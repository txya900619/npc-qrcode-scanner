<template>
  <div id="scan-page">
    <div class="navbar">
      <button @click="previousPage">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
          />
        </svg>
      </button>
    </div>
    <QRCodeScanner @signin="signin" :camera="camera" />
    <SuccessDialog v-if="successDialog" @close="successClose" />
    <FailDialog v-if="failDialog" @close="failClose" @confirm="failConfirm" />
    <CircularProgress v-if="waiting" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import QRCodeScanner from "../components/QRCodeScanner.vue";
import SuccessDialog from "../components/SuccessDialog.vue";
import FailDialog from "../components/FailDialog.vue";
import CircularProgress from "../components/CircularProgress.vue";
import Axios from "axios";

export default defineComponent({
  name: "ScanPage",
  props: ["authToken", "spreadsheetsID"],
  components: {
    QRCodeScanner,
    SuccessDialog,
    FailDialog,
    CircularProgress
  },
  setup(props, { emit }) {
    const failDialog = ref(false);
    const successDialog = ref(false);
    const camera = ref("auto");
    const waiting = ref(false);
    let tmpStudentToken = "";

    function previousPage() {
      emit("previousPage");
    }
    async function signin(studentToken: string, paid?: any) {
      camera.value = "off";
      waiting.value = true;
      try {
        await Axios.post(
          "https://script.google.com/macros/s/AKfycbxWVyyeUqu2HvGtLBqctPtMkptXeqzvaKPD9LLZ6Wvn7-lV6Vzp/exec",
          {
            authToken: props.authToken,
            spreadsheetsID: props.spreadsheetsID.value,
            studentToken: studentToken,
            paid
          },
          {
            headers: {
              "Content-Type": "text/plain"
            }
          }
        );
      } catch (e) {
        waiting.value = false;
        tmpStudentToken = studentToken;
        failDialog.value = true;
        return;
      }

      waiting.value = false;
      successDialog.value = true;
    }

    function successClose() {
      successDialog.value = false;
      camera.value = "auto";
    }
    function failClose() {
      failDialog.value = false;
      camera.value = "auto";
    }
    function failConfirm() {
      failDialog.value = false;
      signin(tmpStudentToken, true);
    }

    return {
      failDialog,
      successDialog,
      signin,
      camera,
      successClose,
      failClose,
      waiting,
      previousPage,
      failConfirm
    };
  }
});
</script>
