<template>
    <div class="relative flex flex-col items-center justify-center h-screen w-screen">
        <QuizSelectionBox
            v-for="quiz in quizes"
            :id="quiz.id"
            :key-col-idx="keyColIdx"
        />
        <Button
            v-if="answeredQuizNum >= 2"
            @click="store.setSolvedAll(); playConfetti()"
            class="absolute bottom-[5%] place-self-center h-16 w-auto m-2 p-2 flex items-center justify-center text-3xl font-medium rounded-xl"
        >
            Giải mật mã
        </Button>
    </div>
</template>

<script setup lang="ts">
import { quizes } from '../quizes';
import QuizSelectionBox from '../components/QuizSelectionBox.vue';
import { useQuizStore } from '../stores/useQuizStore';
import { watch, ref } from 'vue';
import Button from '../components/Button.vue';
import { playConfetti } from '../playConfetti';
const keyColIdx: number = 6;
let store = useQuizStore();
let answeredQuizNum = ref(store.quizSolvedState.filter((val) => val === true).length);
watch(answeredQuizNum, (newNum) => {
    if (newNum === 5) {
        playConfetti();
    }
});
</script>