<template>
    <div :class="$style.equipmentMiscellaneous">
        <div :class="$style.equipmentPlannerFoodInfo">
            <div :class="$style.component2">
                <img :class="$style.image1Icon" alt="" src="@/assets/images/equipment-items/moon.png" />
                <div :class="$style.textContentTitle">
                    <div :class="$style.title">18:00</div>
                </div>
            </div>
            <div :class="$style.component2">
                <img :class="$style.image1Icon" alt="" src="@/assets/images/equipment-items/mosquito.png" />
                <div :class="$style.textContentTitle2" />
            </div>
            <div :class="$style.component2">
                <img :class="$style.image1Icon" alt="" src="@/assets/images/equipment-items/flea.png" />
                <div :class="$style.textContentTitle2" />
            </div>
            <div :class="$style.component2">
                <img :class="$style.image1Icon" alt="" src="@/assets/images/equipment-items/radio.png" />
                <div :class="$style.textContentTitle4" />
            </div>
        </div>
        <div :class="$style.pageTitle">
            <div :class="$style.textContentTitle5">
                <b :class="$style.title2">Equipment</b>
            </div>
            <RouterLink to="/equipment/virtual-bag/">
                <div :class="$style.iconButton">
                    <img :class="$style.checkIcon" alt="" src="@/assets/images/menu-items/done.svg" />
                </div>
            </RouterLink>
        </div>
        <div :class="$style.toBringList">
            <div :class="$style.listItem" v-for="(image, index) in images" :key="index">
                <img v-if="!image.isClicked" 
                    :class="$style.equipmentCheckBoxIcon" 
                    alt=""
                    src="@/assets/images/checkbox.svg"
                    @click.self="toggleImage(image)" 
                />
                <img v-else 
                    :class="$style.equipmentCheckBoxCheckedIcon" 
                    alt=""
                    src="@/assets/images/checkbox-checked.png"
                    @click.self="toggleImage(image)" 
                />

                <div :class="$style.equipmentDescriptionAndIcon">
                    <div :class="$style.textContentTitle5">
                        <div :class="$style.title5" :key="image.name">{{ image.name }}</div>
                    </div>
                </div>
                <img :class="$style.image11Icon" alt="" :src="image.image" />
            </div>
        </div>
        <div :class="$style.bottombarWeather">
            <div :class="$style.component5Wrapper">
                <div :class="$style.component52">
                    <RouterLink to="/equipment/weather/">

                        <div :class="$style.textContentTitle14">
                            <div :class="$style.title">Weather</div>
                        </div>
                    </RouterLink>
                    <RouterLink to="/equipment/food/">
                        <div :class="$style.textContentTitle15">
                            <div :class="$style.title3">Food</div>
                        </div>
                    </RouterLink>
                    <RouterLink to="/equipment/misc/">
                        <div :class="$style.textContentTitle16">
                            <div :class="$style.title13">Misc</div>
                        </div>
                    </RouterLink>
                </div>
            </div>
            <div :class="$style.mynauimapSolidParent">
                <RouterLink to="/planning/">
                    <img :class="$style.mynauimapSolidIcon" alt="" src="@/assets/images/menu-items/planning.svg" />
                </RouterLink>
                <RouterLink to="/watching/">
                    <img :class="$style.mynauiflowerSolidIcon" alt="" src="@/assets/images/menu-items/watching.svg" />
                </RouterLink>
                <RouterLink to="/equipment/">
                    <img :class="$style.mynauishoppingBagSolidIcon" alt="" />
                </RouterLink>
                <RouterLink to="/bivouac/">
                    <img :class="$style.mynauilocationHomeSolidIcon" alt=""
                        src="@/assets/images/menu-items/bivouac.svg" />
                </RouterLink>
                <RouterLink to="/mates/">
                    <img :class="$style.mynauimapSolidIcon" alt="" src="@/assets/images/menu-items/mates.svg" />
                </RouterLink>
            </div>
            <img :class="$style.mynauishoppingBagSolidIcon2" alt="" src="@/assets/images/menu-items/equipment.svg" />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { addImageToCookie, getImagesFromCookie } from '@/util/ImageUtil';

const miscItems = [
    { name: "Torch", filename: "torchlight.png" },
    { name: "Whistle", filename: "whistle.png" },
    { name: "GPS", filename: "gps.png" },
    { name: "Compass", filename: "compass.png" },
    { name: "Watch", filename: "watch.png" },
    { name: "Bug repellent", filename: "bug-repellent.png" },
    { name: "Medkit", filename: "medkit.png" },
];

export default defineComponent({
    data() {
        return {
            images: [] as { name: string; image: string; isClicked: boolean }[]
        };
    },
    created() {
        const savedImages = getImagesFromCookie();
        this.images = miscItems.map((item) => {
            const fullPath = new URL(`../../../assets/images/equipment-items/${item.filename}`, import.meta.url).href;
            return {
                name: item.name,
                image: fullPath,
                isClicked: savedImages.includes(fullPath)
            };
        });
    },
    methods: {
        toggleImage(imageObj: any) {
            addImageToCookie(imageObj.image);
            imageObj.isClicked = !imageObj.isClicked;
        }
    }
});
</script>
<style module>
.equipmentCheckBoxCheckedIcon {
    height: 48px;
    width: 48px;
}

.equipmentMiscellaneous {
    width: 100%;
    height: 852px;
    position: relative;
    background-color: #ebffee;
    overflow: hidden;
    text-align: center;
    font-size: 16px;
    color: #000;
    font-family: Inter;
}

.equipmentPlannerFoodInfo {
    position: absolute;
    top: 119px;
    left: 0px;
    border-radius: 6px;
    background-color: #c4ecca;
    width: 393px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    box-sizing: border-box;
    gap: 27px;
    text-align: left;
    font-size: 14px;
    color: #020a0c;
}

.component2 {
    align-self: stretch;
    display: flex;
    align-items: center;
}

.image1Icon {
    align-self: stretch;
    width: 58px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
}

.textContentTitle {
    height: 58px;
    width: 39px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    box-sizing: border-box;
}

.title {
    position: relative;
    line-height: 140%;
}

.textContentTitle2 {
    height: 58px;
    width: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    box-sizing: border-box;
}

.textContentTitle4 {
    height: 58px;
    width: 0px;
    position: relative;
}

.pageTitle {
    position: absolute;
    top: 56px;
    left: calc(50% - 195.5px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 393px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
    gap: 10px;
    font-size: 36px;
}

.textContentTitle5 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
    z-index: 0;
}

.title2 {
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

.checkIcon {
    height: 20px;
    width: 20px;
    position: relative;
}

.toBringList {
    position: absolute;
    top: 197px;
    left: 0px;
    width: 394px;
    height: 614px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 7px;
}

.listItem {
    width: 394px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 27px;
}

.equipmentCheckBoxIcon {
    height: 64px;
    width: 64px;
}

.equipmentDescriptionAndIcon {
    height: 64px;
    width: 182px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.textContentTitle6 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
}

.title3 {
    position: relative;
    line-height: 140%;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.image11Icon {
    align-self: stretch;
    width: 64px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
}

.bottombarWeather {
    position: absolute;
    top: 686px;
    left: 9px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(4px);
    border-radius: 21px;
    width: 375px;
    height: 152px;
}

.component5Wrapper {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.component52 {
    align-self: stretch;
    height: 64px;
    position: relative;
}

.textContentTitle14 {
    position: absolute;
    top: 11px;
    left: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    cursor: pointer;
}

.textContentTitle15 {
    position: absolute;
    top: 11px;
    left: 149px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    cursor: pointer;
}

.textContentTitle16 {
    position: absolute;
    top: 11px;
    left: 227px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    cursor: pointer;
}

.title13 {
    position: relative;
    line-height: 140%;
    font-weight: 600;
}

.mynauimapSolidParent {
    position: absolute;
    height: 52.63%;
    width: 100%;
    top: 47.37%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.8);
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

.mynauishoppingBagSolidIcon {
    width: 64px;
    position: relative;
    border-radius: 18px;
    max-height: 100%;
    opacity: 0;
    cursor: pointer;
}

.mynauilocationHomeSolidIcon {
    height: 64px;
    width: 64px;
    position: relative;
    cursor: pointer;
}

.mynauishoppingBagSolidIcon2 {
    position: absolute;
    width: 17.07%;
    top: 54px;
    right: 41.33%;
    left: 41.6%;
    border-radius: 18px;
    max-width: 100%;
    overflow: hidden;
    height: 64px;
    cursor: pointer;
}
</style>