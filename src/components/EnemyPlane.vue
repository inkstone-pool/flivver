<template>
    <Container :x="enemyPlane.x" :y="enemyPlane.y"><Sprite :texture="enemyImg" ></Sprite></Container>
  </template>
  
  <script setup lang="ts">
  import { PropType } from 'vue';
  import enemyImg from '../assets/images/enemy/enemy2.png'
  import {EnemyPlane } from '../game';
  const {enemyPlane}=defineProps({
    enemyPlane:{
      type:Object as PropType<EnemyPlane>,
      required:true
  
    }
  })
  </script>
  
  <style>
  
  </style>