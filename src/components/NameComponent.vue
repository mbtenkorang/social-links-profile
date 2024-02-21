<script setup>
const props = defineProps({
    username: { type: String },
})
</script>

<template>
    <h1>{{ username }}</h1>
</template>