<script setup>
import { computed } from 'vue';

const props = defineProps({
    location: Object
})

const comp_location = computed(() => {
    let { city, country } = props.location
    return `${city}, ${country}`
})

</script>

<template>
    <div>
        <p>{{ comp_location }}</p>
    </div>
</template>