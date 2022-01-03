<script setup>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import ClinicUnit from "./ClinicUnit.vue";

const store = useStore()

onMounted(() => {
  store.dispatch("covidModule/getClinics")
})

const clinics = computed(() => {
  return store.state.covidModule.clinics
})

const listLimit = ref(5)

const filterList = computed(() => {
  return clinics.value.slice(0,listLimit.value)
})
</script>

<template>
    <div>
        <div>
            <span class="font-bold">Ada {{clinics.length}} Klinik Sesuai Filter:</span>
        </div>
        <div class="mt-[16px] space-y-4">
            <ClinicUnit v-for="clinic in filterList" :key="clinic.id" :clinic="clinic" class="p-5"/>
        </div>

        <div class="mt-5">
            <div>
                <span>Tampilkan</span>
                <select class="ml-3" v-model="listLimit">
                    <option :value="5">5</option>
                    <option :value="10">10</option>
                    <option :value="20">20</option>
                </select>
            </div>
        </div>
    </div>
</template>