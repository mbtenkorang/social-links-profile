<script setup>
const props = defineProps({
    srcUrl: {
        type: String,
        required: true
    }
})
</script>

<template>
    <img :src="srcUrl" alt="profile picture" class="rounded-full w-[35%] md:w-2/6 mx-auto">
</template>