import { Application } from "pixi.js"
import { P } from "vitest/dist/global-e98f203b"
import { Bullet } from "./Bullet"
import { EnemyPlane, initEnemyPlanes, runEnemyPlanes } from "./EnemyPlane"
import { fighting } from "./fighting"
import { Plane, setupPlane } from "./Plane"

export const game=new Application({
    width:700,
    height:700,
})
export *from './Plane'
export *from './Bullet'
export *from './EnemyPlane'
document.body.appendChild(game.view)
export function initGame(_plane: any,bullets: Bullet[],enemyPlanes:EnemyPlane[]){
     const plane =setupPlane(_plane,bullets,{x:300,y:600})
     initEnemyPlanes(enemyPlanes)
     mainTicker(plane,enemyPlanes)
     return {
        plane,
        bullets,
        enemyPlanes
     }
}
function mainTicker(plane:Plane,enemyPlanes:EnemyPlane[]){
    game.ticker.add(()=>{
        plane.run()
        runEnemyPlanes(enemyPlanes)
        fighting(plane,enemyPlanes)
    })
    
}


