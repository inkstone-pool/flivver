import { Application } from "pixi.js"
import { BufferGear } from "./BufferGear"
import { Bullet } from "./Bullet"
import { EnemyPlane, initEnemyPlanes, runEnemyPlanes } from "./EnemyPlane"
import { fighting } from "./fighting"
import { gainWatching } from "./Gain"
import { Plane, setupPlane ,injectGameoverFun} from "./Plane"
const GAME_WIDTH=600
const GAME_HEIGHT=window.innerHeight
export const game=new Application({
    width:GAME_WIDTH,
    height:GAME_HEIGHT,
})
export {GAME_HEIGHT,GAME_WIDTH}
export *from './Plane'
export *from './Bullet'
export *from './EnemyPlane'
export *from './BufferGear'
document.body.appendChild(game.view)
export function initGame(
     _plane: Plane,bullets: Bullet[],
     enemyPlanes:EnemyPlane[],
     bufferGears:BufferGear[],
     onGameover:()=>void){
     const planeContext =setupPlane(_plane,bullets,{x:300,y:600})
     const enemyPlaneContext=initEnemyPlanes(enemyPlanes,bullets,bufferGears)
     const tickerContext=mainTicker(_plane,enemyPlanes,bufferGears,enemyPlaneContext,planeContext)
     injectGameoverFun(onGameover)
     return {
        plane:_plane,
        bullets,
        enemyPlanes,
        bufferGears,
        //提供继续,暂停功能
        tickerContext,
     }
}
function mainTicker(plane:Plane,enemyPlanes:EnemyPlane[],bufferGears:BufferGear[],
    enemyPlaneContext:{timer:NodeJS.Timer,stopGenEnemy:()=>void,startGenEnemy:()=>void},
    planeContext:{timer:NodeJS.Timer,stopTrack:()=>void,startTrack:()=>void}){
    function tickerFn(){
        plane.run()
        runEnemyPlanes(enemyPlanes)
        fighting(plane,enemyPlanes)
        gainWatching(plane,bufferGears)
    }
    const context={
        started(){
            return  game.ticker.count>1
        },
        removeTicker:()=>{
            game.ticker.remove(tickerFn)
            planeContext.stopTrack()
            enemyPlaneContext.stopGenEnemy()
        },
        reStartTicker:()=>{
            game.ticker.add(tickerFn)
            enemyPlaneContext.startGenEnemy()
            planeContext.startTrack()
        }, 
    }
    game.ticker.add(tickerFn)
    return context
}


