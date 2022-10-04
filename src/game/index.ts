import { Application } from "pixi.js"
import { Bullet } from "./Bullet"
import { EnemyPlane, initEnemyPlanes, runEnemyPlanes } from "./EnemyPlane"
import { fighting } from "./fighting"
import { Plane, setupPlane } from "./Plane"
const GAME_WIDTH=500
const GAME_HEIGHT=770
export const game=new Application({
    width:GAME_WIDTH,
    height:GAME_HEIGHT,
})
export {GAME_HEIGHT,GAME_WIDTH}
export *from './Plane'
export *from './Bullet'
export *from './EnemyPlane'
document.body.appendChild(game.view)
export function initGame(_plane: Plane,bullets: Bullet[],enemyPlanes:EnemyPlane[]){
     const plane =setupPlane(_plane,bullets,{x:300,y:600})
     initEnemyPlanes(enemyPlanes,bullets)
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


