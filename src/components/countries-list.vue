<template>
  <div class="countries-list-container mb-4 container max-w-full">
    <div class="search-container w-full my-4">
      <input v-model="search" placeholder="Search country" class="py-2 px-5 border rounded outline-0 w-full">
    </div>

    <div v-if="!loading" class="countries-list-container">
      <transition-group
        name="grid"
        tag="ul"
        v-if="computedCountries.length"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <li
          v-for="country in computedCountries"
          :key="country.name.common"
          class="border rounded shadow text-center overflow-hidden"
        >
          <img
            loading="lazy"
            :src="country.flags.svg"
            :alt="`Flag of ${country.name.common}`"
            class="w-full h-32 object-contain"
          />
          <p class="p-2 font-bold border-t">{{ country.name.common }}</p>
        </li>
      </transition-group>

      <div v-else class="no-filtered-items-message flex h-[30vh] flex-col justify-center items-center">
        <h2 class="no-filtered-items-title flex text-2xl items-center justify-center">No countries with name</h2>
        <h3 class="font-black text-1xl">{{ search }}</h3>
      </div>
    </div>

    <div v-else class="loading h-screen flex items-center justify-center text-center p-5">Loading...</div>
  </div>
</template>

<script setup lang="ts">
import type { RestCountry }     from '@/types/global.ts'
import axios, { AxiosResponse } from 'axios'
import { computed, ref }        from 'vue'


const countries = ref<RestCountry[]>([]);
const loading = ref<boolean>(false);
const search = ref<string>('');
const computedCountries = computed<RestCountry[]>(() => countries.value.filter((country: RestCountry) =>
  country.name.common.toLowerCase().includes(search.value.toLowerCase())
));

async function getCountries(): Promise<void> {
  loading.value = true;

  try {
    const response = await axios.get<AxiosResponse<RestCountry[]>>('https://restcountries.com/v3.1/all');

    loading.value = false;
    countries.value = response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
}

getCountries();
</script>

<style scoped>
  .grid-enter-active,
  .grid-leave-active {
    transition: all 0.5s ease;
  }
  .grid-enter-from {
    opacity: 0;
    transform: scale(0.9);
  }
  .grid-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }
</style>
