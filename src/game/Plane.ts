import { ReactiveEffect } from "vue"
import {Bullet} from "./Bullet"
export interface Plane{
    bullets:Bullet[]
    x:number,
    y:number,
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
    speed:5
}
export function setupPlane(plane: any,bullets:Bullet[]=[],options?: {x:number,y:number}):Plane{
    plane.bullets=bullets
    Object.assign(plane,defaultOptions,options)
    initAttack(plane,bullets)
    initRun(plane, bullets)
    initMove(plane)
    return plane
}

function initMove(plane: any) {
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

function initRun(plane: any, bullets: Bullet[]) {
    plane.run = function () {
        bullets.forEach(bullet => {
            bullet.move()
        })
    }
}
function initAttack(plane: any,bullets: Bullet[]) {
    plane.attack = function () {
        let { x, y } = plane
        x += 30
        y -= 50
        const bullet = new Bullet(x, y)
        bullet.onDestroy=()=>{
            bullets.splice(bullets.indexOf(bullet),1)
        }
        bullets.push(bullet)
    }
    setInterval(()=>{
        plane.attack()
    },1000)
}

