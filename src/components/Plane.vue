<template>
    <Container :x="plane.x" :y="plane.y">
      <Sprite :texture="bulletImg" anchor="0.5" >
      </Sprite>
    </Container>
  </template>
  
  <script setup lang="ts">
import { onMounted, onUnmounted, PropType } from 'vue';
import bulletImg from '../assets/images/me1.png'
import { Plane } from '../game';

const {plane}=defineProps({
  plane:{
    type:Object as PropType<Plane>,
    required:true
  }
})
const listenFn=(e: { code: string; })=>{
      switch (e.code) {
        case 'ArrowDown':
          plane.moveDown()
          break;
        case 'ArrowUp':
          plane.moveUp()
          break;
        case 'ArrowLeft':
          plane.moveLeft()
          break;
        case 'ArrowRight':
          plane.moveRight()
          break;
        default:
          break;
      }
  }
onMounted(() => {
  window.addEventListener('keydown',listenFn)
});
onUnmounted(()=>{
  window.removeEventListener('keydown',listenFn)
})

  </script>
  
  <style>
  
  </style>