<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import NavbarTop from '../organisms/NavbarTop.vue'
const store = useStore()
const text = computed(() => {
  return store.state.covidModule.text
})
</script>

<template>
  <div>
    <NavbarTop />
    <h1> {{ text }} </h1>
  </div>
</template>

<style>

</style>
