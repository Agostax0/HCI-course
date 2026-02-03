<template>
    <div :class="$style.calendar">
        <div :class="$style.block">
            <div :class="$style.iconButton">
                <img :class="$style.chevronLeftIcon" src="@/assets/images/chevron-left.svg" alt="" />
            </div>
            <div :class="$style.calendarSelectGroup">
                <div :class="$style.calendarMonthField">
                    <div :class="$style.select">
                        <div :class="$style.september">Sep</div>
                        <img :class="$style.chevronDownIcon" src="@/assets/images/chevron-down.svg" alt="" />
                    </div>
                </div>
                <div :class="$style.calendarYearField">
                    <div :class="$style.select">
                        <div :class="$style.september">2025</div>
                        <img :class="$style.chevronDownIcon" src="@/assets/images/chevron-down.svg" alt="" />
                    </div>
                </div>
            </div>
            <div :class="$style.iconButton">
                <img :class="$style.chevronLeftIcon" src="@/assets/images/chevron-right.svg" alt="" />
            </div>
        </div>
        <div :class="$style.table">
            <div :class="$style.thead">
                <div :class="$style.td">
                    <div :class="$style.dayPicker">Su</div>
                </div>
                <div :class="$style.td">
                    <div :class="$style.dayPicker">Mo</div>
                </div>
                <div :class="$style.td">
                    <div :class="$style.dayPicker">Tu</div>
                </div>
                <div :class="$style.td">
                    <div :class="$style.dayPicker">We</div>
                </div>
                <div :class="$style.td">
                    <div :class="$style.dayPicker">Th</div>
                </div>
                <div :class="$style.td">
                    <div :class="$style.dayPicker">Fr</div>
                </div>
                <div :class="$style.td">
                    <div :class="$style.dayPicker">Sa</div>
                </div>
            </div>
            <div :class="$style.tbody">
                <div :class="$style.row">
                    <div :class="$style.calendarButton" />
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">1</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">2</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">3</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">4</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">5</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">6</div>
                    </div>
                </div>
                <div :class="$style.row2">
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">7</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">8</div>
                    </div>
                    <div :class="$style.calendarButton10">
                        <div :class="$style.dayPicker8">9</div>
                    </div>
                    <div :class="$style.calendarButton10">
                        <div :class="$style.dayPicker8">10</div>
                    </div>
                    <!-- Bottone Evidenziato -->
                    <div :class="$style.calendarButton12">
                        <div :class="$style.dayPicker8">11</div>
                    </div>
                    <div :class="$style.calendarButton10">
                        <div :class="$style.dayPicker8">12</div>
                    </div>
                    <div :class="$style.calendarButton10">
                        <div :class="$style.dayPicker8">13</div>
                    </div>
                </div>
                <div :class="$style.row3">
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">14</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">15</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">16</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">17</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">18</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">19</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">20</div>
                    </div>
                </div>
                <div :class="$style.row4">
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">21</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">22</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">23</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">24</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">25</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">26</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">27</div>
                    </div>
                </div>
                <div :class="$style.row5">
                    <div :class="$style.calendarButton29">
                        <div :class="$style.dayPicker8">28</div>
                    </div>
                    <div :class="$style.calendarButton29">
                        <div :class="$style.dayPicker8">29</div>
                    </div>
                    <div :class="$style.calendarButton29">
                        <div :class="$style.dayPicker8">30</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">1</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">2</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">3</div>
                    </div>
                    <div :class="$style.calendarButton">
                        <div :class="$style.dayPicker8">4</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style module>
.calendar {
    width: 100%;
    position: relative;
    border-radius: 16px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    isolation: isolate;
    text-align: left;
    font-size: 16px;
    color: #1e1e1e;
    font-family: Inter;
}

.block {
    align-self: stretch;
    display: flex;
    align-items: center;
    gap: 16px;
    z-index: 1;
}

.iconButton {
    border-radius: 32px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
}

.chevronLeftIcon {
    height: 20px;
    width: 20px;
    position: relative;
}

.calendarSelectGroup {
    flex: 1;
    display: flex;
    align-items: flex-start;
    isolation: isolate;
    gap: 8px;
}

.calendarMonthField {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 1;
}

.select {
    align-self: stretch;
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    display: flex;
    align-items: center;
    padding: 6px;
    gap: 8px;
}

.september {
    flex: 1;
    position: relative;
    line-height: 100%;
}

.chevronDownIcon {
    height: 16px;
    width: 16px;
    position: relative;
}

.calendarYearField {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 0;
}

.table {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 0px 0px;
    z-index: 0;
    text-align: center;
    font-size: 12px;
    color: #757575;
    font-family: Geist;
}

.thead {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1px;
}

.td {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dayPicker {
    position: relative;
    line-height: 20px;
}

.tbody {
    display: flex;
    flex-direction: column;
    align-items: center;
    isolation: isolate;
    gap: 1px;
    font-size: 16px;
    color: #1e1e1e;
    font-family: Inter;
}

.row {
    display: flex;
    align-items: center;
    gap: 1px;
    z-index: 4;
}

.calendarButton {
    height: 40px;
    width: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    box-sizing: border-box;
}

.dayPicker8 {
    position: relative;
    line-height: 140%;
    flex-shrink: 0;
}

.row2 {
    display: flex;
    align-items: center;
    gap: 1px;
    z-index: 3;
}

.calendarButton10 {
    height: 40px;
    width: 40px;
    border-radius: 8px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    box-sizing: border-box;
}

.calendarButton12 {
    height: 40px;
    width: 40px;
    border-radius: 8px;
    background-color: #434343;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    box-sizing: border-box;
    color: #f3f3f3;
}

.row3 {
    display: flex;
    align-items: center;
    gap: 1px;
    z-index: 2;
}

.row4 {
    display: flex;
    align-items: center;
    gap: 1px;
    z-index: 1;
}

.row5 {
    display: flex;
    align-items: center;
    gap: 1px;
    z-index: 0;
    color: #b3b3b3;
}

.calendarButton29 {
    height: 40px;
    width: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    box-sizing: border-box;
    color: #1e1e1e;
}
</style>