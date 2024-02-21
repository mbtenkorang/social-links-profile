<script setup>
const props = defineProps({
    srcUrl: {
        type: String
    }
})
</script>

<template>
    <div class="overflow-hidden">
        <img :src="srcUrl" alt="profile picture" class="rounded-full">
    </div>
</template>