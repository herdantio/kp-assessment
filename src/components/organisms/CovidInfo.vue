<script setup>
import { computed } from "@vue/reactivity";

const infoImages = computed(() => {
    const images = [
        'Banner_Step_GA_TK_4fa7a46a31.png',
        'Banner_Step_GA_TV_aa3e282e2c.png',
        'Banner_Step_TA_TK_7a0a9a4d79.png',
        'Image_Step_CT_KL_981a887e95.png',
        'Image_Step_CT_PP_f78c4abddb.png',
        'Image_Step_GA_TD_92de163514.png',
        'Rapid_Test_Klinik_Pintar_IDI_Tersedia_di_Traveloka_Xperience_6bb128eb3d.png'
    ]
    return images.map(image => new URL(`../../assets/info/${image}`, import.meta.url).href)
}) 
</script>

<template>
    <div>
        <div class="flex justify-between">
            <span class="text-[16px] font-semibold">Perlu Diketahui</span>
            <button class="text-[16px] font-semibold text-kp-blue underline">Lihat Semua</button>
        </div>
        <div class="mt-[20px] flex flex-row space-x-5 overflow-x-auto">
            <img  v-for="image in infoImages" :key="image" :src="image" class="max-w-xs rounded border"/>
        </div>
    </div>
</template>