<!--  First Approach ----
    * Mounted Video auto initialized by playing(mute) and pausing it for 3 seconds
    * Video will be played muted
-->
<template>
  <div
    class="flex flex-col justify-center items-center bg-gray-100 py-12 px-10 max-w-3xl mx-auto rounded-ss-3xl rounded-lg"
  >
    <!-- Countdown -->
    <div
      class="flex flex-col justify-center items-center bg-gray-100 text-center max-w-3xl mx-auto rounded-ss-3xl rounded-lg"
    >
      <div class="flex flex-col gap-6 text-center">
        <div v-if="initialized" class="p-1 text-2xl text-gray-700 font-bold">
          {{ videoPlaying ? "Playing" : "Countdown" }}
        </div>
        <div class="w-full">
          <VueCountdown
            v-if="initialized && videoPlaying === false"
            ref="countdownYtPlayer"
            :time="countdownTime"
            :interval="100"
            @end="onCountDownEnd"
            v-slot="{ seconds, milliseconds }"
          >
            <div
              class="flex justify-center items-center font-bold text-4xl text-gray-700"
            >
              <div>
                {{ seconds }}
              </div>
              <div v-if="playVideoReq">
                .{{ Math.floor(milliseconds / 100) }}
              </div>
            </div>
          </VueCountdown>
        </div>
      </div>

      <div
        v-if="playVideoReq === false && initialized"
        @click="handlePlayVideoReq"
        class="relative px-5 py-2 font-medium text-white group min-w-fit w-1/2 mx-auto cursor-pointer my-10"
      >
        <span
          class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"
        ></span>
        <span
          class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"
        ></span>
        <span
          class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"
        ></span>
        <span
          class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"
        ></span>
        <span class="relative">Play</span>
      </div>
    </div>

    <!-- Player Initializing -->
    <div
      v-if="!initialized"
      class="animate-pulse flex flex-col space-x-4 w-3/4 my-24"
    >
      <div class="rounded-lg bg-slate-200 h-32 w-full mb-5"></div>
      <div class="flex-1 space-y-6 py-1">
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-200 rounded"></div>

          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>

    <!-- Player -->
    <div
      :class="[
        initialized ? 'block' : 'hidden',
        'w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-md my-4 flex flex-col',
      ]"
    >
      <div :id="playerId" class="ytempl-container"></div>

      <div class="w-full flex">
        <div
          @click="syncAgainReq"
          v-if="videoPlaying"
          class="cursor-pointer mr-auto px-5 py-2.5 font-medium bg-green-50 hover:bg-green-100 hover:text-green-600 text-green-500 rounded-lg text-sm"
        >
          Sync Again
        </div>
        <div
          @click="unmuteVideo"
          v-if="videoPlaying && player.isMuted()"
          class="cursor-pointer ml-auto px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
        >
          Unmute
        </div>
      </div>
    </div>
    <!-- <button @click="playVideo">Play</button> -->
    <!-- <button @click="pauseVideo">Pause</button> -->
    <!-- <input type="range" v-model="currentTime" @input="seekVideo" /> -->
    <!-- <button @click="muteVideo">Mute</button> -->
    <!-- <button @click="unmuteVideo">Unmute</button> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import "../../styles/YtEmbedPlayer.css";
import VueCountdown from "@chenfengyuan/vue-countdown";
import getCountdownTime from "./countdownTime";

// Props
const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
});
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any; // Declare YT as any to avoid TypeScript error
  }
}

// Loaded
const initialized = ref(false);
const playVideoReq = ref(false);
const videoPlaying = ref(false);
const countdownYtPlayer = ref<any>(null);

// Timer
// const startCountdown = ref(false);
const countdownTime = ref(0);
const onCountDownEnd = () => {
  // startCountdown.value = false;

  console.log("Countdown Ended", countdownYtPlayer.value);

  // If countdown ends and play is not requested, restart the countdown
  if (playVideoReq.value === false && countdownYtPlayer.value) {
    console.log("Restarting Countdown");
    countdownTime.value = 10000;
    countdownYtPlayer.value.restart();
  }
};
const setCountdownTime = async () => {
  // console.log("Setting Countdown Time", await getCountdownTime());
  countdownTime.value = await getCountdownTime();
};

// Play Video request
const handlePlayVideoReq = async () => {
  playVideoReq.value = true;

  muteVideo();
  // Setting Interval to play video at next tenth second
  setTimeout(async () => {
    videoPlaying.value = true;
    player.playVideo();
  }, await getCountdownTime());
};

// Sync Again
const syncAgainReq = async () => {
  setCountdownTime();
  videoPlaying.value = false;
  playVideoReq.value = true;
  pauseVideo();
  player.seekTo(0);

  handlePlayVideoReq();
};

// YT Player
const playerId = "player-container";
let player: any = null;

// YT Player Setup
const createPlayer = () => {
  const YT: any = (window as any).YT;
  player = new YT.Player(playerId, {
    videoId: props.videoId,
    events: {
      onReady: onPlayerReady,
    },

    playerVars: {
      disablekb: 1, // Disable keyboard controls
      enablejsapi: 1, // Enable JS API to control the player
      modestbranding: 1, // Show a smaller YouTube logo without related videos when paused
    },
  });
};

onMounted(() => {
  // Check if the YouTube API is already loaded
  if (
    typeof window.YT === "undefined" ||
    typeof window.YT.Player === "undefined"
  ) {
    // If the API is not loaded, wait for it to load
    window.onYouTubeIframeAPIReady = createPlayer;
  } else {
    // If the API is already loaded, create the player immediately
    createPlayer();
  }
});

onUnmounted(() => {
  // Destroy the player when the component is unmounted
  if (player) {
    player.destroy();
  }
});

// Player Funtions
const playVideo = () => {
  player.playVideo();
};

const pauseVideo = () => {
  player.pauseVideo();
};

const seekVideo = (currTime: number) => {
  player.seekTo(currTime, true);
};

const muteVideo = () => {
  player.mute();
};

const unmuteVideo = () => {
  player.unMute();
};

const onPlayerReady = () => {
  muteVideo();
  playVideo();

  setTimeout(async () => {
    pauseVideo();
    seekVideo(0);
    unmuteVideo();
    initialized.value = true;
    setCountdownTime();
  }, 3000);
};
</script>
