
<script setup lang="ts">
import Plane from '../components/Plane.vue'
import Bullet from '../components/Bullet.vue';
import EnemyPlane from '../components/EnemyPlane.vue'
import HP from '../components/HP.vue'
import Background from '../components/Background.vue';
import { onMounted, reactive } from 'vue';
import { initGame } from '../game';
import { useGameDataStore } from '../store';
import { router } from '../router';
const gameDataStore=useGameDataStore()
const {plane,bullets,enemyPlanes,tickerContext}=initGame(gameDataStore.plane,gameDataStore.bullets,gameDataStore.enemyPlanes,onGameover)
//游戏结束保存下
function onGameover(){
  gameDataStore.saveGameData(plane,bullets,enemyPlanes)
  router.go(-1)
}
onMounted(() => {
  document.addEventListener('keydown',(e)=>{
   if(e.code==='Space'){
    if(tickerContext.hasTicker()){
      tickerContext.removeTicker()
    }else{
      tickerContext.reStartTicker()
    }
   }
  })
})
</script>
<template>
<Container>
  <Background></Background>
  <EnemyPlane v-for="enemyPlane in enemyPlanes" :enemyPlane="enemyPlane"></EnemyPlane>
  <Plane :plane="plane" ></Plane>
  <Bullet v-for="bullet in bullets" :bullet="bullet"></Bullet>
  <HP :HP="plane.HP"></HP>
</Container>
</template>

<style scoped>
</style>
