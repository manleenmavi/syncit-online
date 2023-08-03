
<template>
        <div
      :class="[
      dark ? 'bg-slate-700 text-white' : 'bg-gray-100  text-gray-700 ',
      'shadow-md my-4 p-1 flex flex-row rounded-lg tadaAnimation tada']"
    >
      <div class="bg-red-500 inline-block rounded-lg p-1 mr-1"></div>
      <div class="p-1 font-bold">{{error }}</div>
    </div>
</template>

<script setup lang="ts">
import "../../styles/TadAnimation.css"


defineProps({
    error: {
        typ: String,
        required: true
    },
    dark: {
        type: Boolean,
        default: false
    }
})
</script>