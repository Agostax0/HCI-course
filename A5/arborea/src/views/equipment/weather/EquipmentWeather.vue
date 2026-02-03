<template>
    <div :class="$style.equipmentWeather">
        <div :class="$style.equipmentPlannerWeatherInfo">
            <div :class="$style.component2">
                <img :class="$style.image1Icon" alt="" src="@/assets/images/equipment-items/thermometer.svg" />
                <div :class="$style.textContentTitle">
                    <div :class="$style.title">-10°C</div>
                </div>
            </div>
            <div :class="$style.component3">
                <img :class="$style.image1Icon" alt="" src="@/assets/images/equipment-items/rainyCloud.svg" />
                <div :class="$style.textContentTitle2">
                    <div :class="$style.title">70%</div>
                </div>
            </div>
            <div :class="$style.component3">
                <img :class="$style.image1Icon" alt="" src="@/assets/images/equipment-items/wind.svg" />
                <div :class="$style.textContentTitle3">
                    <div :class="$style.title">2kt</div>
                </div>
            </div>
        </div>
        <div :class="$style.pageTitle">
            <div :class="$style.textContentTitle4">
                <b :class="$style.title4">Equipment</b>
            </div>
            <RouterLink to="/equipment/food/">
                <div :class="$style.iconButton">
                    <img :class="$style.arrowRightIcon" alt="" src="@/assets/images/right-arrow.svg" />
                </div>
            </RouterLink>
        </div>
        <div :class="$style.toBringList">
            <!--<div :class="$style.listItem">
                <img :class="$style.equipmentCheckBoxIcon" alt="" src="@/assets/images/checkbox.svg" />
                <div :class="$style.equipmentDescriptionAndIcon">
                    <div :class="$style.textContentTitle5">
                        <div :class="$style.title5">Umbrella</div>
                    </div>
                </div>
                <img :class="$style.image11Icon" alt="" src="@/assets/images/equipment-items/umbrella.svg" />
            </div>
            <div :class="$style.listItem">
                <img :class="$style.equipmentCheckBoxIcon" alt="" />
                <div :class="$style.equipmentDescriptionAndIcon">
                    <div :class="$style.textContentTitle5">
                        <div :class="$style.title5">Strawhat</div>
                    </div>
                </div>
                <img :class="$style.image11Icon" alt="" src="@/assets/images/equipment-items/strawhat.svg" />
            </div>
            <div :class="$style.listItem">
                <img :class="$style.equipmentCheckBoxIcon" alt="" />
                <div :class="$style.equipmentDescriptionAndIcon">
                    <div :class="$style.textContentTitle5">
                        <div :class="$style.title5">Raincoat</div>
                    </div>
                </div>
                <img :class="$style.image11Icon" alt="" src="@/assets/images/equipment-items/umbrella.svg" />
            </div>
            <div :class="$style.listItem">
                <img :class="$style.equipmentCheckBoxIcon" alt="" />
                <div :class="$style.equipmentDescriptionAndIcon">
                    <div :class="$style.textContentTitle5">
                        <div :class="$style.title5">Gloves</div>
                    </div>
                </div>
                <img :class="$style.image11Icon" alt="" />
            </div>
            <div :class="$style.listItem">
                <img :class="$style.equipmentCheckBoxIcon" alt="" />
                <div :class="$style.equipmentDescriptionAndIcon">
                    <div :class="$style.textContentTitle5">
                        <div :class="$style.title5">Snow goggles</div>
                    </div>
                </div>
                <img :class="$style.image11Icon" alt="" />
            </div>
            <div :class="$style.listItem">
                <img :class="$style.equipmentCheckBoxIcon" alt="" />
                <div :class="$style.equipmentDescriptionAndIcon">
                    <div :class="$style.textContentTitle5">
                        <div :class="$style.title5">SPF cream</div>
                    </div>
                </div>
                <img :class="$style.image11Icon" alt="" />
            </div>
            <div :class="$style.listItem">
                <img :class="$style.equipmentCheckBoxIcon" alt="" />
                <div :class="$style.equipmentDescriptionAndIcon">
                    <div :class="$style.textContentTitle5">
                        <div :class="$style.title5">Walking cane</div>
                    </div>
                </div>
                <img :class="$style.image11Icon" alt="" />
            </div>
            <div :class="$style.listItem">
                <img :class="$style.equipmentCheckBoxIcon" alt="" />
                <div :class="$style.equipmentDescriptionAndIcon">
                    <div :class="$style.textContentTitle5">
                        <div :class="$style.title5">Snow shoes</div>
                    </div>
                </div>
                <img :class="$style.image11Icon" alt="" />
            </div>-->
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
                <div :class="$style.component5">
                    <RouterLink to="/equipment/weather/">
                        <div :class="$style.textContentTitle13">
                            <div :class="$style.title13">Weather</div>
                        </div>
                    </RouterLink>
                    <RouterLink to="/equipment/food/">
                        <div :class="$style.textContentTitle14">
                            <div :class="$style.title">Food</div>
                        </div>
                    </RouterLink>
                    <RouterLink to="/equipment/misc/">
                        <div :class="$style.textContentTitle15">
                            <div :class="$style.title">Misc</div>
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
<script setup lang="ts">
import { addImageToCookie } from '@/util/ImageUtil';
</script>
<script lang="ts">

const toExport:
    {
        name: string;
        image: string;
        isClicked: boolean;
    }[] = [
        { isClicked: false, name: "Umbrella", image: "umbrella.svg" },
        { isClicked: false, name: "Strawhat", image: "strawhat.svg" },
        { isClicked: false, name: "Raincoat", image: "raincoat.svg" },
        { isClicked: false, name: "Gloves", image: "gloves.svg" },
        { isClicked: false, name: "Snow Goggles", image: "snowGoggles.svg" },
        { isClicked: false, name: "SPF Cream", image: "spfCream.svg" },
        { isClicked: false, name: "Walking Cane", image: "walkingCane.svg" },
        { isClicked: false, name: "Snow Shoes", image: "snowShoes.svg" },
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
.equipmentWeather {
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

.equipmentPlannerWeatherInfo {
    position: absolute;
    top: 120px;
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
}

.component2 {
    align-self: stretch;
    display: flex;
    align-items: center;
    color: #020a0c;
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
    margin-left: -14px;
    position: relative;
}

.title {
    position: relative;
    line-height: 140%;
}

.component3 {
    align-self: stretch;
    display: flex;
    align-items: center;
}

.textContentTitle2 {
    height: 58px;
    width: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    box-sizing: border-box;
    margin-left: -5px;
    position: relative;
}

.textContentTitle3 {
    height: 58px;
    width: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    box-sizing: border-box;
}

.pageTitle {
    position: absolute;
    top: 57px;
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

.textContentTitle4 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
    z-index: 0;
}

.title4 {
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

.arrowRightIcon {
    height: 20px;
    width: 20px;
    position: relative;
}

.toBringList {
    position: absolute;
    top: 198px;
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

.equipmentCheckBoxCheckedIcon {
    height: 48px;
    width: 48px;
}

.equipmentDescriptionAndIcon {
    height: 64px;
    width: 182px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.textContentTitle5 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
}

.title5 {
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

.component5 {
    align-self: stretch;
    height: 64px;
    position: relative;
}

.textContentTitle13 {
    position: absolute;
    top: 11px;
    left: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
}

.title13 {
    position: relative;
    line-height: 140%;
    font-weight: 600;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.textContentTitle14 {
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

.textContentTitle15 {
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