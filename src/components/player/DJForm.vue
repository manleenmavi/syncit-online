<template>
  <div
    class="flex flex-col justify-center items-center p-8 bg-gray-100 py-28 px-10 max-w-lg mx-auto rounded-ss-3xl rounded-lg mt-10"
  >
    <div class="flex w-full flex-col gap-6 text-center">
      <div class="p-1 text-2xl text-gray-700 font-bold">Youtube Video Link</div>

      <TadaErrorMessage
        v-if="wrongLink"
        error="Please enter a valid youtube link"
        dark
      ></TadaErrorMessage>

      <div class="w-full">
        <input
          class="bg-red-50 appearance-none border-2 border-red-100 rounded w-full py-2 px-4 text-purple-500 leading-tight focus:text-gray-700 focus:outline-none focus:bg-white focus:border-gray-700"
          id="inline-full-name"
          type="text"
          v-model="ytLink"
        />
      </div>

      <div
        @click="submitLink"
        class="relative px-5 py-2 font-medium text-white group min-w-fit w-1/2 mx-auto cursor-pointer"
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
        <span class="relative">Ready</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TadaErrorMessage from "../error/TadaErrorMessage.vue";
import { ref } from "vue";

const props = defineProps({
  handleVideoId: {
    type: Function,
    required: true,
  },
})

const youtubeUrlRegex =
  /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|v\/))([^\?&"'>]+)/;

const ytLink = ref("");
const wrongLink = ref(false);

const submitLink = () => {
  wrongLink.value = false;

  const videoLink = youtubeUrlRegex.test(ytLink.value);

  // ytLink.value.match(/v=([^\&]+)/);

  if (!videoLink) {
    wrongLink.value = true;
    return;
  }

  const videoId = ytLink.value.match(/v=([^\&]+)/);
  if (!videoId) {
    wrongLink.value = true;
    return;
  }

  // match(/v=([^\&]+)/)
  props.handleVideoId(videoId[1]);

  console.log(ytLink.value, videoId[1]);
};
</script>
