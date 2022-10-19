<template>
    <Container :x="bufferGear.x" :y="bufferGear.y" >
      <Sprite :texture="bufferGear.bufferIcon" anchor="0.5">
      </Sprite>
    </Container>
  </template>
  
<script setup lang="ts">
import { PropType } from 'vue';
import { BufferGear } from '../game/BufferGear';
defineProps({
    bufferGear:{
    type:Object as PropType<BufferGear>,
    required:true
  }
})
  </script>
  
  <style>
  
  </style>