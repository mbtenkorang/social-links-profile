<script setup>
const props = defineProps({
    status: String
})
</script>

<template>
    <p class="font-normal text-sm my-5">"{{ status }}"</p>
</template>