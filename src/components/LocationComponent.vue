<script setup>
import { computed } from 'vue';

const props = defineProps({
    location: Object,
    required: true
})

const comp_location = computed(() => {
    let { city, country } = props.location
    return `${city}, ${country}`
})

</script>

<template>
    <p class="text-sm text-primary-green font-semibold text-center mt-2">{{ comp_location }}</p>
</template>