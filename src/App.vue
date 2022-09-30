
<script setup lang="ts">
  import Plane from './components/Plane.vue'
  import Bullet from './components/Bullet.vue';
  import EnemyPlane from './components/EnemyPlane.vue'
  import { reactive } from 'vue';
  import { initGame } from './game';
  const {plane,bullets,enemyPlanes}=initGame(reactive({}),reactive([]),reactive([]))
</script>
<template>
  <Container>
    <EnemyPlane v-for="enemyPlane in enemyPlanes" :enemyPlane="enemyPlane"></EnemyPlane>
    <Plane :plane="plane" ></Plane>
    <Bullet v-for="bullet in bullets" :bullet="bullet"></Bullet>
  </Container>
</template>

<style scoped>
</style>
