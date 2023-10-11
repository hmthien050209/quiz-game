import { defineStore } from "pinia";
import { ref } from "vue";

export const useQuizStore = defineStore("quizStates", () => {
  const quizLockState = ref([true, true, true, true, true]);
  const quizSolvedState = ref([false, false, false, false, false]);
  const solvedAll = ref(false);
  function unlock(quizId: number) {
    quizLockState.value[quizId - 1] = false;
  }
  function setSolved(quizId: number) {
    quizSolvedState.value[quizId - 1] = true;
  }
  function setSolvedAll() {
    solvedAll.value = true;
    quizLockState.value.fill(false, 0, quizLockState.value.length);
  }
  return {
    quizSolvedState,
    quizLockState,
    setSolved,
    unlock,
    solvedAll,
    setSolvedAll,
  };
});
