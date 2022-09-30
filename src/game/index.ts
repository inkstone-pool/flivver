import { Application } from "pixi.js"
import { P } from "vitest/dist/global-e98f203b"
import { Plane, setupPlane } from "./Plane"

export const game=new Application({
    width:700,
    height:700,
})
export *from './Plane'
document.body.appendChild(game.view)
export function initGame(_plane: any,bullets: any[]){
     const plane =setupPlane(_plane,bullets,{x:300,y:600})
     mainTicker(plane)
     return {
        plane,
        bullets,
     }
}
function mainTicker(plane:Plane){
    game.ticker.add(()=>{
        plane.run()
    })
    
}