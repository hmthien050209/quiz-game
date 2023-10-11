<template>
  <div
    class="relative flex h-screen w-screen flex-col items-center justify-center"
  >
    <span
      class="m-2 p-2 font-[Oswald] text-5xl text-titleForegroundColor transition-all duration-300 ease-linear"
      >{{
        store.solvedAll || answeredQuizNum === 5
          ? 'Chúc mừng, mật mã là "Hội An"'
          : "Mời bạn chọn câu hỏi"
      }}</span
    >
    <QuizSelectionBox
      v-for="quiz in quizes"
      :id="quiz.id"
      :key-col-idx="keyColIdx"
    />
    <div class="m-2 flex h-auto w-80 flex-col items-center justify-center">
      <Button
        v-if="answeredQuizNum >= 2"
        @click="showAllAnswers()"
        class="h-full w-full text-3xl"
      >
        Giải mật mã
      </Button>
      <Button class="h-full w-full text-3xl">
        <RouterLink
          to="/random_wheel"
          class="h-full w-full"
        >
          Quay số
        </RouterLink>
      </Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { quizes } from "../quizes";
import QuizSelectionBox from "../components/QuizSelectionBox.vue";
import { useQuizStore } from "../stores/useQuizStore";
import { ref, onMounted } from "vue";
import Button from "../components/Button.vue";
import { playConfetti } from "../playConfetti";
const keyColIdx: number = 6;
let store = useQuizStore();
let answeredQuizNum = ref(
  store.quizSolvedState.filter((val) => val === true).length
);

function showAllAnswers() {
  store.setSolvedAll();
  playConfetti();
}
onMounted(() => {
  if (answeredQuizNum.value === 5) playConfetti();
});
</script>
