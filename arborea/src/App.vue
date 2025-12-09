<script setup lang="ts">
import EquipmentWeather from './views/EquipmentWeather.vue';
</script>

<template>
  <EquipmentWeather/>
</template>

<style>
/* Since your component has a fixed width of 393px (mobile layout),
  this centers it on the screen for better viewing on desktop.
*/

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0; /* Optional: grey background to see the phone frame */
}

</style>
