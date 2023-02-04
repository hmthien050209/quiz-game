<template>
    <div class="home">
        <audio
            autoplay
            :src="backgroundMusic"
            hidden
        ></audio>
        <div
            tabindex="0"
            class="bg-[#FFF0B5] h-2 w-2"
            @focusin="playAudio()"
        ></div>
        <Presence>
            <Motion
                :initial="{ opacity: 0, x: 150 }"
                :animate="{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.5 }
                }"
                class="h-screen w-screen relative"
            >
                <RouterLink
                    tabindex="1"
                    :to="`/rules`"
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
    width: 100vw;
    height: 100vh;
    background-image: url("../assets/images/background.png");
    background-repeat: no-repeat;
    background-size: cover;
}
.play-button {
    @apply absolute top-[58%] left-[32%] 
    h-auto w-auto m-4 p-7 font-[Bangers]
    bg-gradient-to-b from-yellow-400 via-yellow-500 to-orange-500 
    shadow-md hover:shadow-lg hover:brightness-95 
    rounded-l-full rounded-r-full 
    text-5xl 
    transition-all duration-150 ease-linear;
}
</style>
<script setup lang="ts">
import { Motion, Presence } from "motion/vue";
import { RouterLink } from "vue-router";
import backgroundMusic from "../assets/audio/background-music.mp3"
function playAudio() {
    let audioElem = document.querySelector("audio")
    audioElem?.play();
}
</script>