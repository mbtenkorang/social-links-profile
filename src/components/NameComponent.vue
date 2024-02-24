<script setup>
const props = defineProps({
    username: { type: String },
})
</script>

<template>
    <h1 class="font-bold text-2xl text-center mt-4">{{ username }}</h1>
</template>