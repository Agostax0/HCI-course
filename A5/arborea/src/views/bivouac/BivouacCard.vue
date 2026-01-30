<template>
  <div :class="$style.overlay" @click.self="$emit('close')">
    <div :class="$style.popup">
      <div :class="$style.productInfoCard">
        <img :class="$style.imageIcon" src="@/assets/bivacco-ciglio.png" alt="" />

        <div :class="$style.body">
          <div :class="$style.text">
            <div :class="$style.text2">Bivacco “Ciglio”</div>
          </div>

          <div :class="$style.imageFcuczibomwyfiephpsaknmvdParent">
            <img :class="$style.imageFcuczibomwyfiephpsaknmvdIcon" src="@/assets/bed.png" />
            <div :class="$style.textStrong"><div :class="$style.textStrong2">4</div></div>

            <img :class="$style.imageFcuczibomwyfiephpsaknmvdIcon" />
            <div :class="$style.textStrong"><div :class="$style.textStrong2">1</div></div>

            <img :class="$style.imageFcuczibomwyfiephpsaknmvdIcon" src="@/assets/mountain.png" />
            <div :class="$style.textStrong"><div :class="$style.textStrong2">800mt</div></div>
          </div>

          <div :class="$style.textSmall" @click="$emit('close')">
            <div :class="$style.textSmall2">Close</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
defineEmits(['close'])
</script>

<style module>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.popup {
  z-index: 110;
}

.productInfoCard {
  width: 341px;
  height: 245px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
}
.imageFcuczibomwyfiephpsaknmvdParent {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
}

.imageFcuczibomwyfiephpsaknmvdIcon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.body {
  padding: 16px;
}

.text2 {
  font-size: 16px;
  font-weight: 600;
}

.textStrong2 {
  font-size: 14px;
}


</style>