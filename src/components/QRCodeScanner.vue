<template>
  <div id="qrcode-scanner">
    <div class="qrcode">
      <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { QrcodeStream } from "vue-qrcode-reader";
export default defineComponent({
  name: "QRCodeScanner",
  props: {
    camera: String
  },
  components: {
    QrcodeStream
  },
  setup(props, { emit }) {
    const error = ref("");

    function onDecode(resultStr: string) {
      emit("signin", resultStr);
    }

    async function onInit(promise: Promise<void>) {
      try {
        await promise;
      } catch (e) {
        if (e.name === "NotAllowedError") {
          error.value = "ERROR: you need to grant camera access permisson";
        } else if (e.name === "NotFoundError") {
          error.value = "ERROR: no camera on this device";
        } else if (e.name === "NotSupportedError") {
          error.value = "ERROR: secure context required (HTTPS, localhost)";
        } else if (e.name === "NotReadableError") {
          error.value = "ERROR: is the camera already in use?";
        } else if (e.name === "OverconstrainedError") {
          error.value = "ERROR: installed cameras are not suitable";
        } else if (e.name === "StreamApiNotSupportedError") {
          error.value = "ERROR: Stream API is not supported in this browser";
        }
        console.log(error);
      }
    }

    return { error, onDecode, onInit };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
