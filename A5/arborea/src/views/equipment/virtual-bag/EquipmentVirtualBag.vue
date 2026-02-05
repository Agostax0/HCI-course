<script lang="ts">
import { getImages, getImagesFromCookie } from '@/util/ImageUtil';
interface ImageItem {
    src: string;
    style: string;
    visible: boolean;
    isFloating: boolean;
    targetX: number;
    targetY: number;
}


export default {
    data() {
        return {
            images: [] as ImageItem[],
            collectedCount: 0
        }
    },
    mounted() {
        const loadedImages = getImages();
        this.images = loadedImages.map(img => ({
            src: img.src,
            style: img.style,
            visible: true,
            isFloating: false,
            targetX: 0,
            targetY: 0
        }));
    },
    methods: {
        floatToBag(index: number, event: MouseEvent) {
            const item = this.images[index];
            if (!item.visible || item.isFloating) return;

            const bagElement = document.querySelector('#bag img') as HTMLElement;
            const itemElement = event.target as HTMLElement;

            if (!bagElement || !itemElement) return;

            const bagRect = bagElement.getBoundingClientRect();
            const itemRect = itemElement.getBoundingClientRect();

            // Calculate distance to bag center
            item.targetX = bagRect.left + bagRect.width / 2 - itemRect.left - itemRect.width / 2;
            item.targetY = bagRect.top + bagRect.height / 2 - itemRect.top - itemRect.height / 2;

            item.isFloating = true;

            // Remove item after animation completes
            setTimeout(() => {
                item.visible = false;
                this.collectedCount++;
            }, 1500);
        }
    }
}
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
            <img v-for="(image, index) in images" :key="index" v-show="image.visible" :src="image.src"
                :class="[$style.floatingItem, image.style]" :style="{
                    transform: image.isFloating ? `translate(${image.targetX}px, ${image.targetY}px)` : 'translate(0, 0)',
                    opacity: image.isFloating ? 0 : 1,
                    cursor: 'pointer',
                    transition: 'transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 2s ease-out',
                    pointerEvents: image.isFloating ? 'none' : 'auto'
                }" alt="" @click="floatToBag(index, $event)" />
        </div>
        <div id="bag">
            <img :class="$style.image21Icon" src="@/assets/images/equipment-items/backpack.png" alt="" />
            <!--<span v-if="collectedCount > 0" :class="$style.bagCounter" style="visibility:hidden">{{ collectedCount }}</span>-->
        </div>
    </div>
</template>
<script setup lang="ts">
import BaseBottomBar from '@/views/components/BaseBottomBar.vue';
</script>

<style lang="css" scoped>
.floatingItem {
    transition: transform 5.0s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 5.0s ease-out;
}

.floatingItem:hover {
    transform: scale(1.1) !important;
}

.bagCounter {
    position: absolute;
    top: -10px;
    right: -10px;
    background: #ff4444;
    color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 14px;
}

#bag {
    /*position: relative;*/
}

#items>img {
    position: relative !important;
    z-index: 2;
}

.image11Icon {
    position: absolute;
    top: 180px;
    left: 34px;
    width: 64px;
    height: 64px;
    object-fit: cover;
}

.image11Icon2 {
    position: absolute;
    top: 240px;
    left: 33px;
    width: 64px;
    height: 64px;
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
    width: 64px;
    height: 64px;
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
    width: 64px;
    height: 64px;
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
