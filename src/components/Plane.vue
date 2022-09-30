<template>
    <Container>
      <Sprite :texture="bulletImg" :x="plane.x" :y="plane.y">
      </Sprite>
    </Container>
  </template>
  
  <script setup lang="ts">
import { PropType } from 'vue';
import bulletImg from '../assets/images/me1.png'
import { Plane } from '../game';

const {plane}=defineProps({
  plane:{
    type:Object as PropType<Plane>,
    required:true

  }
})
window.addEventListener('keydown',(e)=>{
 
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
    case 'Space':
      plane.attack()
      break;
    default:
      break;
  }
})
  </script>
  
  <style>
  
  </style>