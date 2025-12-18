<script lang="ts">
const styles = [
    "image11Icon",
    "image11Icon2",
    "image11Icon3",
    "image11Icon4",
    "image11Icon5",
    "image11Icon6",
    "image11Icon7"
]
const imagesFromCookie: string[] = getImagesFromCookie().slice(0, styles.length);

const toExport:
    {
        src: string;
        style: string;
        visibile: boolean;
    }[] = []

for (let i = 0; i < styles.length; i++) {
    const img = imagesFromCookie[i];
    const style = styles[i];
    if (img && style) {
        toExport.push({
            src: new URL('@', import.meta.url).href + img,
            style: style,
            visibile: true
        });
    }
}

export default {
    data() {
        return {
            images: toExport
        }
    }
}

const dragStartHandler = (event: DragEvent, index: number): void => {
    if(event.dataTransfer)
        event.dataTransfer.setData('index', index.toString());
};

const dragOverHandler = (event: DragEvent): void => {
};

const dragLeaveHandler = (event: DragEvent): void => {
  // Optional: Add visual feedback when leaving the drop zone
};

const dropHandler = (event: DragEvent): void => {
    console.log('drop')
    if(event.dataTransfer){
        const id = event.dataTransfer.getData('index')

        const element = document.getElementById(id);

        if(element)
            element.style.visibility = 'hidden';
    }
};
</script>
<template>
    <div :class="$style.equipmentVirtualBag">
        <div :class="$style.pageTitle">
            <div :class="$style.textContentTitle">
                <b :class="$style.title">Don’t forget it</b>
            </div>
            <RouterLink to="/">
                <div :class="$style.iconButton">
                    <img :class="$style.skipForwardIcon" src="@/assets/images/menu-items/skip-forward.svg" alt="" />
                </div>
            </RouterLink>
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
            <img v-for="(image, index) in images" :key="index" :src="image.src" :class="image.style"
                :alt="image.alt || 'image'" draggable="true" :id="index" @dragstart="dragStartHandler($event, index)" />
        </div>
        <div id="bag">
            <img :class="$style.image21Icon" src="@/assets/images/equipment-items/backpack.png" alt=""
                @dragover.prevent="dragOverHandler" @dragleave="dragLeaveHandler" @drop.prevent="dropHandler" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { getImagesFromCookie } from '@/util/ImageUtil';
import BaseBottomBar from '@/views/components/BaseBottomBar.vue';
import { ref } from 'vue';
import type { RouterLink } from 'vue-router';

</script>

<style lang="css" scoped>
#items>img {
    position: relative;
    z-index: 2;
}

.image11Icon {
    position: absolute;
    top: 180px;
    left: 34px;
    width: 46px;
    height: 46px;
    object-fit: cover;
}

.image11Icon2 {
    position: absolute;
    top: 240px;
    left: 33px;
    width: 46px;
    height: 46px;
    object-fit: cover;
}

.image11Icon3 {
    position: absolute;
    top: 320px;
    left: 180px;
    width: 64px;
    height: 64px;
    object-fit: cover;
}

.image11Icon4 {
    position: absolute;
    top: 241px;
    left: 105px;
    width: 46px;
    height: 46px;
    object-fit: cover;
}

.image11Icon5 {
    position: absolute;
    top: 337px;
    left: -143px;
    width: 64px;
    height: 64px;
    object-fit: cover;
}

.image11Icon6 {
    position: absolute;
    top: 341px;
    left: 44px;
    width: 64px;
    height: 64px;
    object-fit: cover;
}

.image11Icon7 {
    position: absolute;
    top: 157px;
    left: -49px;
    width: 46px;
    height: 46px;
    object-fit: cover;
}
</style>

<style module>
div>#shelves {
    position: relative;
    z-index: 1;
}

.image21Icon {
    position: absolute;
    top: 476px;
    left: 55px;
    width: 281px;
    height: 281px;
    object-fit: cover;
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
</style>