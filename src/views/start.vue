<template>
    <Container>
      <Sprite :texture="bkImg" >
      </Sprite>
      <Sprite x='170' y="450" :texture="beginImg" @click="begin" :interactive="true"> </Sprite>
      <Sprite x='155' y="550" width="200" height='60' :texture="againImg" @click="again"  :interactive="true"> </Sprite>
    </Container>
  </template>
  
  <script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import bkImg from '../assets/images/bk2.jpg'
import beginImg from '../assets/images/func/begin.png'
import againImg from '../assets/images/func/again.png'
import { useGameDataStore } from '../store';
const router = useRouter()

const gameDataStore=useGameDataStore()
function begin(){
    router.push('./play')
}
function again(){
    //todo 清除pinia数据
    gameDataStore.$reset()
    router.push('./play')
}
  </script>
  
  <style>
  
  </style>