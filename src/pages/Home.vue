<template>
  <div class="home">
    <audio
      autoplay
      :src="backgroundMusic"
      hidden
    ></audio>
    <div
      tabindex="0"
      class="h-2 w-2 bg-transparent"
      @focusin="playAudio()"
    ></div>
    <Presence>
      <Motion
        :initial="{ opacity: 0, x: 150 }"
        :animate="{
          opacity: 1,
          x: 0,
          transition: { delay: 0.5 },
        }"
        class="relative h-screen w-screen"
      >
        <RouterLink
          tabindex="1"
          to="/rules"
          class="play-button"
        >
          Bắt đầu chơi!
        </RouterLink>
      </Motion>
    </Presence>
  </div>
</template>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  background-image: url("../assets/images/greeting-background.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.play-button {
  @apply absolute top-[58%] left-[32%] 
    m-4 h-auto w-auto rounded-l-full rounded-r-full
    bg-gradient-to-b from-yellow-500 via-orange-500 to-orange-600
    p-7 font-[Bangers] text-5xl text-white
    shadow-md transition-all 
    duration-150 
    ease-linear;
}
</style>
<script setup lang="ts">
import { Motion, Presence } from "motion/vue";
import { RouterLink } from "vue-router";
import backgroundMusic from "../assets/audio/background-music.mp3";
function playAudio() {
  let audioElem = document.querySelector("audio");
  audioElem?.play();
}
</script>
