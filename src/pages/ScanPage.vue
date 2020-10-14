<template>
  <div id="scan-page">
    <QRCodeScanner />
    <SuccessDialog v-if="successDialog" @close="successDialog.value = false" />
    <FailDialog v-if="failDialog" @close="failDialog.value = false" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import QRCodeScanner from "../components/QRCodeScanner.vue";
import SuccessDialog from "../components/SuccessDialog.vue";
import FailDialog from "../components/FailDialog.vue";

export default defineComponent({
  name: "ScanPage",
  components: {
    QRCodeScanner,
    SuccessDialog,
    FailDialog
  },
  setup() {
    const failDialog = ref(false);
    const successDialog = ref(false);
    return { failDialog, successDialog };
  }
});
</script>
