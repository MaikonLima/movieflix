<template>
  <header class="fixed top-0 left-0 w-full h-16 bg-gray-800 z-50 flex items-center px-4 md:px-8 lg:px-12">
    <nav class="flex justify-between w-full">
      <div class="flex items-center">
        <div class="hidden lg:flex items-center">
          <router-link to="/" class="ml-4 text-white hover:text-gray-300 text-sm md:text-base lg:text-lg"
            :class="{ 'font-bold': $route.path === '/' }">
            <img src="@/assets/logo.png" alt="Logo" href="/"
              class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 cursor-pointer" />
          </router-link>
        </div>
        <div class="ml-0 md:ml-4 md:hidden">
          <button @click="toggleMenu" class="text-white">
            <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="hidden md:flex items-center text-sm gap-5">
          <router-link to="/" class="ml-4 text-white hover:text-gray-300 text-sm md:text-base lg:text-lg"
            :class="{ 'font-bold': $route.path === '/' }">
            Home
          </router-link>
          <router-link to="/movies" class="ml-4 text-white hover:text-gray-300 text-sm md:text-base lg:text-lg"
            :class="{ 'font-bold': $route.path === '/movies' }">
            Filmes
          </router-link>
          <router-link to="/series" class="ml-4 text-white hover:text-gray-300 text-sm md:text-base lg:text-lg"
            :class="{ 'font-bold': $route.path === '/series' }">
            Séries
          </router-link>
        </div>
      </div>
      <div class="flex items-center md:hidden lg:hidden">
        <router-link to="/" class="ml-4 text-white hover:text-gray-300 text-sm md:text-base lg:text-lg"
          :class="{ 'font-bold': $route.path === '/' }">
          <img src="@/assets/logo.png" alt="Logo" href="/"
            class="w-10 h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 cursor-pointer" />
        </router-link>
      </div>
      <div class="flex items-center relative gap-2">
        <img src="@/assets/heart.svg" alt="Favoritos" class="w-6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 cursor-pointer ml-4"
          @click="goToFavorites" />
      </div>
    </nav>
    <div v-if="menuOpen" class="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col md:hidden">
      <router-link to="/" class="py-2 px-4 hover:bg-gray-700" @click="closeMenu">
        Home
      </router-link>
      <router-link to="/movies" class="py-2 px-4 hover:bg-gray-700" @click="closeMenu">
        Filmes
      </router-link>
      <router-link to="/series" class="py-2 px-4 hover:bg-gray-700" @click="closeMenu">
        Séries
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    goToFavorites() {
      this.$router.push('/watchlist');
    },
  },
};
</script>

<style scoped>
@media (max-width: 640px) {
  .nav-link:nth-child(n+2) {
    display: none;
  }
}

@media (min-width: 641px) {
  .nav-link {
    display: inline-block;
  }
}
</style>
