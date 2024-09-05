<template>
  <div>
    <HeaderComponent />
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
  },
};
</script>
