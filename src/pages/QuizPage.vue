<script setup lang="ts">
import AnswerSelectionBox from "../components/AnswerSelectionBox.vue";
import Button from "../components/Button.vue"
import { playConfetti } from "../playConfetti";
import { quizes } from "../quizes";
import { useQuizStore } from "../stores/useQuizStore";

const props = defineProps({
  id: { type: Number, required: true },
});

const currentQuiz = quizes.find(quiz => quiz.id == props.id)!;
const store = useQuizStore();

function onSolved() {
  store.setSolved(props.id);
  playConfetti();
}
</script>

<template>
  <div class="quiz-page">
    <div class="leading-tight text-6xl font-[Oswald] my-4 py-4 flex items-center justify-center text-center">
      {{ currentQuiz.question }}
    </div>
    <AnswerSelectionBox
      v-for="answer in currentQuiz.answers"
      :id="currentQuiz.id"
      :is-correct-answer="answer.correct || false"
      :show-answer="store.quizSolvedState[id - 1] || store.solvedAll"
      @solved="onSolved"
    >{{ answer.answer }}</AnswerSelectionBox>
    <RouterLink :to="`/quiz_list`">
      <Button class="absolute top-0 left-0 h-16 w-16">
        <FontAwesomeIcon
          icon="fa-solid fa-arrow-left"
          size="lg"
        />
      </Button>
    </RouterLink>
    <Button
      @click="store.setSolved(id)"
      class="m-2 p-2 text-3xl font-medium"
    >
      Hiện đáp án đúng
    </Button>
  </div>
</template>

<style scoped >
.quiz-page {
  @apply relative h-screen w-screen flex flex-col items-center justify-center p-8;
}
</style>
