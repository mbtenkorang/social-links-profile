<script setup>
const props = defineProps({
    userName: { type: String },
})
</script>

<template>
    <h1 class="font-bold text-2xl text-center mt-4">{{ userName }}</h1>
</template>