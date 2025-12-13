<script setup lang="ts">
import type { RouterLink } from 'vue-router'

</script>

<template>
    <div :class="$style.hero2">
        <div :class="$style.textContentTitle">
            <b :class="$style.title">Arborea</b>
            <div :class="$style.subtitle">You are what you discover.</div>
        </div>
        <RouterLink to="/bivouac/">
            <div :class="$style.rectangleParent" >
                <div :class="$style.groupChild" />
                <div :class="$style.textContentHeading">
                    <div :class="$style.heading">Bivouac</div>
                    <div :class="$style.subheading">Look for bivacchi.</div>
                </div>
                <img :class="$style.mynauilocationHomeSolidIcon" src="@/assets/images/menu-items/bivouac.svg" alt="" @click="onGroupContainerClick" />
            </div>
        </RouterLink>
        <RouterLink to="/watching/">
            <div :class="$style.rectangleGroup" >
                <div :class="$style.textContentHeading">
                    <div :class="$style.heading">Watching</div>
                    <div :class="$style.subheading">Nature with you.</div>
                </div>
                <img :class="$style.mynauiflowerSolidIcon" src="@/assets/images/menu-items/watching.svg" alt="" />
            </div>
        </RouterLink>
        <div :class="$style.groupChild" />
        <RouterLink to="/planning/">
            <div :class="$style.rectangleContainer">
                <div :class="$style.groupChild" />
                <div :class="$style.textContentHeading">
                    <div :class="$style.heading">Planning</div>
                    <div :class="$style.subheading">Plan you trek.</div>
                </div>
                <img :class="$style.mynauimapSolidIcon" src="@/assets/images/menu-items/planning.svg"alt="" />
            </div>
        </RouterLink>
        <RouterLink to="/equipment/">
            <div :class="$style.groupDiv" >
                <div :class="$style.groupChild" />
                <div :class="$style.textContentHeading4">
                    <div :class="$style.heading">Equipment</div>
                    <div :class="$style.subheading">Ready to start.</div>
                </div>
                <img :class="$style.mynauishoppingBagSolidIcon" src="@/assets/images/menu-items/equipment.svg" alt=""
                 />
            </div>
        </RouterLink>
        <RouterLink to="/mates/">
            <div :class="$style.groupParent">
                <div :class="$style.rectangleWrapper">
                    <div :class="$style.groupChild" />
                </div>
                <div :class="$style.textContentHeading5">
                    <div :class="$style.heading">Mates</div>
                    <div :class="$style.subheading">Let mates help you.</div>
                </div>
                <img :class="$style.mynauimapSolidIcon" src="@/assets/images/menu-items/mates.svg" alt="" />
            </div>
        </RouterLink>
    </div>
</template>

<style module>

div.heading {
    color: black !important;
    text-decoration: none !important;
    accent-color: black !important;
}

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

.mynauilocationHomeSolidIcon {
    position: absolute;
    top: 15px;
    left: 20px;
    width: 64px;
    height: 64px;
    cursor: pointer;
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

.mynauiflowerSolidIcon {
    position: absolute;
    top: 15px;
    left: 20px;
    width: 64px;
    height: 64px;
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

.mynauimapSolidIcon {
    position: absolute;
    top: 13px;
    left: 24px;
    width: 64px;
    height: 64px;
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

.mynauishoppingBagSolidIcon {
    position: absolute;
    top: 13px;
    left: 20px;
    width: 64px;
    height: 64px;
    cursor: pointer;
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
</style>