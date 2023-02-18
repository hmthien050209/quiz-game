<template>
  <div class="button">
    <slot>Button</slot>
  </div>
</template>
<style scoped>
.button {
  @apply m-4 flex cursor-pointer items-center
    justify-center rounded-lg 
    border-2 border-sky-300 bg-slate-900 p-4 text-white 
    shadow-lg transition-all duration-150 ease-linear;
}
</style>
