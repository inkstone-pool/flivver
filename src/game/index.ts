import { Application } from "pixi.js"
import { Bullet } from "./Bullet"
import { EnemyPlane, initEnemyPlanes, runEnemyPlanes } from "./EnemyPlane"
import { fighting } from "./fighting"
import { Plane, setupPlane ,injectGameoverFun} from "./Plane"
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
export function initGame(_plane: Plane,bullets: Bullet[],enemyPlanes:EnemyPlane[],onGameover:()=>void){
     const plane =setupPlane(_plane,bullets,{x:300,y:600})
     initEnemyPlanes(enemyPlanes,bullets)
     const tickerContext=mainTicker(plane,enemyPlanes)
     injectGameoverFun(onGameover)
     return {
        plane,
        bullets,
        enemyPlanes,
        //提供继续,暂停功能
        tickerContext,
     }
}
function mainTicker(plane:Plane,enemyPlanes:EnemyPlane[]){
    function tickerFn(){
        plane.run()
        runEnemyPlanes(enemyPlanes)
        fighting(plane,enemyPlanes)
    }
    game.ticker.add(tickerFn)
    const context={
        removeTicker:()=>{
            game.ticker.remove(tickerFn)
        },
        reStartTicker:()=>{
            game.ticker.add(tickerFn)
        },
    }
    return context
}


