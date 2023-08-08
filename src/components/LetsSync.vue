<script setup lang="ts">
import Navbar from "./Navbar.vue";
// import VerifcationPinPad from "./VerifcationPinPad.vue";
// import DJForm from "./player/DJForm.vue";
import YoutubePlayer from "./player/YoutubePlayer.vue";
</script>

<template>
  <!-- Main Outer Layer -->
  <div class="w-full min-h-screen">
    <Navbar />

    <!-- <VerifcationPinPad /> -->

    <!-- <DJForm /> -->

    <YoutubePlayer
    :video-id="'0mCVpUDCkEk'"
     />
  </div>
</template>

<style scoped></style>
