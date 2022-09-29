import { Application } from "pixi.js"

export const game=new Application({
    width:700,
    height:700,
})
export *from './Plane'
document.body.appendChild(game.view)
// export function initGame(plane,bullets){
//     const plane =setupPlane(plane,{})
// }