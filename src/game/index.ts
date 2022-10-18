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
     const planeContext =setupPlane(_plane,bullets,{x:300,y:600})
     const enemyPlaneContext=initEnemyPlanes(enemyPlanes,bullets)
     const tickerContext=mainTicker(_plane,enemyPlanes,enemyPlaneContext,planeContext)
     injectGameoverFun(onGameover)
     return {
        plane:_plane,
        bullets,
        enemyPlanes,
        //提供继续,暂停功能
        tickerContext,
     }
}
function mainTicker(plane:Plane,enemyPlanes:EnemyPlane[],
    enemyPlaneContext:{timer:NodeJS.Timer,stopGenEnemy:()=>void,startGenEnemy:()=>void},
    planeContext:{timer:NodeJS.Timer,stopTrack:()=>void,startTrack:()=>void}){
    function tickerFn(){
        plane.run()
        runEnemyPlanes(enemyPlanes)
        fighting(plane,enemyPlanes)
    }
    const context={
        started(){
            return  game.ticker.started
        },
        removeTicker:()=>{
            game.ticker.stop()
            planeContext.stopTrack()
            enemyPlaneContext.stopGenEnemy()
        },
        reStartTicker:()=>{
            game.ticker.start()
            enemyPlaneContext.startGenEnemy()
            planeContext.startTrack()
        },   
    }

    if(game.ticker.count===1){
        game.ticker.add(tickerFn)
    }
    return context
}


