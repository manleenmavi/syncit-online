<script setup lang="ts">
import Navbar from "./Navbar.vue";
import VerifcationPinPad from "./VerifcationPinPad.vue";
import DJForm from "./player/DJForm.vue";
import YoutubePlayer from "./player/YoutubePlayer.vue";
import YoutubePlayer2 from "./player/YoutubePlayer2.vue";
import getCountdownTime from "./player/countdownTime";


import { ref } from "vue";

getCountdownTime();

const showPinPad = ref(true);
const showDJForm = ref(false);
const playerApproach = ref(0); //0 not set, 1 first approach, 2 second approach
const videoIdLink = ref<string | null>(null);

const handleCorrectPin = (approach: number) => {
  showPinPad.value = false;
  showDJForm.value = true;
  playerApproach.value = approach;
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

    <!-- 5555 pin for first approach, 2222 for second -->
    <VerifcationPinPad v-if="showPinPad" :handleCorrectPin="handleCorrectPin" />

    <DJForm v-if="showDJForm" :handle-video-id="handleVideoId" />

    <YoutubePlayer v-if="videoIdLink && playerApproach === 1" :video-id="videoIdLink" />
    <YoutubePlayer2 v-if="videoIdLink && playerApproach === 2" :video-id="videoIdLink" />
  </div>
</template>

<style scoped></style>
