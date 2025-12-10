<template>
    <div :class="$style.hero2">
        <div :class="$style.textContentTitle">
            <b :class="$style.title">Arborea</b>
            <div :class="$style.subtitle">You are what you discover.</div>
        </div>
        <div :class="$style.rectangleParent" @click="onGroupContainerClick">
            <div :class="$style.groupChild" />
            <div :class="$style.textContentHeading">
                <div :class="$style.heading">Bivouac</div>
                <div :class="$style.subheading">Look for bivacchi.</div>
            </div>
        </div>
        <div :class="$style.rectangleGroup" @click="onGroupContainerClick">
            <div :class="$style.groupChild" />
            <div :class="$style.textContentHeading">
                <div :class="$style.heading">Watching</div>
                <div :class="$style.subheading">Nature with you.</div>
            </div>
        </div>
        <div :class="$style.rectangleContainer">
            <div :class="$style.groupChild" />
            <div :class="$style.textContentHeading">
                <div :class="$style.heading">Planning</div>
                <div :class="$style.subheading">Plan you trek.</div>
            </div>
        </div>
        <div :class="$style.groupDiv" @click="onGroupContainerClick">
            <div :class="$style.groupChild" />
            <div :class="$style.textContentHeading4">
                <div :class="$style.heading">Equipment</div>
                <div :class="$style.subheading">Ready to start.</div>
            </div>
        </div>
        <div :class="$style.groupParent">
            <div :class="$style.rectangleWrapper">
                <div :class="$style.groupChild" />
            </div>
            <div :class="$style.textContentHeading5">
                <div :class="$style.heading">Mates</div>
                <div :class="$style.subheading">Let mates help you.</div>
            </div>
        </div>
        <img :class="$style.mynauilocationHomeSolidIcon" src="../assets/images/bivacco.svg" alt=""
            @click="onGroupContainerClick" />
        <img :class="$style.mynauiflowerSolidIcon" src="../assets/images/flower.svg" alt="" />
        <img :class="$style.mynauishoppingBagSolidIcon" src="../assets/images/map.svg" alt=""
            @click="onGroupContainerClick" />
        <img :class="$style.mynauifaceIdSolidIcon" src="../assets/images/avatar.svg" alt="" />
        <img :class="$style.mynauimapSolidIcon" src="../assets/images/map.svg" alt="" />
    </div>
</template>
<script setup lang="ts">


function onGroupContainerClick() {
    // Add your code here
}</script>
<style module>
.hero2 {
    width: 100%;
    height: 852px;
    position: relative;
    border-radius: 50px;
    background-color: #ebffee;
    border: 1px solid #000;
    box-sizing: border-box;
    overflow: hidden;
    text-align: left;
    font-size: 24px;
    color: #1e1e1e;
    font-family: Inter;
}

.textContentTitle {
    position: absolute;
    top: 69px;
    left: 27px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 48px;
    background-color: rgba(255, 255, 255, 0.6);
    width: 339px;
    height: 218px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    box-sizing: border-box;
    gap: 8px;
    font-size: 72px;
}

.title {
    align-self: stretch;
    position: relative;
    letter-spacing: -0.03em;
    line-height: 120%;
}

.subtitle {
    align-self: stretch;
    position: relative;
    font-size: 32px;
    line-height: 120%;
    color: #757575;
}

.rectangleParent {
    position: absolute;
    top: 300px;
    left: 27px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 339px;
    height: 90px;
    cursor: pointer;
    backdrop-filter: blur(4px);
    border-radius: 48px;
    background-color: rgba(255, 255, 255, 0.6);
}

.groupChild {
    position: absolute;
    top: 0px;
    left: 0px;
    backdrop-filter: blur(4px);
    border-radius: 48px;
    background-color: rgba(255, 255, 255, 0.6);
    width: 339px;
    height: 90px;
}

.textContentHeading {
    position: absolute;
    top: 14px;
    left: 125px;
    border-radius: 48px;
    width: 189px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
}

.heading {
    align-self: stretch;
    position: relative;
    letter-spacing: -0.02em;
    line-height: 120%;
    font-weight: 600;
}

.subheading {
    align-self: stretch;
    position: relative;
    font-size: 20px;
    line-height: 120%;
    color: #757575;
}

.rectangleGroup {
    position: absolute;
    top: 403px;
    left: 27px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 339px;
    height: 90px;
    cursor: pointer;
    backdrop-filter: blur(4px);
    border-radius: 48px;
    background-color: rgba(255, 255, 255, 0.6);
}

.rectangleContainer {
    position: absolute;
    top: 506px;
    left: 27px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 339px;
    height: 90px;
    backdrop-filter: blur(4px);
    border-radius: 48px;
    background-color: rgba(255, 255, 255, 0.6);
}

.groupDiv {
    position: absolute;
    top: 609px;
    left: 27px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 339px;
    height: 90px;
    cursor: pointer;
    backdrop-filter: blur(4px);
    border-radius: 48px;
    background-color: rgba(255, 255, 255, 0.6);
}

.textContentHeading4 {
    position: absolute;
    top: 15px;
    left: 125px;
    border-radius: 48px;
    width: 214px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
}

.groupParent {
    position: absolute;
    top: 712px;
    left: 27px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 339px;
    height: 90px;
    backdrop-filter: blur(4px);
    border-radius: 48px;
    background-color: rgba(255, 255, 255, 0.6);
}

.rectangleWrapper {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 339px;
    height: 90px;
}

.textContentHeading5 {
    position: absolute;
    top: 14px;
    left: 125px;
    border-radius: 48px;
    width: 214px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
}

.mynauilocationHomeSolidIcon {
    position: absolute;
    top: 319px;
    left: 47px;
    width: 64px;
    height: 64px;
    cursor: pointer;
}

.mynauiflowerSolidIcon {
    position: absolute;
    top: 414px;
    left: 47px;
    width: 64px;
    height: 64px;
}

.mynauishoppingBagSolidIcon {
    position: absolute;
    top: 622px;
    left: 47px;
    width: 64px;
    height: 64px;
    cursor: pointer;
}

.mynauifaceIdSolidIcon {
    position: absolute;
    top: 725px;
    left: 51px;
    width: 64px;
    height: 64px;
}

.mynauimapSolidIcon {
    position: absolute;
    top: 519px;
    left: 51px;
    width: 64px;
    height: 64px;
}
</style>