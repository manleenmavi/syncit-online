<template>
  <!-- Pin Pad lock screen -->
  <!--           class="flex justify-center items-center w-4 h-4 rounded-full mx-1 border-2 border-gray-100
 -->
  <div
    class="max-w-full w-96 mx-auto bg-gray-700 bg-opacity-0 mt-10 p-14 rounded-xl"
  >
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

    <!-- Error Message -->
    <div class="my-4">
      <TadaErrorMessage
        v-if="confirmation === false"
        error="Incorrect Pin"
      ></TadaErrorMessage>
    </div>

    <!-- Number Pad -->
    <div class="grid grid-cols-3 gap-4 justify-items-center items-center mt-5">
      <button
        class="w-14 h-14 bg-gray-100 rounded-full text-xl font-bold text-gray-700 hover:bg-white"
        @click="addPin(1)"
      >
        1
      </button>

      <button
        class="w-14 h-14 bg-gray-100 rounded-full text-xl font-bold text-gray-700 hover:bg-white"
        @click="addPin(2)"
      >
        2
      </button>

      <button
        class="w-14 h-14 bg-gray-100 rounded-full text-xl font-bold text-gray-700 hover:bg-white"
        @click="addPin(3)"
      >
        3
      </button>

      <button
        class="w-14 h-14 bg-gray-100 rounded-full text-xl font-bold text-gray-700 hover:bg-white"
        @click="addPin(4)"
      >
        4
      </button>

      <button
        class="w-14 h-14 bg-gray-100 rounded-full text-xl font-bold text-gray-700 hover:bg-white"
        @click="addPin(5)"
      >
        5
      </button>

      <button
        class="w-14 h-14 bg-gray-100 rounded-full text-xl font-bold text-gray-700 hover:bg-white"
        @click="addPin(6)"
      >
        6
      </button>

      <button
        class="w-14 h-14 bg-gray-100 rounded-full text-xl font-bold text-gray-700 hover:bg-white"
        @click="addPin(7)"
      >
        7
      </button>

      <button
        class="w-14 h-14 bg-gray-100 rounded-full text-xl font-bold text-gray-700 hover:bg-white"
        @click="addPin(8)"
      >
        8
      </button>

      <button
        class="w-14 h-14 bg-gray-100 rounded-full text-xl font-bold text-gray-700 hover:bg-white"
        @click="addPin(9)"
      >
        9
      </button>

      <button
        class="w-14 h-14 p-3 bg-gray-100 rounded-full text-xl font-bold text-gray-700 hover:bg-white"
        @click="removePin()"
      >
        <img src="../assets/cancel.svg" alt="Forward Arrow" />
      </button>

      <button
        class="w-14 h-14 bg-gray-100 rounded-full text-xl font-bold text-gray-700 hover:bg-white"
        @click="addPin(0)"
      >
        0
      </button>

      <button
        class="w-14 h-14 p-3 bg-gray-100 rounded-full text-xl font-bold text-gray-700 hover:bg-white"
        @click="submitPin()"
      >
        <img src="../assets/arrow_forward.svg" alt="Forward Arrow" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TadaErrorMessage from "./error/TadaErrorMessage.vue";

const props = defineProps({
  handleCorrectPin: {
    type: Function,
    required: true,
  },
});

// Need to fetch correct pin and compare
const correctPinFirst = ref("5555");
const correctPinSecond = ref("2222");

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
  const pinString = pin.value.join("");

  if (pinString === correctPinFirst.value) {
    props.handleCorrectPin(1);
  } else if (pinString === correctPinSecond.value) {
    props.handleCorrectPin(2);
  } else {
    denyPin();
    return;
  }
  confirmation.value = true;
};

// Confirmation
const confirmation = ref<boolean | null>(null);

const denyPin = () => {
  pin.value = [];
  confirmation.value = false;
};
</script>
