<script setup>
import { computed, onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';

const store= useStore()
onMounted(() => {
  store.dispatch('covidModule/getProvinces')
})
const provinces = computed(() => {
  return store.state.covidModule.provinces
})
</script>

<template>
    <div class="py-[84px] bg-kp-blue-light">
        <div class="flex justify-center">
            <span class="text-[30px] text-kp-blue-dark font-semibold mr-[8px]">Lihat Klinik di</span>
            <select class="bg-kp-blue/10 w-[243px] h-[44px] rounded-full border-kp-blue border-4 text-[30px] text-kp-blue font-semibold text-center align-middle">
                <option class="hidden">Pilih Provinsi</option>
                <option v-for="province in provinces" :key="province.id" :value="province.id" 
                    class="bg-white text-[18px] text-left text-black h-[44px]">
                    {{ province.name }}
                </option>
            </select>
        </div>
    </div>
</template>