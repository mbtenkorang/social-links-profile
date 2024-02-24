<script setup>
const props = defineProps({
    status: String
})
</script>

<template>
    <p class="font-normal text-sm my-6">"{{ status }}"</p>
</template>