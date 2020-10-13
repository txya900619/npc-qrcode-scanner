<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import HelloWorld from "./components/HelloWorld.vue";
import "./assets/scss/index.scss";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld
  }
});
</script>
