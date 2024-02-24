<script setup>
const props = defineProps({
    social_links: Array
})
</script>

<template>
    <div>
        <ul>
            <li v-for="(item,index) in social_links" :key="index">
                <a :href="item.websiteUrl" target="_blank">
                    {{ item.websiteName}}</a>
            </li>
        </ul>
    </div>
</template>