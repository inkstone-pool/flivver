import { ReactiveEffect } from "vue"
import {Bullet} from "./Bullet"
export interface Plane{
    HP:number
    bullets:Bullet[]
    x:number,
    y:number,
    speed:number
    moveDown:()=>void
    moveUp:()=>void
    moveLeft:()=>void
    moveRight:()=>void
    attack:()=>void
    run:()=>void
}
const defaultOptions={
    x:300,
    y:600,
    speed:5,
    HP:5,
}
export function setupPlane(plane: Plane,bullets:Bullet[]=[],options?: {x:number,y:number}):Plane{
    plane.bullets=bullets
    Object.assign(plane,defaultOptions,options)
    initAttack(plane)
    initRun(plane)
    initMove(plane)
    return plane
}

function initMove(plane: Plane) {
    plane.moveDown = function () {
        plane.y += plane.speed
    }

    plane.moveUp = function () {
        plane.y -= plane.speed
    }
    plane.moveLeft = function () {
        plane.x -= plane.speed
    }
    plane.moveRight = function () {
        plane.x += plane.speed
    }
}

function initRun(plane: Plane ) {
    plane.run = function () {
        plane.bullets.forEach(bullet => {
            bullet.move()
        })
    }
}
function initAttack(plane: Plane) {
    plane.attack = function () {
        let { x, y } = plane  
        const bullet = new Bullet('baseBullet')
        bullet.x=x+40
        bullet.y=y-50
        bullet.onDestroy=()=>{
            plane.bullets.splice(plane.bullets.indexOf(bullet),1)
        }
        plane.bullets.push(bullet)
    }
    setInterval(()=>{
        plane.attack()
    },500)
}

