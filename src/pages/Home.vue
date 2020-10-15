<template>
  <div id="home">
    <div class="card">
      <div class="title"></div>
      <div class="content" v-if="semesters.length !== 0">
        <div class="select-warp">
          <label>選擇學期：</label>
          <select v-model="selectedSemesterCourses">
            <option
              v-for="semester in semesters"
              :key="semester.name"
              :value="semester.activeCourses"
              >{{ semester.name }}</option
            >
          </select>
        </div>
        <div class="select-warp">
          <label>選擇課程：</label>
          <select
            v-model="selcetedCourseSpreadsheetsID"
            :disabled="selectedSemesterCourses.length === 0"
          >
            <option
              v-for="course in selectedSemesterCourses"
              :key="course.spreadsheetsID"
              :value="course.spreadsheetsID"
              >{{ course.name }}</option
            >
          </select>
        </div>

        <button :disabled="!checkInput" @click="goClick">Go!</button>
      </div>
      <div v-else class="content">
        <div>
          <label>通關密語：</label>
          <input v-model="password" type="password" @keyup.enter="verify" />
        </div>
        <button @click="verify" :disabled="verifying">驗證</button>
      </div>
    </div>
    <circular-progress v-if="verifying" />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, Ref, ref } from "@vue/composition-api";
import Axios, { AxiosResponse } from "axios";
import CircularProgress from "../components/CircularProgress.vue";

export default defineComponent({
  name: "Home",
  props: ["semesters"],
  components: { CircularProgress },
  setup(props, { emit }) {
    const selectedSemesterCourses: Ref<Course[]> = ref([]);
    const selcetedCourseSpreadsheetsID = ref("");
    const password = ref("");
    const checkInput = computed(
      () => selcetedCourseSpreadsheetsID.value !== "" && password.value !== ""
    );
    const authToken = ref("");
    const verifying = ref(false);

    async function verify() {
      let data: AxiosResponse<{ authToken: string; semesters: Semester[] }>;
      verifying.value = true;
      try {
        data = await Axios.post(
          "https://script.google.com/macros/s/AKfycbyOE7EtpmoWSqteMaoZ0HhjcyjZwlRjD1SCsnw5ESmGXiI53lg/exec",
          { password: password.value },
          {
            headers: {
              "Content-Type": "text/plain"
            }
          }
        );
      } catch (e) {
        verifying.value = false;
        alert("通關密語錯誤");
        return;
      }
      verifying.value = false;
      emit("verified", data.data.authToken, data.data.semesters);
    }

    function goClick() {
      emit("go", selcetedCourseSpreadsheetsID);
    }

    return {
      goClick,
      selectedSemesterCourses,
      selcetedCourseSpreadsheetsID,
      password,
      checkInput,
      verify,
      authToken,
      verifying
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
