<style>
.tadaAnimation {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  /* animation-iteration-count: infinite; */
}

@-webkit-keyframes tada {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes tada {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    -ms-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.tada {
  -webkit-animation-name: tada;
  animation-name: tada;
}
</style>

<template>
  <!-- Pin Pad lock screen -->
  <!--           class="flex justify-center items-center w-4 h-4 rounded-full mx-1 border-2 border-gray-100
 -->
  <div class="max-w-full w-64 mx-auto">
    <!-- Dots -->
    <div class="my-4">
      <div
        v-if="confirmation !== false"
        class="flex justify-center items-center w-full"
      >
        <!-- :class is same as v-bind:class -->
        <div
          :class="[
            pin.length > 0 ? 'bg-white' : 'bg-transparent',
            'flex justify-center items-center w-4 h-4 rounded-full mx-1 border-2 border-gray-100',
          ]"
        ></div>
        <div
          :class="[
            pin.length > 1 ? 'bg-white' : 'bg-transparent',
            'flex justify-center items-center w-4 h-4 rounded-full mx-1 border-2 border-gray-100',
          ]"
        ></div>
        <div
          :class="[
            pin.length > 2 ? 'bg-white' : 'bg-transparent',
            'flex justify-center items-center w-4 h-4 rounded-full mx-1 border-2 border-gray-100',
          ]"
        ></div>
        <div
          :class="[
            pin.length > 3 ? 'bg-white' : 'bg-transparent',
            'flex justify-center items-center w-4 h-4 rounded-full mx-1 border-2 border-gray-100',
          ]"
        ></div>
      </div>
    </div>

    <div
      v-if="confirmation === false"
      class="shadow-md my-4 p-1 flex flex-row rounded-lg bg-gray-100 tadaAnimation tada"
    >
      <div class="bg-red-500 inline-block rounded-lg p-1 mr-1"></div>
      <div class="p-1 text-gray-700 font-bold">Invalid Pin</div>
    </div>

    <!-- Number Pad -->
    <div class="grid grid-cols-3 gap-4 justify-items-center items-center mt-5">
      <button
        class="w-10 h-10 bg-gray-100 rounded-full text-md font-bold text-gray-700 hover:bg-white"
        @click="addPin(1)"
      >
        1
      </button>

      <button
        class="w-10 h-10 bg-gray-100 rounded-full text-md font-bold text-gray-700 hover:bg-white"
        @click="addPin(2)"
      >
        2
      </button>

      <button
        class="w-10 h-10 bg-gray-100 rounded-full text-md font-bold text-gray-700 hover:bg-white"
        @click="addPin(3)"
      >
        3
      </button>

      <button
        class="w-10 h-10 bg-gray-100 rounded-full text-md font-bold text-gray-700 hover:bg-white"
        @click="addPin(4)"
      >
        4
      </button>

      <button
        class="w-10 h-10 bg-gray-100 rounded-full text-md font-bold text-gray-700 hover:bg-white"
        @click="addPin(5)"
      >
        5
      </button>

      <button
        class="w-10 h-10 bg-gray-100 rounded-full text-md font-bold text-gray-700 hover:bg-white"
        @click="addPin(6)"
      >
        6
      </button>

      <button
        class="w-10 h-10 bg-gray-100 rounded-full text-md font-bold text-gray-700 hover:bg-white"
        @click="addPin(7)"
      >
        7
      </button>

      <button
        class="w-10 h-10 bg-gray-100 rounded-full text-md font-bold text-gray-700 hover:bg-white"
        @click="addPin(8)"
      >
        8
      </button>

      <button
        class="w-10 h-10 bg-gray-100 rounded-full text-md font-bold text-gray-700 hover:bg-white"
        @click="addPin(9)"
      >
        9
      </button>

      <button
        class="w-10 h-10 p-2 bg-gray-100 rounded-full text-md font-bold text-gray-700 hover:bg-white"
        @click="removePin()"
      >
        <img src="../assets/cancel.svg" alt="Forward Arrow" />
      </button>

      <button
        class="w-10 h-10 bg-gray-100 rounded-full text-md font-bold text-gray-700 hover:bg-white"
        @click="addPin(0)"
      >
        0
      </button>

      <button
        class="w-10 h-10 p-2 bg-gray-100 rounded-full text-md font-bold text-gray-700 hover:bg-white"
        @click="submitPin()"
      >
        <img src="../assets/arrow_forward.svg" alt="Forward Arrow" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Need to fetch correct pin and compare
// const correctPin = ref<number | null>(null);

// Pin Pad
const pin = ref<number[]>([]);

const addPin = (num: number) => {
  if (pin.value.length < 4) {
    pin.value.push(num);
  }
  if (confirmation.value === false) {
    confirmation.value = null;
  }
};

const removePin = () => {
  pin.value = [];
  confirmation.value = null;
};

const submitPin = () => {
  console.log(pin.value);
  if (pin.value.length === 4) {
    confirmation.value = true;
  } else {
    denyPin();
  }
};

// Confirmation
const confirmation = ref<boolean | null>(null);

const denyPin = () => {
  pin.value = [];
  confirmation.value = false;
};
</script>
