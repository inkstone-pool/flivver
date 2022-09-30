<template>
  <Container :x="bullet.x" :y="bullet.y"><Sprite :texture="bulletImg" ></Sprite></Container>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import bulletImg from '../assets/images/bullet.png'
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