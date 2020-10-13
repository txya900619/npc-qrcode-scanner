<template>
  <div class="hello">
    <p class="error">{{ error }}</p>

    <p class="decode-result">
      Last result: <b>{{ result }}</b>
    </p>

    <qrcode-stream @decode="onDecode" @init="onInit" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { QrcodeStream } from "vue-qrcode-reader";
export default defineComponent({
  name: "HelloWorld",
  components: {
    QrcodeStream
  },
  setup() {
    const result = ref("");
    const error = ref("");

    function onDecode(resultStr: string) {
      result.value = resultStr;
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
      }
    }

    return { result, error, onDecode, onInit };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
