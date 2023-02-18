<template>
  <div class="relative flex h-screen w-screen flex-col items-center justify-center">
    <QuizSelectionBox
      v-for="quiz in quizes"
      :id="quiz.id"
      :key-col-idx="keyColIdx"
    />
    <Button
      v-if="answeredQuizNum >= 2"
      @click="
        showAllAnswers()
      "
      class="solve-button"
    >
      Giải mật mã
    </Button>
  </div>
</template>
<style scoped>
.solve-button {
  @apply absolute bottom-[5%] flex h-16 w-auto items-center justify-center 
  place-self-center text-3xl font-medium;
}
</style>
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
