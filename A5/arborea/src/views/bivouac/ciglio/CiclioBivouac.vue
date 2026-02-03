<template>
    <div :class="$style.bivouac3">
        <div :class="$style.pageTitle">
            <div :class="$style.textContentTitle">
                <b :class="$style.title">Bivacco “Ciglio”</b>
            </div>
        </div>
        <img :class="$style.mountainHouseIcon" alt="" src="@/assets/mountain-house-icon.png" />
        <div :class="$style.body">
            <div :class="$style.frameParent">
                <div :class="$style.bedParent">
                    <img :class="$style.bedIcon" alt="" src="@/assets/bed.png" />
                    <div :class="$style.textStrong">
                        <div :class="$style.textStrong2">4</div>
                    </div>
                </div>
                <div :class="$style.bedParent">
                    <img :class="$style.bedIcon" alt="" src="@/assets/firepit.png" />
                    <div :class="$style.textStrong">
                        <div :class="$style.textStrong2">1</div>
                    </div>
                </div>
                <div :class="$style.bedParent">
                    <img :class="$style.bedIcon" alt="" src="@/assets/mountain.png"/>
                    <div :class="$style.textStrong">
                        <div :class="$style.textStrong2">800mt</div>
                    </div>
                </div>
            </div>
            <div :class="$style.textSmall">
                <div :class="$style.textSmall2">Lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum. Lorem ipsum lorem
                    ipsum. </div>
            </div>
        </div>
        <div :class="$style.textSmall3">
            <div :class="$style.textSmall2">Lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum.
                Lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum.
                Lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum.
                Lorem ipsum lorem ipsum. </div>
        </div>
        <div :class="$style.textHeading">
            <div :class="$style.textHeading2">History</div>
        </div>
        <div :class="$style.textHeading3">
            <div :class="$style.textHeading2">Images</div>
        </div>
        <div :class="$style.image4Parent">
            <img :class="$style.image4Icon" alt="" src="@/assets/bivacco-ciglio.png" />
            <img :class="$style.image7Icon" alt="" src="@/assets/bivacco-ciglio.png" />
            <img :class="$style.image8Icon" alt="" src="@/assets/bivacco-ciglio.png" />
            <img :class="$style.image9Icon" alt="" src="@/assets/bivacco-ciglio.png" />
        </div>

        <div :class="$style.textHeading4">
            <div :class="$style.textHeading2">Calendar</div>
        </div>

        <div :class="$style.calendarMenu" @click="showPopupListener">
            <CalendarMenu />
        </div>

        <CalendarDayPopup :class="$style.calendarMenuPopup" v-if="showPopup" @click="showPopupListener"/>

        <div :class="$style.mynauimapSolidParent">
            <BaseBottomBar />
        </div>
    </div>
</template>
<script setup lang="ts">
import BaseBottomBar from '@/views/components/BaseBottomBar.vue';
import CalendarMenu from './CalendarMenu.vue';
import CalendarDayPopup from './CalendarDayPopup.vue';
import {ref} from 'vue'

const showPopup = ref(false)

function showPopupListener() {
	showPopup.value = !showPopup.value
}

</script>
<style module>
.bivouac3 {
    width: 100%;
    height: 852px;
    position: relative;
    background-color: #ebffee;
    overflow: hidden;
    cursor: pointer;
    text-align: left;
    font-size: 24px;
    color: #1e1e1e;
    font-family: Inter;

    display: flex;
    flex-direction: column;
    overflow-y: scroll;
}


.pageTitle {
    position: absolute;

    top: 0px;
    left: 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #EAFFED;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    font-size: 36px;
    color: #000;

    position: sticky;
    top: 0;
    z-index: 100;

    text-shadow: 0px 4px 4px gray;

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
    height: 84px;
    position: relative;
    letter-spacing: -0.02em;
    line-height: 120%;
    display: flex;
    align-items: flex-end;
    flex-shrink: 0;
}

.mountainHouseIcon {
    position: absolute;
    top: 137px;
    left: 20px;
    width: 169px;
    height: 169px;
    object-fit: cover;
    flex-shrink: 0;
}

.body {
    position: absolute;
    top: 137px;
    left: 197px;
    width: 158px;
    height: 169px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    flex-shrink: 0;
    font-size: 16px;
}

.frameParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5px;
    flex-shrink: 0;
}

.bedParent {
    display: flex;
    align-items: flex-start;
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
    height: 71px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    font-size: 13px;
    color: #757575;
}

.textSmall2 {
    align-self: stretch;
    flex: 1;
    position: relative;
    line-height: 140%;
}

.textSmall3 {
    position: absolute;
    top: 383px;
    left: 26px;
    width: 335px;
    height: 116px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    font-size: 13px;
    color: #757575;
}

.textHeading {
    position: absolute;
    top: 345px;
    left: 26px;
    display: flex;
    align-items: flex-start;
    flex-shrink: 0;
}

.textHeading2 {
    position: relative;
    letter-spacing: -0.02em;
    line-height: 120%;
    font-weight: 600;
}

.textHeading3 {
    position: absolute;
    top: 516px;
    left: 26px;
    display: flex;
    align-items: flex-start;
    flex-shrink: 0;
}

.image4Parent {
    width: 100%;
    height: 233px;
    position: relative;
    display: grid;
    justify-content: start;
    align-content: center;
    gap: 0px;
}

.image4Icon {
    width: 50%;
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 24px 0px 0px 0px;
    max-width: 100%;
    overflow: hidden;
    height: 116.6px;
    object-fit: cover;
}

.image7Icon {
    width: 50%;
    position: absolute;
    top: 0px;
    left: 176px;
    border-radius: 0px 24px 0px 0px;
    max-width: 100%;
    overflow: hidden;
    height: 116.6px;
    object-fit: cover;
    left: 165px;

}

.image8Icon {
    width: 50%;
    position: absolute;
    top: 116.5px;
    left: 0px;
    border-radius: 0px 0px 0px 24px;
    max-width: 100%;
    overflow: hidden;
    height: 116.6px;
    object-fit: cover;
    top: 109px;
    left: 0px;
    height: 109.3px;
    object-fit: cover;
}

.image9Icon {
    width: 50%;
    position: absolute;
    top: 116.5px;
    left: 176px;
    border-radius: 0px 0px 24px 0px;
    max-width: 100%;
    overflow: hidden;
    height: 116.6px;
    object-fit: cover;
    position: absolute;
    top: 109px;
    left: 165px;
    max-width: 100%;
    overflow: hidden;
    height: 109.3px;
    object-fit: cover;
}

.image4Parent {
    position: absolute;
    top: 551px;
    left: 25px;
    border-radius: 48px;
    width: 330px;
    height: 436px;
    display: grid;
    justify-content: start;
    align-content: start;
    gap: 0px;
    flex-shrink: 0;
}

.textHeading4 {
    position: absolute;
    top: 800px;
    left: 26px;
    display: flex;
    align-items: flex-start;
    flex-shrink: 0;
}

.calendarMenu {
    position: absolute;
    top: 835px;
    left: 26px;


    padding-bottom: 100px;
    margin-bottom: 100px;

}

.calendarMenuPopup {
    position: absolute;
    top: 864px;
    left: 96px;
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
    flex-shrink: 0;


    position: sticky;
    bottom: 0;
    z-index: 100;
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
</style>