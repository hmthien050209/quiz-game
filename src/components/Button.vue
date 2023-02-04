<template>
    <div class="button">
        <slot>Button</slot>
    </div>
</template>
<style scoped>
.button {
    @apply bg-slate-900 text-white border-2 border-sky-300
    hover:bg-slate-700 hover:shadow-xl 
    flex items-center justify-center rounded-lg shadow-lg 
    m-4 p-4 transition-all ease-linear duration-150
    cursor-pointer;
}
</style>