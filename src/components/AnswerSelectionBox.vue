<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits(["solved"]);
const props = defineProps({
  id: { type: Number, required: true },
  showAnswer: Boolean,
  isCorrectAnswer: Boolean,
});
let selected = ref(false);

function checkAnswer() {
  selected.value = true;
  if (props.isCorrectAnswer) emit("solved");
}
</script>

<template>
  <div
    v-if="isCorrectAnswer"
    @click="checkAnswer()"
    :class="selected || showAnswer ? `selection-box-correct` : `selection-box-normal`"
  >
    <slot>Right answer here!</slot>
    <font-awesome-icon
      icon="fa-solid fa-check-square"
      :class="[selected || showAnswer ? `scale-100` : `scale-0`, `selection-icon`]"
    ></font-awesome-icon>
  </div>
  <div
    v-else
    @click="checkAnswer()"
    :class="
      selected || showAnswer ? `selection-box-wrong` : `selection-box-normal`
    "
  >
    <slot> Answers here! </slot>
    <font-awesome-icon
      icon="fa-solid fa-xmark-square"
      :class="[selected || showAnswer ? `scale-100` : `scale-0`, `selection-icon`]"
    ></font-awesome-icon>
  </div>
</template>

<style scoped lang="scss">
%selection-box-shared {
  @apply h-32 w-4/5 m-2 
  rounded-lg shadow-lg 
  transition-all duration-100 ease-linear 
  text-4xl flex items-center pl-8
  cursor-pointer;
}
.selection-box-normal {
  @extend %selection-box-shared;
  @apply bg-slate-600 hover:scale-105 hover:shadow-xl;
}
.selection-box-correct {
  @extend %selection-box-shared;
  @apply bg-green-500 border-green-700 border-2 scale-105;
}
.selection-box-wrong {
  @extend %selection-box-shared;
  @apply bg-red-500 border-red-700 border-2 scale-95;
}
.selection-icon {
  @apply ml-auto m-8;
}
</style>
