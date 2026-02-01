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
                <img :class="$style.image1Icon" alt="" src="@/assets/images/equipment-items/radio.png"/>
                <div :class="$style.textContentTitle4" />
            </div>
        </div>
        <div :class="$style.pageTitle">
            <div :class="$style.textContentTitle5">
                <b :class="$style.title2">Equipment</b>
            </div>
            <RouterLink to="/equipment/virtual-bag/">
            <div :class="$style.iconButton">
                <img :class="$style.checkIcon" alt="" src="@/assets/images/menu-items/done.png"/>
            </div>
            </RouterLink>
        </div>
        <div :class="$style.toBringList">
            <!--<div :class="$style.listItem">
                <img :class="$style.equipmentCheckBoxIcon" alt="" />
                <div :class="$style.equipmentDescriptionAndIcon">
                    <div :class="$style.textContentTitle6">
                        <div :class="$style.title3">Torch</div>
                    </div>
                </div>
                <img :class="$style.image11Icon" alt="" />
            </div>
            <div :class="$style.listItem">
                <img :class="$style.equipmentCheckBoxIcon" alt="" />
                <div :class="$style.equipmentDescriptionAndIcon">
                    <div :class="$style.textContentTitle6">
                        <div :class="$style.title3">Whistle</div>
                    </div>
                </div>
                <img :class="$style.image11Icon" alt="" />
            </div>
            <div :class="$style.listItem">
                <img :class="$style.equipmentCheckBoxIcon" alt="" />
                <div :class="$style.equipmentDescriptionAndIcon">
                    <div :class="$style.textContentTitle6">
                        <div :class="$style.title3">GPS</div>
                    </div>
                </div>
                <img :class="$style.image11Icon" alt="" />
            </div>
            <div :class="$style.listItem">
                <img :class="$style.equipmentCheckBoxIcon" alt="" />
                <div :class="$style.equipmentDescriptionAndIcon">
                    <div :class="$style.textContentTitle6">
                        <div :class="$style.title3">Compass</div>
                    </div>
                </div>
                <img :class="$style.image11Icon" alt="" />
            </div>
            <div :class="$style.listItem">
                <img :class="$style.equipmentCheckBoxIcon" alt="" />
                <div :class="$style.equipmentDescriptionAndIcon">
                    <div :class="$style.textContentTitle6">
                        <div :class="$style.title3">Watch</div>
                    </div>
                </div>
                <img :class="$style.image11Icon" alt="" />
            </div>
            <div :class="$style.listItem">
                <img :class="$style.equipmentCheckBoxIcon" alt="" />
                <div :class="$style.equipmentDescriptionAndIcon">
                    <div :class="$style.textContentTitle6">
                        <div :class="$style.title3">Bug repellent</div>
                    </div>
                </div>
                <img :class="$style.image11Icon" alt="" />
            </div>
            <div :class="$style.listItem">
                <img :class="$style.equipmentCheckBoxIcon" alt="" />
                <div :class="$style.equipmentDescriptionAndIcon">
                    <div :class="$style.textContentTitle6">
                        <div :class="$style.title3">Medkit</div>
                    </div>
                </div>
                <img :class="$style.image11Icon" alt="" />
            </div>
            <div :class="$style.listItem">
                <img :class="$style.equipmentCheckBoxIcon" alt="" />
                <div :class="$style.equipmentDescriptionAndIcon">
                    <div :class="$style.textContentTitle6">
                        <div :class="$style.title3">Pager</div>
                    </div>
                </div>
                <img :class="$style.image11Icon" alt="" />
            </div>
            -->
            <div :class="$style.listItem" v-for="(image, index) in images" :key="index">
                <img v-if="!image.isClicked" :class="$style.equipmentCheckBoxIcon" alt=""
                    src="@/assets/images/checkbox.svg"
                    @click.self="addImageToCookie(image.image); image.isClicked = !image.isClicked" />
                <img v-else :class="$style.equipmentCheckBoxCheckedIcon" alt=""
                    src="@/assets/images/checkbox-checked.png"
                    @click.self="addImageToCookie(image.image); image.isClicked = !image.isClicked" />

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

                    <div :class="$style.textContentTitle14" >
                        <div :class="$style.title">Weather</div>
                    </div>
                    </RouterLink>
                    <RouterLink to="/equipment/food/">
                    <div :class="$style.textContentTitle15" >
                        <div :class="$style.title3">Food</div>
                    </div>
                    </RouterLink>
                    <RouterLink to="/equipment/misc/">
                    <div :class="$style.textContentTitle16" >
                        <div :class="$style.title13">Misc</div>
                    </div>
                    </RouterLink>
                </div>
            </div>
            <div :class="$style.mynauimapSolidParent">
                <img :class="$style.mynauimapSolidIcon" alt="" src="@/assets/images/menu-items/planning.svg" />
                <img :class="$style.mynauiflowerSolidIcon" alt="" src="@/assets/images/menu-items/watching.svg" />
                <img :class="$style.mynauishoppingBagSolidIcon" alt="" />
                <img :class="$style.mynauilocationHomeSolidIcon" alt="" src="@/assets/images/menu-items/bivouac.svg" />
                <img :class="$style.mynauimapSolidIcon" alt="" src="@/assets/images/menu-items/mates.svg" />
            </div>
            <img :class="$style.mynauishoppingBagSolidIcon2" alt="" src="@/assets/images/menu-items/equipment.svg" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { addImageToCookie } from '@/util/ImageUtil';
console.log("setup");
</script>
<script lang="ts">
console.log("script");

const toExport:
    {
        name: string;
        image: string;
        isClicked: boolean;
    }[] = [
        { isClicked: false, name: "Torch", image: "torchlight.png" },
        { isClicked: false, name: "Whistle", image: "whistle.png" },
        { isClicked: false, name: "GPS", image: "gps.png" },
        { isClicked: false, name: "Compass", image: "compass.png" },
        { isClicked: false, name: "Watch", image: "watch.png" },
        { isClicked: false, name: "Bug repellent", image: "bug-repellent.png" },
        { isClicked: false, name: "Medkit", image: "medkit.png" },
    ].map((a) => {
        return { isClicked: false, name: a.name, image: new URL('@', import.meta.url).href + "/assets/images/equipment-items/" + a.image };
    });



export default {
    data() {
        return {
            images: toExport
        }
    }
}

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