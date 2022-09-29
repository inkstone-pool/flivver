import { Application } from "pixi.js"

export const game=new Application({
    width:700,
    height:700,
})
document.body.appendChild(game.view)