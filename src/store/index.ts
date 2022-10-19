import { defineStore } from 'pinia'
import { Bullet, EnemyPlane, Plane } from '../game'
import { BufferGear } from '../game/BufferGear'

export const useGameDataStore = defineStore('gameData', {
  state: () => ({ 
    plane:{} as Plane,
    bullets:[] as Bullet[],
    enemyPlanes:[] as EnemyPlane[],
    bufferGears:[] as BufferGear[]
  }),
  actions: {
    saveGameData(plane: Plane,bullets:Bullet[],enemyPlanes: EnemyPlane[],bufferGears:BufferGear[]) {
        this.plane=plane
        this.enemyPlanes=enemyPlanes
        this.bullets=bullets
        this.bufferGears=bufferGears
      },
  },
})