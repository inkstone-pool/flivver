<template>
    <Container :x="position.x" :y="position.y" >
      <Sprite :texture="shiledImg" anchor="0.5">
      </Sprite>
    </Container>
  </template>
  
<script setup lang="ts">
import shiledImg from '../assets/images/Bonus_Items/shiled.png'

const {shiledHP,position}=defineProps({
  shiledHP:{
    type: Number,
    required:true
  },
  position:{
    type: Object,
    required:true
  }
})
  </script>
  
  <style>
  
  </style>