<script setup>
import { reactive } from 'vue';
import ImageComponent from './components/imagecomponent.vue';
import NameComponent from './components/namecomponent.vue';

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
      websiteUrl: "www.github.com"
    },
    {
      websiteName: "Frontend Mentor",
      websiteUrl: "www.frontendmentor.io"
    }, {
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
  </main>
</template>

<style scoped></style>
