<template>
    <Container>
      <Sprite :x='GAME_WIDTH/2' y="550" anchor="0.5" :texture="beginImg" @click="begin" :interactive="true"> </Sprite>
      <Sprite :x='GAME_WIDTH/2' y="650" anchor="0.5" :texture="againImg" @click="again"  :interactive="true"> </Sprite>
    </Container>
  </template>
  
  <script setup lang="ts">
import {  useRouter } from 'vue-router';
import {GAME_WIDTH}from '../game'
import beginImg from '../assets/images/func/start.svg'
import againImg from '../assets/images/func/restart.svg'
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