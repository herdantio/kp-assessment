<script setup>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import ClinicUnit from "./ClinicUnit.vue";

const store = useStore()

onMounted(() => {
  store.dispatch("covidModule/getClinics")
})

const clinics = computed(() => {
  return store.state.covidModule.clinics
})
</script>

<template>
    <div>
        <div>
            <span class="font-bold">Ada {{clinics.length}} Klinik Sesuai Filter:</span>
        </div>
        <div class="mt-[16px] space-y-4">
            <ClinicUnit v-for="clinic in clinics" :key="clinic.id" :clinic="clinic" class="p-5"/>
        </div>
    </div>
</template>