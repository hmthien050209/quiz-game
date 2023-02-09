<script setup lang="ts">
import { animate, stagger } from 'motion';
import { RouterLink } from 'vue-router';
import Button from '../components/Button.vue';
import { onMounted } from 'vue';
onMounted(() => {
    animate("li", { y: [-150, 0], opacity: [0, 1] }, { delay: stagger(0.3, { start: 0.5 }) })
});
</script>

<template>
    <div class="p-16 h-screen w-screen relative">
        <h1 class="text-7xl font-medium font-[Oswald]">Luật chơi</h1>
        <ul class="pt-8 text-4xl leading-relaxed list-disc pl-8">
            <li>Sẽ có 5 câu hỏi cho các bạn lựa chọn và trong 5 câu hỏi này sẽ có 1 chữ cái của mật mã</li>
            <li>Nhiệm vụ của các bạn là trả lời các câu hỏi này để tìm mật mã và nhận thưởng</li>
            <li>Bạn nào trả lời đúng thì sẽ được 2 viên kẹo</li>
            <li>Bạn nào trả lời sai thì không sao, không có bị gì đâu nè :)</li>
            <li>Bạn nào tìm được mật mã sẽ được thưởng nóng 5 viên kẹo 😁</li>
        </ul>
    </div>
    <RouterLink :to="`/quiz_list`">
        <Button class="absolute bottom-8 right-8 text-3xl h-auto w-auto">
            Đã rõ luật chơi
            <FontAwesomeIcon
                icon="fa-check-square"
                size="lg"
                class="ml-2"
            />
        </Button>
    </RouterLink>
</template>