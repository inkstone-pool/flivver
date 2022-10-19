<template>
  <Container :x="bullet.x" :y="bullet.y"><Sprite :texture="bullet.bulletImg" anchor="0.5"></Sprite></Container>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import {Bullet}  from '../game';
const {bullet}=defineProps({
  bullet:{
    type:Object as PropType<Bullet>,
    required:true

  }
})
</script>

<style>

</style>