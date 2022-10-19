
<script setup lang="ts">
import Plane from '../components/Plane.vue'
import Bullet from '../components/Bullet.vue';
import EnemyPlane from '../components/EnemyPlane.vue'
import HP from '../components/HP.vue'
import Shiled from '../components/Shield.vue'
import { onMounted, onUnmounted } from 'vue';
import { initGame } from '../game';
import { useGameDataStore } from '../store';
import { router } from '../router';
import BufferGear from '../components/BufferGear.vue';
const gameDataStore=useGameDataStore()
const {plane,bullets,enemyPlanes,bufferGears,tickerContext}=initGame(
  gameDataStore.plane,
  gameDataStore.bullets,
  gameDataStore.enemyPlanes,
  gameDataStore.bufferGears,
onGameover)
//游戏结束保存下
function onGameover(){
  console.log('onGameover',plane)
  gameDataStore.saveGameData(plane,bullets,enemyPlanes,bufferGears)
  router.go(-1)
  setTimeout(()=>{
    tickerContext.removeTicker()
  },50)
}
function keydownFn(e: { code: string; }){
   if(e.code==='Space'){
    console.log(tickerContext.started());
    
    if(tickerContext.started()){
      tickerContext.removeTicker()
    }else{
      tickerContext.reStartTicker()
    }
   }
}
onUnmounted(() =>{
  document.removeEventListener('keydown',keydownFn)
}),
onMounted(() => {
  document.addEventListener('keydown',keydownFn)
})
</script>
<template>
<Container>
  <EnemyPlane v-for="enemyPlane in enemyPlanes" :enemyPlane="enemyPlane"></EnemyPlane>
  <Plane :plane="plane" ></Plane>
  <BufferGear  v-for="bufferGear in bufferGears" :buffer-gear="bufferGear"></BufferGear>
  <Shiled v-if="plane.shiledHP>0" :position="{x:plane.x,y:plane.y}" ></Shiled>
  <Bullet v-for="bullet in bullets" :bullet="bullet"></Bullet>
  <HP :HP="plane.HP"></HP>
</Container>
</template>

<style scoped>
</style>
