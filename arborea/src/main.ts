import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/global.css'
import App from '@/App.vue'
import HomePage from './views/HomePage.vue'

import EquipmentHome from './views/equipment/EquipmentHome.vue'
import EquipmentWeather from './views/equipment/weather/EquipmentWeather.vue'
import EquipmentFood from './views/equipment/food/EquipmentFood.vue'
import EquipmentMisc from './views/equipment/misc/EquipmentMisc.vue'
import EquipmentVirtualBag from './views/equipment/virtual-bag/EquipmentVirtualBag.vue'

import MatesHome from './views/mates/MatesHome.vue'

import WatchingHome from './views/watching/WatchingHome.vue'

import BivouacHome from './views/bivouac/BivouacHome.vue'

import PlanningHome from './views/planning/PlanningHome.vue'

const routes = [
    { path: '/' , component: HomePage},

    { path: '/equipment/' , component: EquipmentHome},
        { path: '/equipment/weather/' , component: EquipmentWeather},
        { path: '/equipment/food/' , component: EquipmentFood},
        { path: '/equipment/misc/' , component: EquipmentMisc},
        { path: '/equipment/virtual-bag/' , component: EquipmentVirtualBag},
    
    { path: '/bivouac/' , component: BivouacHome},

    { path: '/planning/' , component: PlanningHome},

    { path: '/watching/' , component: WatchingHome},

    { path: '/mates/' , component: MatesHome},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')
