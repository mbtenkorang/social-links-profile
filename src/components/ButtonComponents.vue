<script setup>
const props = defineProps({
    social_links: Array
})
</script>

<template>
    <div class="w-full mb-5 py-3 text-center border border-neutral-grey bg-neutral-grey rounded-lg transition-colors hover:bg-primary-green hover:text-neutral-grey hover:duration-400 ease-in-out cursor-pointer"
        v-for="(item,index) in social_links">
        <a :href="item.websiteUrl" target="_blank" :key="index" class="font-semibold text-sm block">
            {{ item.websiteName}}
        </a>
    </div>
</template>