
<script setup lang="ts">
  import Plane from './components/Plane.vue'
  import Bullet from './components/Bullet.vue';
  import { reactive } from 'vue';
  import { initGame } from './game';
  const {plane,bullets}=initGame(reactive({}),reactive([]))
</script>
<template>
  <Container>
    <Plane :plane="plane" ></Plane>
    <Bullet v-for="bullet in bullets" :bullet="bullet"></Bullet>
  </Container>
</template>

<style scoped>
</style>
