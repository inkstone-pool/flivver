<template>
    <Container>
      <Sprite :texture="bkImg" :width="GAME_WIDTH" :height="GAME_HEIGHT">
      </Sprite>
    </Container>
  </template>
  
  <script setup lang="ts">
  import { GAME_HEIGHT ,GAME_WIDTH} from "../game";
    import bkImg from '../assets/images/bk2.jpg'
  </script>
  
  <style>
  
  </style>