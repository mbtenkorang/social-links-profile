<script setup>
import { reactive } from 'vue';
import ImageComponent from './components/ImageComponent.vue';
import NameComponent from './components/NameComponent.vue';
import StatusComponent from './components/StatusComponent.vue';
import LocationComponent from './components/LocationComponent.vue';
import ButtonComponents from './components/ButtonComponents.vue';

const userProfile = reactive({
  userName: "Jessica Randall",
  profilePicture: "./assets/images/avatar-jessica.jpeg",
  status: "Front-end developer and avid reader.",
  location: {
    city: "London",
    country: "United Kingdom"
  },
  socialLinks: [
    {
      websiteName: "GitHub",
      websiteUrl: "https://www.github.com"
    },
    {
      websiteName: "Frontend Mentor",
      websiteUrl: "www.frontendmentor.io"
    },
    {
      websiteName: "LinkedIn",
      websiteUrl: "www.linkedin.com"
    },
    {
      websiteName: "Twitter",
      websiteUrl: "www.twitter.com"
    },
    {
      websiteName: "Instagram",
      websiteUrl: "www.instagram.com"
    }
  ],
})
</script>

<template>
  <main>
    <ImageComponent :src-url="userProfile.profilePicture" />
    <NameComponent :username="userProfile.userName" />
    <LocationComponent :location="userProfile.location" />
    <StatusComponent :status="userProfile.status" />
    <ButtonComponents :social_links="userProfile.socialLinks" />
  </main>
</template>

<style scoped></style>
