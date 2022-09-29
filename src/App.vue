
<script setup lang="ts">
  import Plane from './components/Plane.vue'
  import Bullet from './components/Bullet.vue';
import { reactive } from 'vue';
import { setupPlane } from './game/Plane';
  let data = reactive({x:0,y:0})
  setupPlane(data)
</script>
<template>
  <Container>
    <Plane></Plane>
    <Bullet></Bullet>
  </Container>
</template>

<style scoped>
</style>
