<template>
    <template>
  	<div :class="$style.bivouac2">
    		<div :class="$style.bivouac2Child" />
    		<img :class="$style.mynauilocationHomeSolidIcon" alt="" @click="onMynauilocationHomeSolidClick" />
    		<img :class="$style.mynauilocationHomeSolidIcon2" alt="" @click="onMynauilocationHomeSolidClick" />
    		<img :class="$style.mynauilocationHomeSolidIcon3" alt="" @click="onMynauilocationHomeSolidClick" />
    		<div :class="$style.mynauimapSolidParent">
      			<img :class="$style.mynauimapSolidIcon" alt="" />
      			<img :class="$style.mynauiflowerSolidIcon" alt="" @click="onMynauilocationHomeSolidClick" />
      			<img :class="$style.mynauiflowerSolidIcon" alt="" @click="onMynauilocationHomeSolidClick" />
      			<img :class="$style.mynauilocationHomeSolidIcon4" alt="" @click="onMynauilocationHomeSolidClick" />
      			<img :class="$style.mynauimapSolidIcon" alt="" />
    		</div>
    		<div :class="$style.pageTitle">
      			<div :class="$style.textContentTitle">
        				<b :class="$style.title">Bivouac</b>
      			</div>
    		</div>
            <ProductCard v-if="showPopup" @close="showPopup = false" />
  	</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'

const showPopup = ref(false) 	
  	
  	function onMynauilocationHomeSolidClick() {
    		showPopup.value = true
  	}</script>
<style  module>.bivouac2 {
  	width: 100%;
  	height: 852px;
  	position: relative;
  	border-radius: 50px;
  	background-color: #e9f5db;
  	border: 1px solid #000;
  	box-sizing: border-box;
  	overflow: hidden;
  	text-align: left;
  	font-size: 36px;
  	color: #000;
  	font-family: Inter;
}
  	.bivouac2Child {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		border-radius: 48px;
    		border: 1px solid #000;
    		box-sizing: border-box;
    		width: 393px;
    		height: 852px;
  	}
  	.mynauilocationHomeSolidIcon {
    		position: absolute;
    		top: 243px;
    		left: 193px;
    		width: 64px;
    		height: 64px;
    		cursor: pointer;
  	}
  	.mynauilocationHomeSolidIcon2 {
    		position: absolute;
    		top: 394px;
    		left: 160px;
    		width: 64px;
    		height: 64px;
    		cursor: pointer;
  	}
  	.mynauilocationHomeSolidIcon3 {
    		position: absolute;
    		top: 498px;
    		left: 292px;
    		width: 64px;
    		height: 64px;
    		cursor: pointer;
  	}
  	.mynauimapSolidParent {
    		position: absolute;
    		top: 761px;
    		left: 9px;
    		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    		backdrop-filter: blur(4px);
    		border-radius: 50px;
    		background-color: rgba(255, 255, 255, 0.8);
    		width: 375px;
    		height: 80px;
    		display: flex;
    		align-items: center;
    		justify-content: center;
    		gap: 5px;
  	}
  	.mynauimapSolidIcon {
    		width: 64px;
    		position: relative;
    		max-height: 100%;
  	}
  	.mynauiflowerSolidIcon {
    		width: 64px;
    		position: relative;
    		max-height: 100%;
    		cursor: pointer;
  	}
  	.mynauilocationHomeSolidIcon4 {
    		height: 64px;
    		width: 64px;
    		position: relative;
    		cursor: pointer;
  	}
  	.pageTitle {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		opacity: 0.4;
  	}
  	.textContentTitle {
    		width: 393px;
    		height: 120px;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		justify-content: flex-end;
    		padding: 10px 20px;
    		box-sizing: border-box;
  	}
  	.title {
    		align-self: stretch;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 120%;
  	}

</style>
</template>

<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="popup">
      <div :class="$style.productInfoCard">
        <!-- QUI dentro rimane uguale il tuo markup -->
        <img :class="$style.imageIcon" alt="" />
        <div :class="$style.body">
          <div :class="$style.text">
            <div :class="$style.text2">Bivacco “Ciglio”</div>
          </div>
          <div :class="$style.imageFcuczibomwyfiephpsaknmvdParent">
            <img :class="$style.imageFcuczibomwyfiephpsaknmvdIcon" alt="" />
            <div :class="$style.textStrong">
              <div :class="$style.textStrong2">4</div>
            </div>
            <img :class="$style.imageFcuczibomwyfiephpsaknmvdIcon" alt="" />
            <div :class="$style.textStrong">
              <div :class="$style.textStrong2">1</div>
            </div>
            <img :class="$style.imageFcuczibomwyfiephpsaknmvdIcon" alt="" />
            <div :class="$style.textStrong">
              <div :class="$style.textStrong2">800mt</div>
            </div>
          </div>
          <div :class="$style.textSmall" @click="$emit('close')">
            <div :class="$style.textSmall2">Close</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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