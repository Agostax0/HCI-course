
<template>
	<div :class="$style.overlay" @click.self="$emit('close')">
		<div :class="$style.popup">
			<div :class="$style.productInfoCard">
				<img :class="$style.imageIcon" alt="" src="@/assets/bivacco-ciglio.png" />

				<div :class="$style.body">
					<div :class="$style.text">
						<div :class="$style.text2">Bivacco “Ciglio”</div>
					</div>

					<div :class="$style.bedParent">
						<img :class="$style.bedIcon" src="@/assets/bed.png" alt="" />
						<div :class="$style.textStrong">
							<div :class="$style.textStrong2">4</div>
						</div>
						<img :class="$style.bedIcon" src="@/assets/firepit.png" alt="" />
						<div :class="$style.textStrong">
							<div :class="$style.textStrong2">1</div>
						</div>
						<img :class="$style.bedIcon" src="@/assets/mountain.png" alt="" />
						<div :class="$style.textStrong">
							<div :class="$style.textStrong2">800mt</div>
						</div>
					</div>
					<div :class="$style.textSmall" @click="$emit('close')">
						<div :class="$style.textSmall2">More info</div>
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
	background: rgba(0, 0, 0, 0.35);
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
	height: 265px;
	position: relative;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	background-color: #fff;
	border: 1px solid #d9d9d9;
}

.productInfoCard {
	position: relative;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	background-color: #fff;
	border: 1px solid #d9d9d9;
	box-sizing: border-box;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 16px;
	gap: 16px;
	min-width: 240px;
	text-align: left;
	font-size: 16px;
	color: #1e1e1e;
	font-family: Inter;
}

.imageIcon {
	align-self: stretch;
	height: 137px;
	max-width: 100%;
	overflow: hidden;
	flex-shrink: 0;
	object-fit: cover;
}

.body {
	width: 208px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 8px;
}

.text {
	align-self: stretch;
	display: flex;
	align-items: flex-start;
}

.text2 {
	flex: 1;
	position: relative;
	line-height: 140%;
}

.bedParent {
	align-self: stretch;
	display: flex;
	align-items: center;
	gap: 5px;
}

.bedIcon {
	width: 31px;
	position: relative;
	max-height: 100%;
	object-fit: cover;
}

.textStrong {
	height: 31px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.textStrong2 {
	position: relative;
	line-height: 140%;
	font-weight: 600;
}

.textSmall {
	align-self: stretch;
	display: flex;
	align-items: center;
	cursor: pointer;
	font-size: 14px;
	color: #757575;
}

.textSmall2 {
	position: relative;
	line-height: 140%;
}
</style>