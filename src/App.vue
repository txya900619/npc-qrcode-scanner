<template>
  <ScanPage v-if="spreadsheetsID" />
  <Home v-else :semesters="semesters" @verified="verified" @go="go" />
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "@vue/composition-api";
import "./assets/scss/index.scss";
import Home from "./pages/Home.vue";
import ScanPage from "./pages/ScanPage.vue";

export default defineComponent({
  name: "App",
  components: {
    Home,
    ScanPage
  },
  setup() {
    const isVerified = ref(false);
    const authToken = ref("");
    const semesters: Ref<Semester[]> = ref([]);
    const spreadsheetsID = ref("");
    function verified(newAuthToken: string, newSemester: Semester[]) {
      authToken.value = newAuthToken;
      semesters.value = newSemester;
      console.log("cc");
    }
    function go(id: string) {
      spreadsheetsID.value = id;
    }
    return {
      isVerified,
      verified,
      semesters,
      authToken,
      spreadsheetsID,
      go
    };
  }
});

interface Course {
  name: string;
  spreadsheetsID: string;
}

interface Semester {
  name: string;
  activeCourses: Course[];
}
</script>
