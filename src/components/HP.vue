<template>
    <Container :x="0+(item-1)*45" :y="0" v-for="item in HP" :key="item">
      <Sprite :texture="lifeImg" >
      </Sprite>
    </Container>
  </template>
  
  <script setup lang="ts">
import lifeImg from '../assets/images/life.png'

const {HP}=defineProps({
  HP:{
    type: Number,
    required:true

  }
})
  </script>
  
  <style>
  
  </style>