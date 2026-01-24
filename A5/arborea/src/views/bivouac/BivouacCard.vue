<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="popup">
      <div class="productInfoCard">
        <img class="imageIcon" alt="" />

        <div class="body">
          <div class="text">
            <div class="text2">Bivacco “Ciglio”</div>
          </div>

          <div class="imageFcuczibomwyfiephpsaknmvdParent">
            <img class="imageFcuczibomwyfiephpsaknmvdIcon" alt="" />
            <div class="textStrong"><div class="textStrong2">4</div></div>

            <img class="imageFcuczibomwyfiephpsaknmvdIcon" alt="" />
            <div class="textStrong"><div class="textStrong2">1</div></div>

            <img class="imageFcuczibomwyfiephpsaknmvdIcon" alt="" />
            <div class="textStrong"><div class="textStrong2">800mt</div></div>
          </div>

          <div class="textSmall" @click="$emit('close')">
            <div class="textSmall2">Close</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['close'])
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}
.popup {
  z-index: 60;
}
</style>