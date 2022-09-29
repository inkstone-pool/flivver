<template>
    <Container>
      <Sprite :texture="bulletImg" :x="plane.x" :y="plane.y">
      </Sprite>
    </Container>
  </template>
  
  <script setup lang="ts">
import { reactive } from 'vue';
import bulletImg from '../assets/images/me1.png'
import { setupPlane } from '../game';

const plane= setupPlane(reactive({}))
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
    default:
      break;
  }
})
  </script>
  
  <style>
  
  </style>