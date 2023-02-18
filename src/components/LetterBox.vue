<template>
  <div
    v-if="blank"
    class="lb-blank"
  ></div>
  <div
    v-else-if="!blank && showLb"
    :class="isKeyLb ? `lb-key` : `lb-normal`"
  >
    <slot> A </slot>
  </div>
  <div
    v-else-if="!blank && hidden"
    class="lb-hidden"
  ></div>
</template>

<style scoped lang="scss">
%lb-shared {
  @apply mx-1 h-16 w-16;
}
.lb-blank {
  @extend %lb-shared;
  @apply opacity-0;
}
.lb-hidden {
  @extend %lb-shared;
  @apply rounded-xl bg-slate-600;
}
.lb-normal {
  @extend %lb-shared;
  @apply flex items-center justify-center rounded-xl bg-slate-600 text-4xl text-white;
}
.lb-key {
  @extend .lb-normal;
  @apply bg-green-600;
}
</style>

<script setup lang="ts">
defineProps({
  blank: Boolean,
  hidden: Boolean,
  showLb: Boolean,
  isKeyLb: Boolean,
});
</script>
