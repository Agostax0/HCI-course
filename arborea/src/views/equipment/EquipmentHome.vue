<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
import BaseBottomBar from "@/views/components/BaseBottomBar.vue";

const router = useRouter();

</script>
<template>
    <div :class="$style.equipmentHome">
        <div :class="$style.pageTitleParent">
            <div :class="$style.pageTitle">
                <div :class="$style.textContentTitle">
                    <b :class="$style.title">Equipment</b>
                </div>
            </div>
            <div :class="$style.productInfoCard">
                <img :class="$style.imageIcon" src="@/assets/bivacco-ciglio.png" alt="" />
                <div :class="$style.body">
                    <div :class="$style.text">
                        <div :class="$style.text2">Bivacco “Ciglio”</div>
                    </div>
                    <div :class="$style.imageFcuczibomwyfiephpsaknmvdParent">
                        <img :class="$style.imageFcuczibomwyfiephpsaknmvdIcon" src="@/assets/bed.png" alt="" />
                        <div :class="$style.textStrong">
                            <div :class="$style.textStrong2">4</div>
                        </div>
                        <img :class="$style.imageFcuczibomwyfiephpsaknmvdIcon" src="@/assets/firepit.png" alt="" />
                        <div :class="$style.textStrong">
                            <div :class="$style.textStrong2">1</div>
                        </div>
                        <img :class="$style.imageFcuczibomwyfiephpsaknmvdIcon" src="@/assets/mountain.png" alt="" />
                        <div :class="$style.textStrong">
                            <div :class="$style.textStrong2">800mt</div>
                        </div>
                    </div>
                </div>
                <RouterLink to="/equipment/weather/">    
                    <div :class="$style.component6">
                        <div :class="$style.component6Child" />
                        
                        <img :class="$style.image22Icon" src="@/assets/images/equipment-items/backpack.png"/>
                    </div>
                </RouterLink>
            </div>
        </div>
       <div :class="$style.mynauimapSolidParent">
            <BaseBottomBar />
        </div>
    </div>
</template>

<style module>
.equipmentHome {
    width: 100%;
    position: relative;
    border-radius: 50px;
    background-color: #ebffee;
    border: 1px solid #000;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0px 13px;
    gap: 394px;
    text-align: left;
    font-size: 36px;
    color: #000;
    font-family: Inter;
}

.pageTitleParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.pageTitle {
    align-self: stretch;
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);*/
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    position: relative;
    letter-spacing: -0.02em;
    line-height: 120%;
}

.productInfoCard {
    width: 341px;
    height: 245px;
    position: relative;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    font-size: 16px;
    color: #1e1e1e;
}

.imageIcon {
    position: absolute;
    top: 16px;
    left: 16px;
    width: 309px;
    height: 137px;
    object-fit: cover;
}

.body {
    position: absolute;
    top: 168px;
    left: 16px;
    width: 201px;
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

.imageFcuczibomwyfiephpsaknmvdParent {
    align-self: stretch;
    display: flex;
    align-items: center;
    gap: 5px;
}

.imageFcuczibomwyfiephpsaknmvdIcon {
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

.component6 {
    position: absolute;
    top: 175px;
    left: 275px;
    width: 50px;
    height: 50px;
}

.component6Child {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    border-radius: 11px;
    background-color: #f3f3f3;
}

.image22Icon {
    position: absolute;
    width: 90%;
    top: 3px;
    right: 6%;
    left: 4%;
    max-width: 100%;
    overflow: hidden;
    height: 45px;
    object-fit: cover;
    cursor: pointer;
}

.mynauimapSolidParent {
    width: 375px;
    height: 80px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(4px);
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
</style>