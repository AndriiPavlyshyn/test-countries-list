<template>
  <div class="app-container">
    <HeaderComponent/>

    <div v-if="!isLoading">
      <router-view/>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/shared/header-component.vue'
import { useAuth0 }    from '@auth0/auth0-vue'


const { isLoading } = useAuth0();
</script>

<style scoped>

</style>
