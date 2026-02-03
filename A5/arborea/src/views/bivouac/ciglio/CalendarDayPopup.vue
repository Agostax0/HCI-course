<template>
    <div :class="$style.productInfoCard" @click.self="$emit('closePopup')">
        <div :class="$style.body">
            <div :class="$style.text">
                <div :class="$style.text2">Plan to go?</div>
            </div>
            <div :class="$style.parent">
                <div :class="$style.div">⚫ ⚫ ⚫️</div>
                <div :class="$style.buttonParent">
                    <div :class="$style.button">
                        <div :class="$style.star" />
                        <div :class="$style.yes">Yes!</div>
                        <div :class="$style.star" />
                    </div>
                    <div :class="$style.button2">
                        <div :class="$style.star" />
                        <div :class="$style.yes">No.</div>
                        <div :class="$style.star" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
defineEmits(['closePopup'])
</script>
<style module>
.productInfoCard {
    height: 90px;
    position: relative;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #f5f5f5;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    min-width: 240px;
    text-align: left;
    font-size: 16px;
    color: #1e1e1e;
    font-family: Inter;
}

.body {
    width: 208px;
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

.parent {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    text-align: center;
    font-size: 24px;
}

.div {
    position: relative;
    letter-spacing: -0.02em;
    line-height: 120%;
    font-weight: 600;
    white-space: pre-wrap;
}

.buttonParent {
    height: 29px;
    width: 77px;
    position: relative;
    text-align: left;
    font-size: 16px;
    color: #f5f5f5;
}

.button {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 8px;
    background-color: #009951;
    width: 40px;
    height: 29px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    box-sizing: border-box;
    gap: 8px;
}

.star {
    height: 16px;
    width: 16px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    display: none;
}

.yes {
    position: relative;
    line-height: 100%;
    flex-shrink: 0;
}

.button2 {
    position: absolute;
    top: 0px;
    left: 43px;
    border-radius: 8px;
    background-color: #c00f0c;
    width: 34px;
    height: 29px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    box-sizing: border-box;
    gap: 8px;
}
</style>