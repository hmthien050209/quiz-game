<script lang="ts">
import { quizes } from "./quizes";
import { Motion, Presence } from "motion/vue";
export default {
  components: { Motion, Presence },
  setup() {
    return {
      quizes,
    };
  },
};
</script>
<template>
  <div
    class="h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 text-white"
  >
    <RouterView v-slot="{ Component, route }">
      <Presence>
        <Motion
          :key="route.path"
          :initial="{ opacity: 0, x: 100 }"
          :animate="{
            opacity: 1,
            x: 0,
            transition: { delay: 0.3 },
          }"
          :exit="{ opacity: 0, x: -100 }"
          :exitBeforeEnter="true"
        >
          <component :is="Component"></component>
        </Motion>
      </Presence>
    </RouterView>
  </div>
</template>
