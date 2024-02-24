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
      websiteUrl: "https://www.frontendmentor.io"
    },
    {
      websiteName: "LinkedIn",
      websiteUrl: "https://www.linkedin.com"
    },
    {
      websiteName: "Twitter",
      websiteUrl: "https://www.twitter.com"
    },
    {
      websiteName: "Instagram",
      websiteUrl: "https://www.instagram.com"
    }
  ],
})
</script>

<template>
  <main
    class="flex flex-col items-center justify-around border border-dark-grey bg-dark-grey rounded-lg shadow-md mb-5 pt-5 px-6">
    <ImageComponent :src-url="userProfile.profilePicture" />
    <div>
      <NameComponent :username="userProfile.userName" />
      <LocationComponent :location="userProfile.location" />
    </div>
    <StatusComponent :status="userProfile.status" />
    <ButtonComponents :social_links="userProfile.socialLinks" />
  </main>
</template>
