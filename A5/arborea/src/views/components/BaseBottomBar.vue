<style scoped>
.iconParent {
    width: 100%;
    height: 80px;
    position: relative;
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
    cursor: pointer;
}

.mynauilocationHomeSolidIcon {
    height: 64px;
    width: 64px;
    position: relative;
    cursor: pointer;
}
</style>
<template>
    <div class="iconParent">
        <RouterLink to="/planning/">
            <img class="mynauimapSolidIcon" src="@/assets/images/menu-items/planning.svg" alt="" />
        </RouterLink>
        <RouterLink to="/watching/">
            <img class="mynauimapSolidIcon" src="@/assets/images/menu-items/watching.svg" alt="" />
        </RouterLink>
        <RouterLink to="/equipment/">
            <img class="mynauimapSolidIcon" src="@/assets/images/menu-items/equipment.svg" alt="" />
        </RouterLink>
        <RouterLink to="/bivouac/">
            <img class="mynauilocationHomeSolidIcon" src="@/assets/images/menu-items/bivouac.svg" alt="" />
        </RouterLink>
        <RouterLink to="/mates/">
            <img class="mynauimapSolidIcon" src="@/assets/images/menu-items/mates.svg" alt="" />
        </RouterLink>
    </div>
</template>
<script setup lang="ts">
import type { RouterLink } from 'vue-router';

</script>