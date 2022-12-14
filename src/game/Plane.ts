import {Bullet} from "./Bullet"
export interface Plane{
    HP:number
    bullets:Bullet[]
    x:number,
    y:number,
    speed:number
    width:number,
    height:number,
    shiledHP:number
    moveDown:()=>void
    moveUp:()=>void
    moveLeft:()=>void
    moveRight:()=>void
    attack:()=>void
    run:()=>void
    injured:()=>void
}
const defaultOptions={
    x:300,
    y:600,
    speed:5,
    HP:5,
    width:102,
    height:126,
    shiledHP:0
}
let onGameOver: () => void
export function injectGameoverFun(fn:()=>void){
  onGameOver=fn
}
export function setupPlane(plane: Plane,bullets:Bullet[]=[],options?: {x:number,y:number}){
    plane.bullets=bullets
    Object.assign(plane,defaultOptions,options)
    const planeContext=initAttack(plane)
    initRun(plane)
    initMove(plane)
    initInjured(plane)
    return planeContext
}
function initInjured(plane: Plane){
    plane.injured=function(damageValue=1){
        if(plane.shiledHP>0){
            plane.shiledHP-=damageValue
        }else{
            plane.HP-=damageValue
        }
        if(plane.HP<=0){
            onGameOver&&onGameOver()
        } 
    }    
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
        bullet.x=x
        bullet.y=y-126
        bullet.onDestroy=()=>{
            plane.bullets.splice(plane.bullets.indexOf(bullet),1)
        }
        plane.bullets.push(bullet)
    }
    const periodicityAttack=()=>{
       return  setInterval(()=>{
            plane.attack()
        },500)
    }
    let timer=periodicityAttack()
    return  {
        timer,
        stopTrack(){
            clearInterval(this.timer)
        },
        startTrack(){
            this.timer=periodicityAttack()
        }
    }
}

