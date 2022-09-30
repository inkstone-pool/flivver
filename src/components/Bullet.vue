<template>
  <Container><Sprite :texture="bulletImg" :x="bullet.x" :y="bullet.y"></Sprite></Container>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import bulletImg from '../assets/images/bullet.png'
import Bullet  from '../game/Bullet';

const {bullet}=defineProps({
  bullet:{
    type:Object as PropType<Bullet>,
    required:true

  }
})
</script>

<style>

</style>