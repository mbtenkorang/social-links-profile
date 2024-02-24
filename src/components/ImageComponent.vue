<script setup>
const props = defineProps({
    srcUrl: {
        type: String
    }
})
</script>

<template>
    <div class="md:mt-5">
        <img :src=" srcUrl" alt="profile picture" class="rounded-full">
    </div>
</template>