import { defineStore } from 'pinia'
import { Bullet, EnemyPlane, Plane } from '../game'

export const useGameDataStore = defineStore('gameData', {
  state: () => ({ 
    plane:{} as Plane,
    bullets:[] as Bullet[],
    enemyPlanes:[] as EnemyPlane[]
  }),
  actions: {
    saveGameData(plane: Plane,bullets:Bullet[],enemyPlanes: EnemyPlane[]) {
        this.plane=plane
        this.enemyPlanes=enemyPlanes
        this.bullets=bullets
      },
  },
})