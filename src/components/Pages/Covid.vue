<script setup>
import NavbarTop from '../organisms/NavbarTop.vue'
import SelectProvince from '../organisms/SelectProvince.vue';
import CovidInfo from '../organisms/CovidInfo.vue';
import PageFooter from '../organisms/PageFooter.vue';
</script>

<template>
  <div>
    <NavbarTop  class="sticky top-0"/>
    <SelectProvince />
    <div id="wrapperBody" class="px-32">
      <div id="filterButton" class="flex flex-row-reverse mt-[24px] mb-[22px]">
        <button class="w-[173px] h-[39px] bg-kp-blue text-white text-[16px] font-semibold px-[24px] py-[8px] rounded-[4px]">
          Semua Filter
        </button>
      </div>
      <CovidInfo class="mt-[81px]"/>
    </div>
    <PageFooter />
  </div>
</template>

<style>

</style>
