<script setup>
import { reactive } from 'vue';

const userProfile = reactive({
  userName: "Jessica Randall",
  profilePicture: "./assets/images/avatar-jessica.jpeg",
  location: {
    city: "London",
    country: "United Kingdom"
  },
  status: "Front-end developer and avid reader.",
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
    <h1 class="font-sans">Hello World</h1>
  </main>
</template>

<style scoped></style>
