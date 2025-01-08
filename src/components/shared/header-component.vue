<template>
  <header class="bg-green-900/80 sticky top-0 backdrop-blur-lg py-3 text-white flex justify-between">
    <div class="container max-w-full">
      <div v-if="!isAuthenticated">
        <button @click="login" class="bg-blue-500 px-4 py-2 rounded">Log In</button>
      </div>

      <div class="flex items-center gap-3 w-full justify-between" v-else>
        <div class="user-info flex items-center gap-4">
          <div class="avatar rounded-full overflow-hidden">
            <img class="h-[50px]" :src="user.picture" :alt="user.name">
          </div>

          <p>{{ user.name }}</p>
        </div>

        <button @click="logout" class="bg-red-500 px-4 py-2 rounded">Log Out</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'


const { loginWithRedirect, logout: logoutAction, user, isAuthenticated } = useAuth0();

  const login = () => loginWithRedirect();
  const logout = () => logoutAction({ returnTo: window.location.origin });

</script>

<style scoped>

</style>
