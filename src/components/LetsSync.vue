<script setup lang="ts">
import Navbar from "./Navbar.vue";
import VerifcationPinPad from "./VerifcationPinPad.vue";
import DJForm from "./player/DJForm.vue";
import YoutubePlayer from "./player/YoutubePlayer.vue";
import { ref } from "vue";

const showPinPad = ref(true);
const showDJForm = ref(false);
const videoIdLink = ref<string | null>(null);

const handleCorrectPin = () => {
  showPinPad.value = false;
  showDJForm.value = true;
};

const handleVideoId = (videoId: string) => {
  videoIdLink.value = videoId;
  showDJForm.value = false;
};
</script>

<template>
  <!-- Main Outer Layer -->
  <div class="w-full min-h-screen">
    <Navbar />

    <VerifcationPinPad v-if="showPinPad" :handleCorrectPin="handleCorrectPin" />

    <DJForm v-if="showDJForm" :handle-video-id="handleVideoId" />

    <YoutubePlayer v-if="videoIdLink" :video-id="videoIdLink" />
  </div>
</template>

<style scoped></style>
