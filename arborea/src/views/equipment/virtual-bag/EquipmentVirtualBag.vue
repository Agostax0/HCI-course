<template>
    <div :class="$style.equipmentVirtualBag">
        <div :class="$style.pageTitle">
            <div :class="$style.textContentTitle">
                <b :class="$style.title">Don’t forget it</b>
            </div>
            <div :class="$style.iconButton">
                <img :class="$style.skipForwardIcon" src="@/assets/images/menu-items/skip-forward.svg" alt="" />
            </div>
        </div>
        <div :class="$style.mynauimapSolidParent">
            <BaseBottomBar />
        </div>
        <div id="shelves">
            <img :class="$style.bottomRightShelf" src="@/assets/images/equipment-items/shelf.png" alt="" />
            <img :class="$style.topRightShelf" src="@/assets/images/equipment-items/shelf.png" alt="" />
            <img :class="$style.middleRightShelf" src="@/assets/images/equipment-items/shelf.png" alt="" />
            <img :class="$style.bottomLeftShelf" src="@/assets/images/equipment-items/shelf.png" alt="" />
            <img :class="$style.topLeftShelf" src="@/assets/images/equipment-items/shelf.png" alt="" />
            <img :class="$style.middleLeftShelf" src="@/assets/images/equipment-items/shelf.png" alt="" />
        </div>
        <div id="items">
            <img :class="$style.image11Icon" src="@/assets/images/equipment-items/torchlight.png" alt="" />
            <img :class="$style.image11Icon2" src="@/assets/images/equipment-items/water-bottle.png"alt="" />
            <img :class="$style.image11Icon3" src="@/assets/images/equipment-items/umbrella.svg"alt="" />
            <img :class="$style.image11Icon4" src="@/assets/images/equipment-items/compass.png"alt="" />
            <img :class="$style.image11Icon5" src="@/assets/images/equipment-items/snowGoggles.svg"alt="" />
            <img :class="$style.image11Icon6" src="@/assets/images/equipment-items/gloves.svg"alt="" />
            <img :class="$style.image11Icon7" src="@/assets/images/equipment-items/bug-repellent.png"alt="" />
        </div>
        
        <div id="bag">
            <img :class="$style.image21Icon" src="@/assets/images/equipment-items/backpack.png" alt="" />
        </div>
    </div>
</template>
<script setup lang="ts">
import BaseBottomBar from '@/views/components/BaseBottomBar.vue';

</script>
<style module>
div > #items{
    position: relative;
    z-index: 2;
}

div > #shelves{
    position: relative;
    z-index: 1;
}

.equipmentVirtualBag {
    width: 100%;
    height: 852px;
    position: relative;
    border-radius: 50px;
    background-color: #ebffee;
    border: 1px solid #000;
    box-sizing: border-box;
    overflow: hidden;
    text-align: left;
    font-size: 36px;
    color: #000;
    font-family: Inter;
}

.pageTitle {
    position: absolute;
    top: 50px;
    left: 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 393px;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
    gap: 10px;
}

.textContentTitle {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
    z-index: 0;
}

.title {
    position: relative;
    letter-spacing: -0.02em;
    line-height: 120%;
}

.iconButton {
    margin: 0 !important;
    position: absolute;
    right: 20px;
    bottom: 17px;
    border-radius: 32px;
    background-color: #2c2c2c;
    border: 1px solid #2c2c2c;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    z-index: 1;
}

.skipForwardIcon {
    height: 20px;
    width: 20px;
    position: relative;
}

.mynauimapSolidParent {
    position: absolute;
    top: 757px;
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

.mynauilocationHomeSolidIcon {
    height: 64px;
    width: 64px;
    position: relative;
    cursor: pointer;
}

.bottomRightShelf {
    position: absolute;
    top: 316px;
    left: 234px;
    width: 160px;
    height: 160px;
    object-fit: cover;
}

.topRightShelf {
    position: absolute;
    top: 156px;
    left: 234px;
    width: 160px;
    height: 160px;
    object-fit: cover;
}

.middleRightShelf {
    position: absolute;
    top: 236px;
    left: 234px;
    width: 160px;
    height: 160px;
    object-fit: cover;
}

.bottomLeftShelf {
    position: absolute;
    top: 316px;
    left: 0px;
    width: 160px;
    height: 160px;
    object-fit: contain;
    transform: scaleX(-1);

}

.topLeftShelf {
    position: absolute;
    top: 156px;
    left: 0px;
    width: 160px;
    height: 160px;
    object-fit: contain;
    transform: scaleX(-1);

}

.middleLeftShelf {
    position: absolute;
    top: 236px;
    left: 0px;
    width: 160px;
    height: 160px;
    object-fit: contain;
    transform: scaleX(-1);
}

.image11Icon {
    position: absolute;
    top: 197px;
    left: 34px;
    width: 46px;
    height: 46px;
    object-fit: cover;
}

.image11Icon2 {
    position: absolute;
    top: 268px;
    left: 33px;
    width: 46px;
    height: 46px;
    object-fit: cover;
}

.image11Icon3 {
    position: absolute;
    top: 332px;
    left: 303px;
    width: 64px;
    height: 64px;
    object-fit: cover;
}

.image11Icon4 {
    position: absolute;
    top: 261px;
    left: 85px;
    width: 46px;
    height: 46px;
    object-fit: cover;
}

.image11Icon5 {
    position: absolute;
    top: 250px;
    left: 262px;
    width: 64px;
    height: 64px;
    object-fit: cover;
}

.image11Icon6 {
    position: absolute;
    top: 334px;
    left: 48px;
    width: 64px;
    height: 64px;
    object-fit: cover;
}

.image11Icon7 {
    position: absolute;
    top: 183px;
    left: 288px;
    width: 46px;
    height: 46px;
    object-fit: cover;
}

.image21Icon {
    position: absolute;
    top: 476px;
    left: 55px;
    width: 281px;
    height: 281px;
    object-fit: cover;
}
</style>