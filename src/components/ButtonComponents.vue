<script setup>
const props = defineProps({
    social_links: Array
})
</script>

<template>
    <div class="w-full last:mb-0">
        <a class="block w-full mb-5 py-3 text-center border border-neutral-grey bg-neutral-grey rounded-lg transition-colors ease-in-out hover:bg-primary-green hover:text-neutral-grey hover:duration-400 focus:bg-primary-green focus:text-neutral-grey"
            v-for="(item,index) in social_links" :href="item.websiteUrl" target="_blank" :key="index">
            <span class="font-semibold text-sm">
                {{ item.websiteName}}
            </span>
        </a>
    </div>
</template>